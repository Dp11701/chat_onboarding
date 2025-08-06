"use client";

import React from "react";

interface DesktopLayoutProps {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}

export default function DesktopLayout({
  children,
  sidebar,
}: DesktopLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg border-r border-gray-200">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 sf-pro-bold">
            AI Chat
          </h1>
        </div>
        <nav className="mt-6">
          {sidebar || (
            <div className="px-4 space-y-2">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg sf-pro-medium transition-colors"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg sf-pro-medium transition-colors"
              >
                Chats
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg sf-pro-medium transition-colors"
              >
                Settings
              </a>
            </div>
          )}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-900 sf-pro-semibold">
              Welcome back!
            </h2>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
