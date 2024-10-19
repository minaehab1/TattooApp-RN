import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface BottomNavbarProps {
  activePage: string;
}

const BottomNavbar: React.FC<BottomNavbarProps> = ({ activePage }) => {
  return (
    <View style={styles.container}>
      <NavItem label="Home" isActive={activePage === '/'} />
      <NavItem label="Search" isActive={activePage === '/search'} />
      <NavItem label="Profile" isActive={activePage === '/profile'} />
    </View>
  );
};

interface NavItemProps {
  label: string;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, isActive }) => {
  return (
    <TouchableOpacity style={[styles.navItem, isActive && styles.activeNavItem]}>
      <Text style={[styles.navItemText, isActive && styles.activeNavItemText]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingVertical: 8,
  },
  navItem: {
    padding: 8,
  },
  activeNavItem: {
    backgroundColor: '#e6effd',
    borderRadius: 4,
  },
  navItemText: {
    fontSize: 14,
    color: '#666',
  },
  activeNavItemText: {
    color: '#3b82f6',
  },
});

export default BottomNavbar;
