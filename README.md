# Pet Tracker (Expo + Firebase Realtime Database)

Ứng dụng **Pet Tracker** giúp theo dõi **vị trí hiện tại** (GPS) của thú cưng (hoặc thiết bị gắn tracker) theo thời gian thực bằng **Firebase Realtime Database** và hiển thị trực quan trên bản đồ (OpenStreetMap) trong app **Expo React Native**.


---

## Tính năng

- Hiển thị **vĩ độ / kinh độ** mới nhất từ Firebase Realtime Database
- **Realtime update**: tự động cập nhật khi `gps_data` thay đổi
- Xem bản đồ (OpenStreetMap) bằng `WebView`
- Nút **Reset vị trí**: fetch lại dữ liệu mới nhất từ Firebase

---

## Tech Stack

- **Expo** / React Native
- **TypeScript** (`App.tsx`, `AppStyles.ts`)
- **Firebase Realtime Database**
- **OpenStreetMap embed** qua `react-native-webview`

Thư viện chính :

- `expo-location`
- `firebase`
- `react-native-webview`
- `expo-linear-gradient`

---

## Cấu trúc thư mục

- `App.tsx` — Màn hình chính: lắng nghe `gps_data` realtime + hiển thị bản đồ
- `AppStyles.ts` — StyleSheet
- `firebaseConfig.js` — Khởi tạo Firebase app + export `db`
- `assets/` — icon/splash…

---

## Yêu cầu

- Node.js (khuyến nghị bản LTS)
- Expo CLI (dùng qua `npx`)

---

## Cài đặt

```bash
npm install
```

---

## Chạy ứng dụng

```bash
npx expo start
```

Sau đó bạn có thể mở bằng:

- **Expo Go** trên điện thoại
- Android Emulator / iOS Simulator

---

## Cấu hình Firebase 
File: `firebaseConfig.js`
1. Tạo project trên Firebase Console
2. Tạo **Realtime Database**
3. Lấy cấu hình Firebase Web App 


##  Bật tính năng ghi GPS của điện thoại lên Firebase

Trong `App.tsx` có sẵn code:

- `writeLocation(lat, lng)`
- `getCurrentLocation()` (xin quyền + lấy GPS)

Nếu bạn muốn app đóng vai trò "thiết bị tracker", bạn có thể:

1. Bỏ comment 2 hàm trên
2. Gọi `getCurrentLocation()` theo nút bấm hoặc theo timer (ví dụ mỗi 5–10 giây)

> Lưu ý: Khi bật GPS, bạn cần cấu hình permission đúng cho Expo/Android/iOS theo hướng dẫn `expo-location`.

---

