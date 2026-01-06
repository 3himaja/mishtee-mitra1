"use client";

import React, { useState, useEffect } from 'react';

/**

mishTee Delivery Mitra - Mobile Dashboard

Built with Next.js App Router, Inline Styles, and Mobile-First constraints. */ export default function DeliveryDashboard() { const [isPulsing, setIsPulsing] = useState(true);

// Simple effect to simulate the pulsing dot animation via opacity toggle useEffect(() => { const interval = setInterval(() => { setIsPulsing((prev) => !prev); }, 800); return () => clearInterval(interval); }, []);

// Design Tokens const colors = { primary: '#FF6B00', // mishTee Orange success: '#28a745', background: '#F7F9FC', white: '#FFFFFF', textDark: '#333333', textLight: '#777777', shadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', };

// Styles const containerStyle = { maxWidth: '500px', margin: '0 auto', backgroundColor: colors.background, minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', padding: '20px', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', };

const headerStyle = { display: 'flex', flexDirection: 'column' as const, alignItems: 'center', marginBottom: '30px', };

const logoStyle = { width: '80px', marginBottom: '10px', };

const titleStyle = { color: colors.primary, fontSize: '24px', fontWeight: '800', margin: '0', };

const statusContainerStyle = { display: 'flex', alignItems: 'center', marginTop: '8px', backgroundColor: '#E8F5E9', padding: '4px 12px', borderRadius: '20px', };

const dotStyle = { height: '100%', width: '10px', height: '10px', backgroundColor: colors.success, borderRadius: '50%', display: 'inline-block', marginRight: '8px', opacity: isPulsing ? 1 : 0.4, transition: 'opacity 0.4s ease-in-out', };

const taskCardStyle = { backgroundColor: colors.white, width: '100%', borderRadius: '16px', padding: '20px', boxShadow: colors.shadow, marginBottom: '20px', borderLeft: 6px solid ${colors.primary}, };

const buttonStyle = { width: '100%', backgroundColor: colors.primary, color: colors.white, border: 'none', padding: '16px', borderRadius: '12px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0px 4px 10px rgba(255, 107, 0, 0.3)', marginTop: 'auto', };

return ( <div style={containerStyle}> {/* Header Section */} <header style={headerStyle}> <img src="https://raw.githubusercontent.com/sudhir-voleti/mishtee-magic/main/mishTee_logo.png" alt="mishTee Logo" style={logoStyle} /> <h1 style={titleStyle}>mishTee Delivery Mitra</h1> <div style={statusContainerStyle}> <span style={dotStyle}></span> <span style={{ color: colors.success, fontSize: '14px', fontWeight: '600' }}> Agent Online </span> </div> </header>

  {/* Main Content / Task Section */}
  <main style={{ width: '100%' }}>
    <p style={{ color: colors.textLight, fontSize: '14px', marginBottom: '10px', fontWeight: '500' }}>
      ACTIVE TASK
    </p>
    
    <div style={taskCardStyle}>
      <div style={{ fontSize: '14px', color: colors.textLight, marginBottom: '4px' }}>
        Delivery Destination
      </div>
      <div style={{ fontSize: '20px', fontWeight: '700', color: colors.textDark }}>
        Deliver to: Arjun Mehta
      </div>
      <div style={{ fontSize: '14px', color: colors.textLight, marginTop: '8px' }}>
        📍 4th Floor, Skyline Apartments, Sector 5
      </div>
    </div>

    <button 
      style={buttonStyle}
      onClick={() => alert('Starting Navigation...')}
      onMouseOver={(e) => (e.currentTarget.style.filter = 'brightness(1.1)')}
      onMouseOut={(e) => (e.currentTarget.style.filter = 'brightness(1.0)')}
    >
      Start Navigation
    </button>
  </main>

  {/* Footer Info */}
  <footer style={{ marginTop: '20px', color: '#BDC3C7', fontSize: '12px' }}>
    v1.0.4 - Secure Connection Active
  </footer>
</div>
); }

/**
