import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: { height: 70, borderTopLeftRadius: 30, borderTopRightRadius: 30 }
      }}>
      <Tabs.Screen
        name="(top tabs)"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'folder' : 'folder-open-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="reels"
        options={{

          title: 'Reels',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'videocam' : 'videocam-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="createReel"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon style={{
              backgroundColor: "red", color: "white",
              padding: 5, borderRadius: 7, paddingHorizontal: 12, elevation: 10
            }} name={focused ? 'add-sharp' : 'add-outline'}
              color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="videoDownloader"
        options={{
          title: 'Video Downloader',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'cloud-download-sharp' :
              'cloud-download-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="streams"
        options={{
          title: 'streams',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person-sharp' : 'person-outline'} color={color} />
          ),
        }}
      />

    </Tabs>
  );
}
