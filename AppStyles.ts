import { Dimensions, Platform, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  mapWrapper: {
    width: width - 32,
    height: height * 0.55,
    borderRadius: 24,
    overflow: 'hidden',
    marginTop: 16,
    backgroundColor: '#fff',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    borderWidth: 2,
    borderColor: '#b3e0f7',
  },
  map: {
    flex: 1,
    borderRadius: 24,
  },
  infoContainer: {
    marginTop: Platform.OS === 'ios' ? 60 : 30,
    marginBottom: 8,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255,255,255,0.97)',
    padding: 20,
    borderRadius: 18,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    width: width - 32,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a6fa3',
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  infoText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 4,
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
    color: '#1a6fa3',
  },
  resetBtn: {
    marginTop: 14,
    backgroundColor: '#1a6fa3',
    paddingHorizontal: 22,
    paddingVertical: 8,
    borderRadius: 16,
    elevation: 2,
  },
  resetBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 0.5,
  },
});

export default styles; 