import { useState, useEffect } from 'react'

export function CommandVehicles() {
  // This ensures the component mounts properly in the body
  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof document !== 'undefined') {
      document.body.classList.add('command-vehicle-page');
    }
    
    return () => {
      // Cleanup when component unmounts
      if (typeof document !== 'undefined') {
        document.body.classList.remove('command-vehicle-page');
      }
    };
  }, []);
  const [activeTab, setActiveTab] = useState('lighting');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // CSS styles adapted from the provided CSS
  const styles = {
    container: {
      backgroundColor: 'black',
      color: 'whitesmoke',
      textAlign: 'center',
      maxWidth: '100%',
      padding: '2rem',
      border: '2px solid whitesmoke',
      borderRadius: '2px'
    },
    header: {
      fontFamily: 'stencil, Arial, sans-serif',
      color: '#000',
      fontSize: '36px',
      textAlign: 'center',
      textShadow: `
        0px -2px 0 goldenrod,
        2px -2px 0 goldenrod,
        2px 0px 0 goldenrod,
        2px 2px 0 goldenrod,
        0px 2px 0 goldenrod,
        -2px 2px 0 goldenrod,
        -2px 0px 0 goldenrod,
        -2px -2px 0 goldenrod
      `
    },
    subheader: {
      fontFamily: 'stencil, Arial, sans-serif',
      color: '#000',
      fontSize: '24px',
      textAlign: 'center',
      textShadow: `
        0px -1px 0 goldenrod,
        1px -1px 0 goldenrod,
        1px 0px 0 goldenrod,
        1px 1px 0 goldenrod,
        0px 1px 0 goldenrod,
        -1px 1px 0 goldenrod,
        -1px 0px 0 goldenrod,
        -1px -1px 0 goldenrod
      `
    },
    tabContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      margin: '20px 0'
    },
    tab: {
      backgroundColor: 'rgb(206, 32, 41)',
      color: 'white',
      padding: '10px 20px',
      margin: '0 5px 10px 5px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s'
    },
    activeTab: {
      backgroundColor: '#9e1c23',
      fontWeight: 'bold'
    },
    contentContainer: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      padding: '20px',
      borderRadius: '5px',
      marginTop: '20px',
      textAlign: 'left'
    },
    imageGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
      marginTop: '20px'
    },
    imageContainer: {
      width: '300px',
      margin: '10px',
      textAlign: 'center'
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
      border: '2px solid whitesmoke',
      borderRadius: '5px'
    },
    caption: {
      marginTop: '8px',
      fontSize: '14px'
    },
    brandList: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
      margin: '20px 0'
    },
    brandItem: {
      backgroundColor: 'rgb(206, 32, 41)',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      fontSize: '16px'
    },
    featureList: {
      listStyleType: 'none',
      padding: '0',
      margin: '20px 0'
    },
    featureItem: {
      padding: '8px 0',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    },
    note: {
      backgroundColor: 'rgba(255, 215, 0, 0.2)',
      padding: '15px',
      borderLeft: '4px solid goldenrod',
      marginTop: '20px',
      borderRadius: '0 5px 5px 0'
    }
  };

  // Category data
  const categoryData = {
    lighting: {
      title: "Lighting / Audible Warning Systems",
      description: "Complete emergency lighting and audio solutions for command vehicles",
      content: [
        "Interior and exterior audio and visual emergency systems including roof mounted lightbars, visor light bars, grille, surface mounted lights.",
        "Sirens in front bumper area and on push bars.",
        "Interior siren control boxes mounted in center consoles.",
        "Install white/red interior map lights."
      ],
      brands: ["Whelen", "Federal Signal", "Code 3", "Techniq"],
      note: "We can strip an existing emergency vehicle of all lights and sirens and transfer them into a new unit if model and year are comparable.",
      images: [
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Audio+and+Visual/Code+3+Siren+Box.jpg", alt: "Code 3 siren control module with handheld microphone", caption: "Interior Siren Control Unit" },
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Audio+and+Visual/Federal+Signal+Lightbar.webp", alt: "Custom lightbar with red and blue LED lighting", caption: "Custom LED Light Bar" },
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Audio+and+Visual/Whelen+Roof+Lightbar.jpg", alt: "Roof-mounted LED lightbar", caption: "Roof-Mounted LED Lightbar" },
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Audio+and+Visual/Whelen+Inner+Edge.jpg", alt: "Interior LED lighting system", caption: "Interior Vehicle Lighting" },
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Audio+and+Visual/Whelen+Outer+Edge.jpg", alt: "Vehicle perimeter LED lighting", caption: "Perimeter Emergency Lighting" },
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Audio+and+Visual/Whelen+Siren+Speaker.jpg", alt: "Whelen siren speaker", caption: "Whelen Siren Speaker" },
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Audio+and+Visual/Federal+Signal+Siren+Box.jpg", alt: "Federal Signal siren control box", caption: "Federal Signal Siren System" }
      ]
    },
    consoles: {
      title: "Center Consoles / Interior Equipment",
      description: "Vehicle-specific console solutions for command and control",
      content: [
        "Adding push bars or PIT bars to the front bumper of a unit. Push bars can be with or without lighting integrated or brackets for siren speakers.",
        "Interior door paneling can be added to the rear doors to eliminate door handle, window controls, and locks",
        "Adding a variety of window guards.",
        "Multiple variety of rear seat partitions including lexan or wire mesh front and rear partition, K9 cages, single seat partitions, and also rear seat replacement from cloth seat to plastic seat.",
        "Add center consoles and completely outfit them with siren control boxes, lighting controls, laptop mounts, and customer supplied radios, Boxes come prefabricated."
      ],
      brands: ["Havis Shield", "Troy", "Setina", "Westin"],
      images: [
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Center+Consoles/Troy+Laptop+Mount.jpg", alt: "Vehicle console with laptop mount", caption: "Laptop Mount Integration" },
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Center+Consoles/Havis+Center+Console.png", alt: "Havis center console solution", caption: "Havis Center Console" },
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Center+Consoles/Troy+Center+Console.jpg", alt: "Troy center console installation", caption: "Troy Center Console" },
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Center+Consoles/Troy+Center+Colsole+2.jpg", alt: "Additional Troy center console view", caption: "Troy Console Configuration" },
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Center+Consoles/Troy+Center+Console+3.png", alt: "Troy center console model", caption: "Troy Console Model" },
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Center+Consoles/Troy+Overhead+Console.jpg", alt: "Overhead console installation", caption: "Overhead Console" },
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Center+Consoles/Troy+Window+Guards.jpg", alt: "Window guards and protection", caption: "Window Protection System" }
      ]
    },
    power: {
      title: "Power Management",
      description: "Advanced power systems to keep your equipment running",
      content: [
        "Add a Kussmaul battery conditioner to allow for vehicle to be plugged in and allow all radios, flashlights, and electronic devices to stay charged.",
        "Keep vehicle batteries charged",
        "Electric auto eject will pop electrical plug out of vehicle so driver does not have to worry about unplugging vehicle after starting",
        "Add inverters or converters for 12v or 24v systems to power a variety of equipment"
      ],
      brands: ["Kussmaul Battery Conditioners", "Converters / Inverters", "Auto Ejects"],
      images: [
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Power+Managment/Kussmaul+Auto+Eject.jpg", alt: "Kussmaul auto eject system", caption: "Kussmaul Auto-Eject System" },
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Power+Managment/Kussmaul+Battery+Indicators.jpg", alt: "Battery status indicators", caption: "Battery Status Monitoring" },
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Power+Managment/Kussmaul+Super+Auto+Eject.jpg", alt: "Kussmaul super auto eject", caption: "Super Auto-Eject System" },
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Power+Managment/Kussmaul.jpg", alt: "Kussmaul power management unit", caption: "Kussmaul Power Management Unit" }
      ]
    },
    command: {
      title: "Rear Command Box",
      description: "Organized storage and equipment mounting solutions",
      content: [
        "Command Cabinets (Nothing Custom Fabricated)",
        "Add SCBA mounts, flashlights, KNOX boxes, fire extinguishers, water cans, tool mounting, or customer supplied radios to a pre-fabricated, vehicle specific rear command box.",
        "Can be outfitted with a variety of equipment holders or locking compartments for locking sensitive equipment or information.",
        "We do not custom fabricate rear command boxes. All boxes will be ordered for a vehicle specific layout due to sizing and turn around time."
      ],
      images: [
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Command+Boxes/Rear+Command+Box.webp", alt: "Vehicle command box storage system", caption: "Rear Command Storage System" },
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Command+Boxes/Rear+Command+Box+2.png", alt: "Command box with storage drawers", caption: "Command Box Configuration" },
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Command+Boxes/Rear+Command+Box+3.png", alt: "Alternative command box layout", caption: "Alternative Command Box Design" },
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Command+Boxes/Rear+Command+Box+4.png", alt: "Specialized command box storage", caption: "Specialized Command Box Storage" }
      ]
    },
    partitions: {
      title: "Partitions & Safety Barriers",
      description: "Vehicle compartment separation and security solutions",
      content: [
        "Interior door paneling can be added to the rear doors to eliminate door handle, window controls, and locks",
        "Adding a variety of window guards.",
        "Multiple variety of rear seat partitions including lexan or wire mesh front and rear partition, K9 cages, single seat partitions, and also rear seat replacement from cloth seat to plastic seat."
      ],
      brands: ["Setina", "Troy", "Havis"],
      images: [
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Partitions/Chevy+Tahoe+Door+Panel.png", alt: "Chevy Tahoe door panel", caption: "Chevy Tahoe Door Panel" },
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Partitions/Dodge+Charger+Door+Panel.webp", alt: "Dodge Charger door panel", caption: "Dodge Charger Door Panel" },
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Partitions/Sentina+Wire+Partition.png", alt: "Wire mesh partition", caption: "Setina Wire Partition" },
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Partitions/Sentina+Lexan+Partition.png", alt: "Lexan transparent partition", caption: "Setina Lexan Partition" },
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Partitions/Ford+Expedition+Full+Partition.png", alt: "Ford Expedition full partition", caption: "Ford Expedition Full Partition" },
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Partitions/Ford+Explorer+Full+Partition.webp", alt: "Ford Explorer full partition", caption: "Ford Explorer Full Partition" },
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Partitions/Dodge+Durango+Full+Paartition.webp", alt: "Dodge Durango full partition", caption: "Dodge Durango Full Partition" },
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Partitions/Kussmaul+Converter.jpg", alt: "Kussmaul power converter", caption: "Kussmaul Power Converter for Systems" }
      ]
    },
    pushbars: {
      title: "Push Bars & Front Protection",
      description: "Heavy-duty front-end protection with optional lighting integration",
      content: [
        "Adding push bars or PIT bars to the front bumper of a unit.",
        "Push bars can be with or without lighting integrated or brackets for siren speakers.",
        "Vehicle-specific designs for proper fit and function.",
        "Available from trusted brands including Westin and Setina."
      ],
      brands: ["Westin", "Setina"],
      images: [
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Push+Bars/Sentina+Push+Bumper.png", alt: "Setina push bumper", caption: "Setina Push Bumper" },
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Push+Bars/Setina+Bar+with+Lights+and+Fender+Guards.jpg", alt: "Setina bar with integrated lights", caption: "Setina Bar with Integrated Lights" },
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Push+Bars/Setina+Bar+with+Lights.jpeg", alt: "Setina bar with emergency lights", caption: "Setina Bar with Emergency Lights" },
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Push+Bars/Westin+Push+Bumper+Ford.jpg", alt: "Westin push bumper for Ford vehicle", caption: "Westin Push Bumper for Ford" },
        { src: "https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/photos/Push+Bars/Westin+Push+Pumper.jpg", alt: "Westin push bumper", caption: "Westin Push Bumper" }
      ]
    }
  };

  // Render currently active category content
  const renderCategoryContent = () => {
    const category = categoryData[activeTab];
    
    return (
      <div style={styles.contentContainer}>
        <h2 style={styles.subheader}>{category.title}</h2>
        <p>{category.description}</p>
        
        <ul style={styles.featureList}>
          {category.content.map((item, index) => (
            <li key={index} style={styles.featureItem}>{item}</li>
          ))}
        </ul>
        
        {category.brands && (
          <>
            <h3 style={{...styles.subheader, fontSize: '20px'}}>Available Brands:</h3>
            <div style={styles.brandList}>
              {category.brands.map((brand, index) => (
                <div key={index} style={styles.brandItem}>{brand}</div>
              ))}
            </div>
          </>
        )}
        
        {category.note && (
          <div style={styles.note}>
            <strong>Note:</strong> {category.note}
          </div>
        )}
        
        <div style={styles.imageGrid}>
          {category.images.map((image, index) => (
            <div key={index} style={styles.imageContainer}>
              <img 
                src={image.src} 
                alt={image.alt} 
                style={styles.image}
              />
              <p style={styles.caption}>{image.caption}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  console.log("CommandVehicles component is rendering");
  
  return (
    <div style={styles.container} className="command-vehicles-container">
      <h1 style={styles.header}>Fire Apparatus Repair</h1>
      <h2 style={styles.subheader}>Custom Command Vehicle Solutions</h2>
      
      <div style={styles.tabContainer}>
        <button 
          style={{...styles.tab, ...(activeTab === 'lighting' ? styles.activeTab : {})}} 
          onClick={() => handleTabClick('lighting')}
        >
          Lights & Siren
        </button>
        <button 
          style={{...styles.tab, ...(activeTab === 'consoles' ? styles.activeTab : {})}} 
          onClick={() => handleTabClick('consoles')}
        >
          Center Consoles
        </button>
        <button 
          style={{...styles.tab, ...(activeTab === 'power' ? styles.activeTab : {})}} 
          onClick={() => handleTabClick('power')}
        >
          Power Management
        </button>
        <button 
          style={{...styles.tab, ...(activeTab === 'command' ? styles.activeTab : {})}} 
          onClick={() => handleTabClick('command')}
        >
          Command Boxes
        </button>
        <button 
          style={{...styles.tab, ...(activeTab === 'partitions' ? styles.activeTab : {})}} 
          onClick={() => handleTabClick('partitions')}
        >
          Partitions
        </button>
        <button 
          style={{...styles.tab, ...(activeTab === 'pushbars' ? styles.activeTab : {})}} 
          onClick={() => handleTabClick('pushbars')}
        >
          Push Bars
        </button>
      </div>
      
      {renderCategoryContent()}
      
      <div style={{marginTop: '30px', padding: '20px', backgroundColor: 'rgba(206, 32, 41, 0.1)', borderRadius: '5px'}}>
        <h3 style={{...styles.subheader, fontSize: '20px'}}>Upfitting Options</h3>
        <ul style={styles.featureList}>
          <li style={styles.featureItem}>Taking a NEW off the line car, whether it be outfitted with the "Emergency Package" or not and outfit it with whatever the customer wants.</li>
          <li style={styles.featureItem}>Taking existing emergency vehicle and striping it of all emergency lighting and equipment and installing it into a new vehicle. The vehicle must match year model (body style or model cannot change)</li>
        </ul>
        
        <div style={styles.note}>
          <strong>Important:</strong> Transfer of equipment from one vehicle to another is solely up to the vehicle manufacturer recommendations
        </div>
      </div>
    </div>
  );
}