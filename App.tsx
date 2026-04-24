import { LinearGradient } from 'expo-linear-gradient';
import * as Location from 'expo-location';
import { DataSnapshot, get, onValue, ref, set } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from './AppStyles';
import { db } from './firebaseConfig';

const { width, height } = Dimensions.get('window');

export default function App() {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  }>({
    latitude: 21.0285,
    longitude: 105.8542,
  });
  const [loading, setLoading] = useState(false);

  // Ghi vị trí lên Realtime Database
  // const writeLocation = (lat: number, lng: number) => {
  //   console.log('Writing location to Firebase:', { lat, lng });
  //   set(ref(db, 'gps_data'), {
  //     latitude: lat,
  //     longitude: lng,
  //     timestamp: new Date().toISOString()  // Thêm timestamp để dễ theo dõi
  //   }).then(() => {
  //     console.log('Location successfully written to Firebase');
  //   }).catch((error) => {
  //     console.error('Error writing location to Firebase:', error);
  //   });
  // };

  // Lấy vị trí hiện tại và ghi lên Realtime Database
  // const getCurrentLocation = async () => {
  //   setLoading(true);
  //   try {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       console.log('Permission to access location was denied');
  //       setLoading(false);
  //       return;
  //     }
  //     console.log('Getting current location...');
  //     const loc = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
  //     console.log('Current location received:', loc.coords);
  //     writeLocation(loc.coords.latitude, loc.coords.longitude);
  //     setLocation({
  //       latitude: loc.coords.latitude,
  //       longitude: loc.coords.longitude,
  //     });
  //   } catch (error) {
  //     console.error('Error getting location:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // Lắng nghe vị trí realtime từ Realtime Database
  useEffect(() => {
    const locationRef = ref(db, 'gps_data');
    const unsubscribe = onValue(locationRef, (snapshot: DataSnapshot) => {
      const data = snapshot.val();
      if (data && data.latitude != null && data.longitude != null) {
        setLocation({
          latitude: Number(data.latitude),
          longitude: Number(data.longitude),
        });
      }
    });
    return () => unsubscribe();
  }, []);

  // Lấy lại vị trí từ Firebase và set vào state
  const fetchLocationFromFirebase = async () => {
    setLoading(true);
    try {
      const locationRef = ref(db, 'gps_data');
      const snapshot = await get(locationRef);
      const data = snapshot.val();
      if (data && data.latitude != null && data.longitude != null) {
        setLocation({
          latitude: Number(data.latitude),
          longitude: Number(data.longitude),
        });
      }
    } catch (error) {
      console.error('Error fetching location from Firebase:', error);
    } finally {
      setLoading(false);
    }
  };

  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${location.longitude-0.01}%2C${location.latitude-0.01}%2C${location.longitude+0.01}%2C${location.latitude+0.01}&layer=mapnik&marker=${location.latitude}%2C${location.longitude}`;

  return (
    <LinearGradient colors={['#eaf6fb', '#b3e0f7', '#eaf6fb']} style={styles.gradient}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>🐶🐱 Vị trí hiện tại</Text>
        <Text style={styles.infoText}>Vĩ độ: <Text style={styles.bold}>{location?.latitude?.toFixed(6) || 'N/A'}</Text></Text>
        <Text style={styles.infoText}>Kinh độ: <Text style={styles.bold}>{location?.longitude?.toFixed(6) || 'N/A'}</Text></Text>
        <TouchableOpacity style={styles.resetBtn} onPress={fetchLocationFromFirebase} disabled={loading}>
          <Text style={styles.resetBtnText}>{loading ? 'Đang lấy vị trí...' : '🔄 Reset vị trí'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mapWrapper}>
        <WebView
          source={{ uri: mapUrl }}
          style={styles.map}
          javaScriptEnabled
          domStorageEnabled
        />
      </View>
    </LinearGradient>
  );
} 