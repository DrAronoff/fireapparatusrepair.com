import React from 'react';

// Method 1: Using the Scale Transform technique (React-friendly)
export const StencilTextScale = ({ children, fontSize = '15pt' }) => {
  return (
    <div
      style={{
        display: 'inline-block',
        position: 'relative',
        fontFamily: 'stencil, Arial, sans-serif',
        color: '#000',
        fontSize: fontSize,
        textAlign: 'center'
      }}
    >
      <span
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          color: 'goldenrod',
          zIndex: -1,
          transform: 'scale(1.03, 1.03)',
          transformOrigin: 'center center',
          width: '100%',
          height: '100%'
        }}
      >
        {children}
      </span>
      {children}
    </div>
  );
};

// Method 2: Double element method (React-friendly)
export const StencilTextDouble = ({ children, fontSize = '15pt' }) => {
  return (
    <div
      style={{
        position: 'relative',
        textAlign: 'center',
        display: 'inline-block',
        width: '100%'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          fontFamily: 'stencil, Arial, sans-serif',
          color: 'transparent',
          WebkitTextStroke: '4px goldenrod',
          textStroke: '4px goldenrod',
          fontSize: fontSize,
          zIndex: 1
        }}
      >
        {children}
      </div>
      <div
        style={{
          position: 'relative',
          fontFamily: 'stencil, Arial, sans-serif',
          color: '#000',
          fontSize: fontSize,
          zIndex: 2
        }}
      >
        {children}
      </div>
    </div>
  );
};

// Method 3: SVG Filter method (React-friendly)
export const StencilTextSvg = ({ children, fontSize = '15pt' }) => {
  // Generate a unique ID for the filter to avoid conflicts
  const filterId = React.useMemo(() => `outline-filter-${Math.random().toString(36).substring(2, 9)}`, []);
  
  return (
    <>
      {/* SVG filter definition inside the component to ensure it exists when needed */}
      <svg 
        width="0" 
        height="0" 
        style={{
          position: 'absolute',
          visibility: 'hidden'
        }}
      >
        <defs>
          <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
            <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thicken" />
            <feFlood floodColor="goldenrod" result="outlineColor" />
            <feComposite in="outlineColor" in2="thicken" operator="in" result="outline" />
            <feComposite in="SourceGraphic" in2="outline" operator="over" />
          </filter>
        </defs>
      </svg>
      
      {/* The styled text */}
      <div
        style={{
          fontFamily: 'stencil, Arial, sans-serif',
          color: '#000',
          fontSize: fontSize,
          textAlign: 'center',
          filter: `url(#${filterId})`,
          display: 'inline-block' // Helps with proper rendering
        }}
      >
        {children}
      </div>
    </>
  );
};

// Method 4: Many fine-grained text-shadows (CSS only, React-friendly)
export const StencilTextShadows = ({ children, fontSize = '15pt' }) => {
  return (
    <div
      style={{
        fontFamily: 'stencil, Arial, sans-serif',
        color: '#000',
        fontSize: fontSize,
        textAlign: 'center',
        textShadow: `
          /* Core directions */
          -1px -1px 0 goldenrod,
          0px -1px 0 goldenrod,
          1px -1px 0 goldenrod,
          -1px 0px 0 goldenrod,
          1px 0px 0 goldenrod,
          -1px 1px 0 goldenrod,
          0px 1px 0 goldenrod,
          1px 1px 0 goldenrod,
          /* Additional shadows to fill corners */
          -0.5px -1px 0 goldenrod,
          0.5px -1px 0 goldenrod,
          -1px -0.5px 0 goldenrod,
          1px -0.5px 0 goldenrod,
          -1px 0.5px 0 goldenrod,
          1px 0.5px 0 goldenrod,
          -0.5px 1px 0 goldenrod,
          0.5px 1px 0 goldenrod,
          /* More granular shadows for smoother appearance */
          -0.75px -0.75px 0 goldenrod,
          0.75px -0.75px 0 goldenrod,
          0.75px 0.75px 0 goldenrod,
          -0.75px 0.75px 0 goldenrod
        `
      }}
    >
      {children}
    </div>
  );
};