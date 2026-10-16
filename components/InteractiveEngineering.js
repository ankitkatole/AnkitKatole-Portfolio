'use client';

import { useState } from 'react';
import { codeSnippets } from '../lib/data';

export default function InteractiveEngineering() {
  const [activeTab, setActiveTab] = useState('code'); // 'code' | 'flow' | 'api'
  const [activeSnippetKey, setActiveSnippetKey] = useState('java');
  const [copied, setCopied] = useState(false);

  // Architecture Flow state
  const [selectedNode, setSelectedNode] = useState('gateway');

  // API Playground state
  const [apiEndpoint, setApiEndpoint] = useState('/api/v1/orders/telecom-provision');
  const [apiMethod, setApiMethod] = useState('POST');
  const [orderType, setOrderType] = useState('FIBER_BROADBAND');
  const [simulatedResponse, setSimulatedResponse] = useState(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const snippet = codeSnippets[activeSnippetKey];

  const handleCopy = () => {
    if (!snippet) return;
    navigator.clipboard.writeText(snippet.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const runApiSimulation = () => {
    setIsSimulating(true);
    setSimulatedResponse(null);

    setTimeout(() => {
      const generatedOrderId = `ORD-2026-${Math.floor(100000 + Math.random() * 900000)}`;
      const res = {
        status: 201,
        statusText: "Created",
        headers: {
          "Content-Type": "application/json",
          "X-Trace-Id": `trace-id-${Math.random().toString(36).substring(2, 9)}`,
          "Location": `/api/v1/orders/${generatedOrderId}`
        },
        data: {
          orderId: generatedOrderId,
          serviceType: orderType,
          status: "PROVISIONING_DISPATCHED",
          workflowId: `WF-CAMUNDA-${Math.floor(1000 + Math.random() * 9000)}`,
          kafkaTopic: "telecom.order.events",
          assignedPartition: Math.floor(Math.random() * 8),
          slaDeadline: new Date(Date.now() + 4 * 3600 * 1000).toISOString(),
          audit: {
            actor: "CAPGEMINI_INTEGRATION_GW",
            timestamp: new Date().toISOString()
          }
        }
      };
      setSimulatedResponse(res);
      setIsSimulating(false);
    }, 600);
  };

  const architectureNodes = [
    {
      id: 'gateway',
      name: 'Spring Cloud Gateway',
      type: 'Edge Boundary',
      details: 'Evaluates incoming requests, authenticates stateless JWT bearer tokens, and routes traffic to downstream microservices with circuit-breaker fallbacks.'
    },
    {
      id: 'controller',
      name: 'OrderController (REST)',
      type: 'Web Layer',
      details: 'Exposes RFC-7807 compliant REST endpoints. Validates payload DTOs with javax/jakarta validation and delegates directly to transactional service layer.'
    },
    {
      id: 'service',
      name: 'OrderWorkflowService',
      type: 'Domain Core',
      details: 'Coordinates multi-step business logic, enforces idempotent state transitions, and invokes Camunda BPM user tasks and integration workers.'
    },
    {
      id: 'kafka',
      name: 'Apache Kafka Broker',
      type: 'Event Streaming',
      details: 'Publishes and consumes immutable order milestone events across partitioned topics (telecom.order.events) with dead-letter topic failover.'
    },
    {
      id: 'persistence',
      name: 'MySQL & Redis Cache',
      type: 'Persistence Layer',
      details: 'MySQL maintains ACID order records with optimistic locking. Redis caches active tenant configurations and frequent authorization claims.'
    }
  ];

  return (
    <section id="engineering" className="py-20 md:py-28 border-b border-bg-subtle">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-6 border-b border-bg-subtle">
          <div>
            <span className="mono-label">Technical Demonstration</span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-ink-primary mt-2">
              Engineering workbench
            </h2>
          </div>
          <p className="text-sm font-mono text-ink-muted max-w-md">
            Interactive code architecture, request pipelines, and verified design patterns.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            type="button"
            onClick={() => setActiveTab('code')}
            className={`px-4 py-2 text-xs font-mono rounded transition-colors ${
              activeTab === 'code'
                ? 'bg-ink-primary text-bg-primary font-medium'
                : 'bg-bg-surface text-ink-muted hover:text-ink-primary border border-bg-subtle'
            }`}
          >
            01. Code Architecture
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('flow')}
            className={`px-4 py-2 text-xs font-mono rounded transition-colors ${
              activeTab === 'flow'
                ? 'bg-ink-primary text-bg-primary font-medium'
                : 'bg-bg-surface text-ink-muted hover:text-ink-primary border border-bg-subtle'
            }`}
          >
            02. Request & Event Flow
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('api')}
            className={`px-4 py-2 text-xs font-mono rounded transition-colors ${
              activeTab === 'api'
                ? 'bg-ink-primary text-bg-primary font-medium'
                : 'bg-bg-surface text-ink-muted hover:text-ink-primary border border-bg-subtle'
            }`}
          >
            03. Local API Simulator
          </button>
        </div>

        {/* TAB 1: Code Architecture Explorer */}
        {activeTab === 'code' && (
          <div className="bg-bg-surface border border-bg-subtle rounded-lg overflow-hidden">
            {/* Snippet Selection Bar */}
            <div className="flex flex-wrap items-center justify-between border-b border-bg-subtle p-3 bg-bg-elevated/40 gap-3">
              <div className="flex flex-wrap gap-2">
                {Object.entries(codeSnippets).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveSnippetKey(key)}
                    className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                      activeSnippetKey === key
                        ? 'bg-bg-subtle text-accent-copper font-medium border border-accent-border'
                        : 'text-ink-muted hover:text-ink-primary'
                    }`}
                  >
                    {item.file}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={handleCopy}
                className="text-xs font-mono px-3 py-1 bg-bg-surface hover:bg-bg-subtle border border-bg-subtle text-ink-muted hover:text-ink-primary rounded transition-colors inline-flex items-center gap-1.5"
                aria-label="Copy code to clipboard"
              >
                <span>{copied ? '✓ Copied' : 'Copy Snippet'}</span>
              </button>
            </div>

            {/* Snippet Header */}
            <div className="px-6 py-4 border-b border-bg-subtle/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="text-sm font-semibold text-ink-primary">{snippet.title}</h4>
                <p className="text-xs text-ink-muted mt-0.5">{snippet.description}</p>
              </div>
              <span className="text-[11px] font-mono text-ink-faint uppercase">
                {snippet.language}
              </span>
            </div>

            {/* Code Body */}
            <div className="p-6 overflow-x-auto bg-[#100E0C]">
              <pre className="text-xs sm:text-sm font-mono text-ink-primary leading-relaxed">
                <code>{snippet.code}</code>
              </pre>
            </div>
          </div>
        )}

        {/* TAB 2: System Architecture Flow Explorer */}
        {activeTab === 'flow' && (
          <div className="bg-bg-surface border border-bg-subtle rounded-lg p-6 sm:p-8">
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-ink-primary">
                Capgemini Telecom Order Processing Architecture
              </h4>
              <p className="text-xs text-ink-muted font-mono mt-1">
                Click any pipeline stage below to inspect runtime responsibilities, interfaces, and SLAs.
              </p>
            </div>

            {/* Interactive Pipeline Step Nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-8">
              {architectureNodes.map((node, i) => {
                const isSelected = selectedNode === node.id;
                return (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => setSelectedNode(node.id)}
                    className={`text-left p-3.5 rounded border transition-all ${
                      isSelected
                        ? 'bg-bg-elevated border-accent-copper text-ink-primary'
                        : 'bg-bg-surface border-bg-subtle text-ink-muted hover:border-ink-faint'
                    }`}
                  >
                    <div className="text-[10px] font-mono text-accent-copper uppercase mb-1">
                      Step 0{i + 1}
                    </div>
                    <div className="text-xs font-semibold leading-tight mb-1 text-ink-primary">
                      {node.name}
                    </div>
                    <div className="text-[11px] text-ink-faint">{node.type}</div>
                  </button>
                );
              })}
            </div>

            {/* Selected Node Deep Dive */}
            {(() => {
              const current = architectureNodes.find((n) => n.id === selectedNode);
              return (
                <div className="p-5 bg-bg-elevated/60 border border-bg-subtle rounded-md">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-2 h-2 rounded-full bg-accent-copper inline-block" />
                    <span className="text-sm font-semibold text-ink-primary">
                      {current.name} — Technical Specification
                    </span>
                    <span className="text-xs font-mono text-ink-faint border border-bg-subtle px-2 py-0.5 rounded">
                      {current.type}
                    </span>
                  </div>
                  <p className="text-sm text-ink-muted leading-relaxed font-sans mt-2">
                    {current.details}
                  </p>
                </div>
              );
            })()}
          </div>
        )}

        {/* TAB 3: Local Simulated API Playground */}
        {activeTab === 'api' && (
          <div className="bg-bg-surface border border-bg-subtle rounded-lg p-6 sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-base font-semibold text-ink-primary">
                  Order Provisioning API Simulation
                </h4>
                <p className="text-xs text-ink-muted font-mono mt-0.5">
                  Safe client-side local simulator mimicking backend order creation and Kafka event dispatch.
                </p>
              </div>
              <span className="text-[11px] font-mono text-status-online bg-bg-elevated px-2 py-1 rounded border border-bg-subtle">
                ● Local Mock Engine Active
              </span>
            </div>

            {/* Endpoint Input Bar */}
            <div className="flex flex-col sm:flex-row gap-2 mb-6">
              <div className="sm:w-28 flex items-center justify-center bg-bg-elevated border border-bg-subtle rounded px-3 py-2 text-xs font-mono font-semibold text-accent-copper">
                {apiMethod}
              </div>
              <div className="flex-1 bg-bg-primary border border-bg-subtle rounded px-3 py-2 text-xs font-mono text-ink-primary flex items-center">
                {apiEndpoint}
              </div>
              <button
                type="button"
                onClick={runApiSimulation}
                disabled={isSimulating}
                className="px-5 py-2 text-xs font-mono uppercase tracking-wide bg-accent-copper hover:bg-accent-hover text-bg-primary font-semibold rounded transition-colors disabled:opacity-50"
              >
                {isSimulating ? 'Processing...' : 'Send Request'}
              </button>
            </div>

            {/* Parameter selection */}
            <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-mono">
              <span className="text-ink-faint">Select Service Payload:</span>
              {['FIBER_BROADBAND', 'MOBILE_5G_ENTERPRISE', 'CABLE_GATEWAY'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setOrderType(type)}
                  className={`px-2.5 py-1 rounded border transition-colors ${
                    orderType === type
                      ? 'bg-bg-elevated border-accent-copper text-ink-primary'
                      : 'border-bg-subtle text-ink-muted hover:text-ink-primary'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Output Panel */}
            <div className="bg-[#100E0C] border border-bg-subtle rounded p-4 font-mono text-xs">
              <div className="text-ink-faint text-[11px] border-b border-bg-subtle pb-2 mb-3 flex justify-between">
                <span>SIMULATED BACKEND RESPONSE</span>
                <span>
                  {simulatedResponse ? `HTTP ${simulatedResponse.status} ${simulatedResponse.statusText}` : 'IDLE — AWAITING REQUEST'}
                </span>
              </div>

              {simulatedResponse ? (
                <pre className="text-ink-primary overflow-x-auto leading-relaxed">
                  {JSON.stringify(simulatedResponse.data, null, 2)}
                </pre>
              ) : (
                <div className="py-6 text-center text-ink-faint">
                  Click &ldquo;Send Request&rdquo; to simulate a validated REST submission to the order workflow.
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
