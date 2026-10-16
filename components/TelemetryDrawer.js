'use client';

import { useState, useEffect } from 'react';
import { personalInfo } from '../lib/data';

export default function TelemetryDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [sessionSeconds, setSessionSeconds] = useState(0);
  const [logs, setLogs] = useState([
    'INFO  [main] c.a.portfolio.Bootstrap : Initialized portfolio context',
    'INFO  [kafka-listener-1] c.a.telecom.Consumer : Partition sync OK (lag: 0)',
    'DEBUG [gateway-filter] c.a.auth.JwtFilter : Stateless bearer evaluated'
  ]);
  const [pingCount, setPingCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSessionSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Toggle with backtick (`) if not typing inside an input/textarea
      if (
        e.key === '`' &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    const handleCustomToggle = () => {
      setIsOpen((prev) => !prev);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('toggle-telemetry-drawer', handleCustomToggle);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('toggle-telemetry-drawer', handleCustomToggle);
    };
  }, [isOpen]);

  const handlePing = () => {
    const nextCount = pingCount + 1;
    setPingCount(nextCount);
    const timestamp = new Date().toISOString().substring(11, 19);
    const ms = Math.floor(12 + Math.random() * 18);
    const newLog = `DEBUG [ping-worker-${nextCount}] c.a.telemetry.Probe : Heartbeat ping #${nextCount} ACK (${ms}ms) traceId=0x${Math.random().toString(16).substring(2, 8)}`;
    setLogs((prev) => [...prev.slice(-5), newLog]);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Engineering Telemetry & System Diagnostics"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-full max-w-xl bg-bg-surface border border-bg-subtle rounded-lg shadow-2xl overflow-hidden font-mono text-xs text-ink-muted"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-bg-subtle bg-bg-elevated/40">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-status-online" />
            <span className="font-semibold text-ink-primary">
              System Telemetry · Ankit Katole
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="text-ink-faint hover:text-ink-primary px-2 py-0.5 rounded border border-bg-subtle text-[11px]"
          >
            ESC to close
          </button>
        </div>

        {/* Runtime Diagnostics Grid */}
        <div className="p-5 space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-2.5 bg-bg-primary rounded border border-bg-subtle">
              <div className="text-[10px] text-ink-faint uppercase">Session Uptime</div>
              <div className="text-ink-primary font-semibold text-sm mt-0.5">
                {sessionSeconds}s
              </div>
            </div>
            <div className="p-2.5 bg-bg-primary rounded border border-bg-subtle">
              <div className="text-[10px] text-ink-faint uppercase">Primary Stack</div>
              <div className="text-ink-primary font-semibold text-sm mt-0.5">
                Java 8+ / Spring
              </div>
            </div>
            <div className="p-2.5 bg-bg-primary rounded border border-bg-subtle col-span-2 sm:col-span-1">
              <div className="text-[10px] text-ink-faint uppercase">Role & Org</div>
              <div className="text-accent-copper font-semibold text-sm mt-0.5">
                SE · Capgemini
              </div>
            </div>
          </div>

          {/* Architecture Note */}
          <div className="p-3 bg-bg-elevated/60 border border-bg-subtle rounded text-ink-primary text-[11px] leading-relaxed">
            <span className="text-accent-copper font-semibold">Core Principle: </span>
            &ldquo;Make the contracts explicit, the errors readable, and the message processing idempotent.&rdquo;
          </div>

          {/* Diagnostic Log Console */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-ink-faint uppercase tracking-wider">
                Telemetry Log Stream
              </span>
              <button
                type="button"
                onClick={handlePing}
                className="px-2.5 py-1 bg-bg-elevated hover:bg-bg-subtle text-ink-primary rounded border border-bg-subtle text-[11px] transition-colors"
              >
                Send Diagnostic Ping (↵)
              </button>
            </div>
            <div className="p-3 bg-[#0C0B0A] rounded border border-bg-subtle text-[11px] space-y-1.5 overflow-x-auto text-ink-muted">
              {logs.map((log, idx) => (
                <div key={idx} className="font-mono whitespace-nowrap">
                  <span className="text-ink-faint select-none mr-2">&gt;</span>
                  <span className={log.includes('DEBUG') ? 'text-accent-copper' : 'text-ink-primary'}>
                    {log}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 bg-bg-elevated/20 border-t border-bg-subtle flex items-center justify-between text-[11px] text-ink-faint">
          <span>Toggle with ` (backtick) anytime</span>
          <span>Nagpur · Bangalore, India</span>
        </div>
      </div>
    </div>
  );
}
