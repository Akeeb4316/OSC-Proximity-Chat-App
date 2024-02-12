import React from 'react';
import { View, Text, Switch, Button, StyleSheet } from 'react-native';
import { useSettings } from './SettingsContext'; // Adjust the import path as necessary

const SettingsScreen: React.FC = () => {
  const { theme, toggleTheme } = useSettings();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch
          onValueChange={toggleTheme}
          value={theme === 'dark'}
        />
      </View>

      {/* Dummy button for illustration */}
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Reroll Profile (Dummy)</Text>
        <Button
          onPress={() => console.log('Reroll Profile clicked')}
          title="Reroll"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  settingText: {
    fontSize: 18,
  }
});

export default SettingsScreen;
