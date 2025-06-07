import { Box, Button } from '@mui/material';
import React, { useState } from 'react';

interface NavbarProps {
  onTabChange: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onTabChange }) => {
  const tabs = ["Total Payable", "Bill History", "Bill Methods"];
  const [selectedTab, setSelectedTab] = useState<string>("Total Payable");

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
    onTabChange(tab);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        padding: 0,
        width: "100%",
        height: "auto",
        marginBottom: 4,
      }}
    >
      {tabs.map((tab) => (
        <Button
          key={tab}
          onClick={() => handleTabClick(tab)}
          sx={{
            backgroundColor: selectedTab === tab ? "#1565c0" : "transparent",
            border: selectedTab === tab ? "none" : "1px solid #1565c0",
            borderRadius: "8px",
            color: selectedTab === tab ? "#FFFFFF" : "#1565c0",
            fontWeight: 600,
            fontFamily: "Poppins, sans-serif",
            padding: "8px 16px",
            textTransform: "none",
            fontSize: "14px",
            "&:hover": { 
              backgroundColor: selectedTab === tab ? "#1565c0" : "rgba(21, 101, 192, 0.1)"
            },
          }}
        >
          {tab}
        </Button>
      ))}
    </Box>
  );
};

export default Navbar;