# Prompt Template - Thêm dữ liệu ngữ pháp TOPIK II

Dùng prompt dưới đây với bất kỳ AI model nào (ChatGPT, Gemini, Claude...) để tạo thêm dữ liệu ngữ pháp.

---

## Prompt:

```
Tôi đang xây dựng web flashcard ngữ pháp đồng nghĩa TOPIK II. Hãy giúp tôi tạo dữ liệu JavaScript theo ĐÚNG format dưới đây.

### FORMAT MẪU:

1. Thêm vào mảng `synonymGroups` (nếu có nhóm mới):
```javascript
{ id: "tên_nhóm", label: "Tên hiển thị (nghĩa VN)", grammarIds: [id1, id2, ...] }
```

2. Thêm vào mảng `grammarData`:
```javascript
{
  id: SỐ_THỨ_TỰ,
  grammar: "ngữ pháp tiếng Hàn",
  senses: [
    { meaning: "nghĩa tiếng Việt 1", groupId: "tên_nhóm_1" },
    { meaning: "nghĩa tiếng Việt 2", groupId: "tên_nhóm_2" }
  ],
  synonymPatterns: ["pattern đồng nghĩa 1", "pattern 2"],
  examples: [
    { sentence: "Câu mẫu với <b>phần ngữ pháp</b> được bôi đậm." },
    { sentence: "Câu mẫu thứ 2 với <b>ngữ pháp đồng nghĩa</b>." }
  ],
  notes: "ghi chú (vd: chỉ dùng ở quá khứ)"
}
```

### QUY TẮC QUAN TRỌNG:
- `id` phải là số nguyên duy nhất, tiếp nối các ID đã có
- `groupId` trong `senses` phải khớp với `id` trong `synonymGroups`
- Nếu ngữ pháp có NHIỀU nghĩa → tạo nhiều phần tử trong `senses`, mỗi cái thuộc 1 `groupId` khác
- `synonymPatterns` là các dạng ngữ pháp tương đương (không cần là grammar ID)
- `examples` dùng tag `<b>` để highlight phần ngữ pháp trong câu
- 1 ngữ pháp CÓ THỂ thuộc nhiều nhóm đồng nghĩa
- Khi thêm grammar vào 1 group, nhớ cập nhật `grammarIds` trong group đó

### CÁC NHÓM ĐÃ CÓ:
- "guess" → Phỏng đoán (hình như, có vẻ) → IDs: [1, 2]
- "purpose" → Mục đích (để) → IDs: [3, 4, 5]  
- "contrast" → Tương phản (nhưng) → IDs: [6]

### CÁC GRAMMAR ĐÃ CÓ (ID 1-6):
1. (으)ㄴ/는 것 같다 - guess
2. 아/어 보이다 - guess
3. 게 - purpose
4. 기 위해서 - purpose
5. (으)려면 - purpose
6. (으)면서(도) - contrast

### YÊU CẦU:
Hãy tạo dữ liệu cho các ngữ pháp sau (bắt đầu từ id = 7):
[DÁN DANH SÁCH NGỮ PHÁP CẦN THÊM VÀO ĐÂY]

Cho tôi code JavaScript hoàn chỉnh có thể copy-paste vào file data.js.
Lưu ý: giữ nguyên phần đã có, chỉ thêm mới vào cuối mảng.
```

---

## Ví dụ sử dụng:

Thay `[DÁN DANH SÁCH...]` bằng:

```
7. (으)ㄹ지도 모르다 - có lẽ, ko biết chừng
8. (으) 리가 없다 - không có lý gì mà  
9. (으)ㄹ 만하다 - giá trị, đáng để làm
10. (으)ㄴ/는 셈이다 - giống như, xem như
11. (으)ㄴ/는 줄 몰랐다 - không ngờ rằng
```

Kèm theo ảnh bảng ngữ pháp nếu có để AI đọc câu mẫu chính xác.

---

## Sau khi nhận kết quả:

1. Mở file `js/data.js`
2. Thêm các phần tử mới vào cuối mảng `synonymGroups` và `grammarData`
3. Đảm bảo `grammarIds` trong các group được cập nhật đúng
4. Reload trang web để kiểm tra
