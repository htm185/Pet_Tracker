# Pet Tracker (Expo + Firebase Realtime Database)

Ứng dụng **Pet Tracker** giúp theo dõi **vị trí hiện tại** (GPS) của thú cưng (hoặc thiết bị gắn tracker) theo thời gian thực bằng **Firebase Realtime Database** và hiển thị trực quan trên bản đồ (OpenStreetMap) trong app **Expo React Native**.

> Repo này hiện đọc dữ liệu từ node `gps_data` trong Firebase Realtime Database. Phần “ghi GPS lên Firebase” đã được chuẩn bị trong `App.tsx` nhưng đang comment (bạn có thể bật lại nếu muốn app tự lấy GPS của điện thoại và đẩy lên Firebase).

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

Thư viện chính (trích từ `package.json`):

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

## Cấu hình Firebase (Quan trọng)

File: `firebaseConfig.js`

Hiện tại `firebaseConfig` đang để trống một số trường (`apiKey`, `messagingSenderId`, `appId`). Bạn cần:

1. Tạo project trên Firebase Console
2. Tạo **Realtime Database**
3. Lấy cấu hình Firebase Web App và điền vào:

```js
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "...",
};
```

### Dữ liệu Realtime Database

App đang đọc tại path:

- `gps_data`

Dạng dữ liệu gợi ý:

```json
{
  "gps_data": {
    "latitude": 21.0285,
    "longitude": 105.8542,
    "timestamp": "2026-04-24T00:00:00.000Z"
  }
}
```

---

## (Tuỳ chọn) Bật tính năng ghi GPS của điện thoại lên Firebase

Trong `App.tsx` có sẵn code:

- `writeLocation(lat, lng)`
- `getCurrentLocation()` (xin quyền + lấy GPS)

Hiện đang comment. Nếu bạn muốn app đóng vai trò "thiết bị tracker", bạn có thể:

1. Bỏ comment 2 hàm trên
2. Gọi `getCurrentLocation()` theo nút bấm hoặc theo timer (ví dụ mỗi 5–10 giây)

> Lưu ý: Khi bật GPS, bạn cần cấu hình permission đúng cho Expo/Android/iOS theo hướng dẫn `expo-location`.

---

## Troubleshooting

- **Không thấy bản đồ / màn hình trắng**: kiểm tra kết nối mạng và `react-native-webview` đã cài đúng.
- **Không cập nhật realtime**: kiểm tra rules + path `gps_data` trong Firebase Realtime Database.
- **Lỗi Firebase config**: đảm bảo điền đủ `apiKey`, `appId`, `messagingSenderId`.

---

## Roadmap gợi ý

- Tách cấu hình Firebase ra `.env` (ví dụ dùng `expo-constants` / `dotenv`)
- Thay OpenStreetMap embed bằng `react-native-maps` (native) để mượt hơn
- Lưu lịch sử vị trí (`gps_history`) và hiển thị đường đi
- Thêm xác thực (Firebase Auth) để bảo vệ dữ liệu

---

## License

Chưa khai báo.
