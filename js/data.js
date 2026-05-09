// ===== NHÓM ĐỒNG NGHĨA =====
const synonymGroups = [
  { id: "guess", label: "Phỏng đoán (hình như, có vẻ)", grammarIds: [1, 2] },
  { id: "purpose", label: "Mục đích (để)", grammarIds: [3, 4, 5, 19] },
  { id: "contrast", label: "Tương phản (nhưng)", grammarIds: [6, 16, 17, 18, 46] },
  { id: "maybe", label: "Có lẽ, có thể", grammarIds: [7] },
  { id: "impossible", label: "Không có lý (부정)", grammarIds: [8] },
  { id: "worthy", label: "Đáng để làm", grammarIds: [9] },
  { id: "consider_as", label: "Xem như, coi như", grammarIds: [10] },
  { id: "unexpected", label: "Không ngờ rằng", grammarIds: [11] },
  { id: "reason", label: "Nguyên nhân (vì, do)", grammarIds: [12, 13, 14] },
  { id: "opposite", label: "Trái lại, ngược lại", grammarIds: [15] },
  { id: "extent", label: "Đến mức, đến tận", grammarIds: [19, 26] },
  { id: "whenever", label: "Hễ, chỉ cần", grammarIds: [20] },
  { id: "state", label: "Trạng thái (vẫn, đang)", grammarIds: [21] },
  { id: "addition", label: "Không những...mà còn", grammarIds: [22, 23] },
  { id: "concession", label: "Dù (nhượng bộ)", grammarIds: [24, 25, 32] },
  { id: "inevitable", label: "Đương nhiên", grammarIds: [27] },
  { id: "no_choice", label: "Đành phải, buộc phải", grammarIds: [28] },
  { id: "worry", label: "E rằng, lo lắng", grammarIds: [29] },
  { id: "immediate", label: "Ngay sau khi", grammarIds: [30] },
  { id: "on_way", label: "Trên đường, đang đi", grammarIds: [31] },
  { id: "only", label: "Chỉ (한정)", grammarIds: [33] },
  { id: "regret", label: "Hối tiếc (biết thế thì đã)", grammarIds: [34] },
  { id: "intention", label: "Định, chuẩn bị", grammarIds: [35] },
  { id: "according", label: "Theo như", grammarIds: [36] },
  { id: "depend", label: "Phụ thuộc vào", grammarIds: [37] },
  { id: "pretend", label: "Giả vờ", grammarIds: [38] },
  { id: "result_of", label: "Cứ...thì (kết quả)", grammarIds: [39] },
  { id: "like_as", label: "Như, như thể", grammarIds: [40] },
  { id: "also", label: "Vừa, cũng", grammarIds: [41] },
  { id: "obvious", label: "Chắc chắn, rõ ràng", grammarIds: [42] },
  { id: "dual", label: "Vừa là...vừa là", grammarIds: [43] },
  { id: "likely", label: "Dễ bị, dễ xảy ra", grammarIds: [44] },
  { id: "prepared", label: "Sẵn", grammarIds: [45] },
  { id: "cause_result", label: "Nguyên nhân - kết quả", grammarIds: [46] },
  { id: "sequence", label: "Thứ tự", grammarIds: [46] },
];

// ===== DỮ LIỆU NGỮ PHÁP =====
const grammarData = [
  // === 1-6: Đã có ===
  {
    id: 1, grammar: "(으)ㄴ/는 것 같다",
    senses: [{ meaning: "hình như, có vẻ như, chắc là", groupId: "guess" }],
    synonymPatterns: ["는 듯하다", "나 보다", "는 모양이다"],
    examples: [
      { sentence: "집 옮기는 소리가 나는 걸 보니까 옆집이 이사를 <b>가는 것 같다</b>." },
      { sentence: "집 옮기는 소리가 나는 걸 보니까 옆집이 이사를 <b>가는 듯하다</b>." },
      { sentence: "집 옮기는 소리가 나는 걸 보니까 옆집이 이사를 <b>가나 보다</b>." },
      { sentence: "집 옮기는 소리가 나는 걸 보니까 옆집이 이사를 <b>가는 모양이다</b>." }
    ], notes: "",
    ownExamples: [
      { sentence: "집 옮기는 소리가 나는 걸 보니까 옆집이 이사를 <b>가는 것 같다</b>.", translation: "Nghe tiếng chuyển đồ, hình như nhà bên đang chuyển nhà." }
    ]
  },
  {
    id: 2, grammar: "아/어 보이다",
    senses: [{ meaning: "trông có vẻ", groupId: "guess" }],
    synonymPatterns: ["은/는 것 같았다"],
    examples: [
      { sentence: "친구가 기분 좋은 일이 있는지 기분이 <b>좋아 보였다</b>." },
      { sentence: "친구가 기분 좋은 일이 있는지 기분이 <b>좋은 것 같았다</b>." }
    ], notes: "",
    ownExamples: [
      { sentence: "친구가 기분 좋은 일이 있는지 기분이 <b>좋아 보였다</b>.", translation: "Bạn tôi trông có vẻ vui, chắc là có chuyện gì tốt." }
    ]
  },
  {
    id: 3, grammar: "게",
    senses: [{ meaning: "để", groupId: "purpose" }],
    synonymPatterns: ["도록"],
    examples: [
      { sentence: "금요일이 장학금 신청일이라서 <b>잊어버리지 않게</b> 달력에 표시해 두었다." },
      { sentence: "금요일이 장학금 신청일이라서 <b>잊어버리지 않도록</b> 달력에 표시해 두었다." }
    ], notes: "",
    ownExamples: [
      { sentence: "금요일이 장학금 신청일이라서 <b>잊어버리지 않게</b> 달력에 표시해 두었다.", translation: "Vì thứ 6 là ngày đăng ký học bổng nên tôi đã đánh dấu vào lịch để không quên." }
    ]
  },
  {
    id: 4, grammar: "기 위해서",
    senses: [{ meaning: "để", groupId: "purpose" }],
    synonymPatterns: ["(으)려고"],
    examples: [
      { sentence: "요즘 살을 <b>빼기 위해서</b> 열심히 운동을 하고 있다." },
      { sentence: "요즘 살을 <b>빼려고</b> 열심히 운동을 하고 있다." }
    ], notes: "",
    ownExamples: [
      { sentence: "요즘 살을 <b>빼기 위해서</b> 열심히 운동을 하고 있다.", translation: "Dạo này tôi đang chăm chỉ tập thể dục để giảm cân." }
    ]
  },
  {
    id: 5, grammar: "(으)려면",
    senses: [{ meaning: "để", groupId: "purpose" }],
    synonymPatterns: ["기 위해서는"],
    examples: [
      { sentence: "외국에서 생활을 <b>잘하려면</b> 그 나라의 문화를 이해하는 게 중요하다." },
      { sentence: "외국에서 생활을 <b>잘하기 위해서는</b> 그 나라의 문화를 이해하는 게 중요하다." }
    ], notes: "",
    ownExamples: [
      { sentence: "외국에서 생활을 <b>잘하려면</b> 그 나라의 문화를 이해하는 게 중요하다.", translation: "Để sống tốt ở nước ngoài, việc hiểu văn hóa nước đó là rất quan trọng." }
    ]
  },
  {
    id: 6, grammar: "(으)면서(도)",
    senses: [{ meaning: "nhưng", groupId: "contrast" }],
    synonymPatterns: ["알고서도"],
    examples: [
      { sentence: "친구가 곤란할까 봐 그 사실을 <b>알면서</b> 모른 척했다." },
      { sentence: "친구가 곤란할까 봐 그 사실을 <b>알고서도</b> 모른 척했다." }
    ], notes: "",
    ownExamples: [
      { sentence: "친구가 곤란할까 봐 그 사실을 <b>알면서</b> 모른 척했다.", translation: "Sợ bạn gặp khó, dù biết chuyện đó nhưng tôi giả vờ không biết." }
    ]
  },

  // === 7-21: MỚI THÊM ===
  {
    id: 7, grammar: "(으)ㄹ지도 모르다",
    senses: [{ meaning: "có lẽ, ko biết chừng", groupId: "maybe" }],
    synonymPatterns: ["(으)ㄹ 수도 있다"],
    examples: [
      { sentence: "예상보다 손님이 많이 와서 준비한 음식이 <b>부족할지도 모른다</b>." },
      { sentence: "예상보다 손님이 많이 와서 준비한 음식이 <b>부족할 수도 있다</b>." }
    ], notes: ""
  },
  {
    id: 8, grammar: "(으) 리가 없다",
    senses: [{ meaning: "không có lý gì mà", groupId: "impossible" }],
    synonymPatterns: ["지 않았을 것이다"],
    examples: [
      { sentence: "그는 정직하기 때문에 거짓말을 <b>했을 리가 없다</b>." },
      { sentence: "그는 정직하기 때문에 거짓말을 <b>하지 않았을 것이다</b>." }
    ], notes: ""
  },
  {
    id: 9, grammar: "(으)ㄹ 만하다",
    senses: [{ meaning: "giá trị, đáng để làm", groupId: "worthy" }],
    synonymPatterns: ["(으)ㄹ 만한 것이 있다", "(으)ㄹ 수 있는 것이 있다"],
    examples: [
      { sentence: "서울 근교에는 가족들과 함께 즐겁게 <b>놀 만한</b> 곳이 많이 있다." },
      { sentence: "서울 근교에는 가족들과 함께 즐겁게 <b>놀 수 있는</b> 곳이 많이 있다." }
    ], notes: ""
  },
  {
    id: 10, grammar: "(으)ㄴ/는 셈이다",
    senses: [{ meaning: "giống như, xem như, coi như", groupId: "consider_as" }],
    synonymPatterns: ["거나 같다", "거나 마찬가지이다", "거나 다름없다"],
    examples: [
      { sentence: "오늘이 벌써 12월 말이니까 올해도 다 <b>지나간 셈이다</b>." },
      { sentence: "오늘이 벌써 12월 말이니까 올해도 다 <b>지나간 거나 같다</b>." },
      { sentence: "오늘이 벌써 12월 말이니까 올해도 다 <b>지나간 거나 마찬가지이다</b>." },
      { sentence: "오늘이 벌써 12월 말이니까 올해도 다 <b>지나간 거나 다름없다</b>." }
    ], notes: ""
  },
  {
    id: 11, grammar: "(으)ㄴ/는 줄 몰랐다",
    senses: [{ meaning: "không ngờ rằng", groupId: "unexpected" }],
    synonymPatterns: ["다고 생각했다"],
    examples: [
      { sentence: "나는 지난주에 모임이 있어서 이번 주 모임은 <b>있는 줄 몰랐다</b>." },
      { sentence: "나는 지난주에 모임이 있어서 이번 주 모임은 <b>없다고 생각했다</b>." }
    ], notes: ""
  },
  {
    id: 12, grammar: "는 바람에",
    senses: [{ meaning: "vì, tại vì", groupId: "reason" }],
    synonymPatterns: ["는 통에", "어서/아서", "느라고", "ㄴ/은 탓에"],
    examples: [
      { sentence: "사람들이 하도 <b>떠드는 바람에</b> 친구하고 대화를 할 수가 없었다." },
      { sentence: "사람들이 하도 <b>떠드는 통에</b> 바람에 친구하고 대화를 할 수가 없었다." },
      { sentence: "사람들이 하도 <b>떠들어서</b> 친구하고 대화를 할 수가 없었다." },
      { sentence: "서둘러 <b>나오는 바람에</b> 지갑을 안 가지고 나왔다." },
      { sentence: "서둘러 <b>나오느라고</b> 지갑을 안 가지고 나왔다." },
      { sentence: "서둘러 <b>나온 탓에</b> 지갑을 안 가지고 나왔다." }
    ], notes: "chỉ dùng cho kết quả tiêu cực"
  },
  {
    id: 13, grammar: "ㄴ/는다기에/길래",
    senses: [{ meaning: "vì nói là, vì bảo là", groupId: "reason" }],
    synonymPatterns: ["다기에", "다길래"],
    examples: [
      { sentence: "눈이 피곤할 때 먼 곳을 쳐다보면 효과가 <b>있다기에</b> 해 보는 중이다." },
      { sentence: "눈이 피곤할 때 먼 곳을 쳐다보면 효과가 <b>있다길래</b> 해 보는 중이다." }
    ], notes: ""
  },
  {
    id: 14, grammar: "(으)ㄴ 나머지",
    senses: [{ meaning: "do...nên", groupId: "reason" }],
    synonymPatterns: ["ㄴ/은 탓에"],
    examples: [
      { sentence: "나는 그림 작업에 <b>집중한 나머지</b> 중요한 전화를 받지 못했다." },
      { sentence: "나는 그림 작업에 <b>집중한 탓에</b> 중요한 전화를 받지 못했다." }
    ], notes: ""
  },
  {
    id: 15, grammar: "(으)ㄴ/는 반면에",
    senses: [{ meaning: "trái lại, ngược lại", groupId: "opposite" }],
    synonymPatterns: ["ㄴ/은 데 반해"],
    examples: [
      { sentence: "이 제품은 열에 <b>강한 반면에</b> 습기에는 약하다." },
      { sentence: "이 제품은 열에 <b>강한 데 반해</b> 습기에는 약하다." }
    ], notes: ""
  },
  {
    id: 16, grammar: "(으)ㄴ/는데도",
    senses: [{ meaning: "dù ...nhưng", groupId: "contrast" }],
    synonymPatterns: ["지만"],
    examples: [
      { sentence: "나는 공부를 열심히 <b>하는데도</b> 성적이 잘 오르지 않는다." },
      { sentence: "나는 공부를 열심히 <b>하지만</b> 성적이 잘 오르지 않는다." }
    ], notes: ""
  },
  {
    id: 17, grammar: "(으)ㄴ/는가 하면",
    senses: [{ meaning: "cũng ...nhưng", groupId: "contrast" }],
    synonymPatterns: ["기는 하지만"],
    examples: [
      { sentence: "이 영화는 재미있는 부분이 <b>있는가 하면</b> 지루한 부분도 꽤 있다." },
      { sentence: "이 영화는 재미있는 부분이 <b>있기는 하지만</b> 지루한 부분도 꽤 있다." }
    ], notes: ""
  },
  {
    id: 18, grammar: "고도",
    senses: [{ meaning: "dù ...nhưng", groupId: "contrast" }],
    synonymPatterns: ["었는데도"],
    examples: [
      { sentence: "스마트폰이 복잡해서 그런지 어머니가 설명을 <b>듣고도</b> 모르겠다고 하셨다." },
      { sentence: "스마트폰이 복잡해서 그런지 어머니가 설명을 <b>들었는데도</b> 모르겠다고 하셨다." }
    ], notes: ""
  },
  {
    id: 19, grammar: "도록",
    senses: [
      { meaning: "đến tận", groupId: "extent" },
      { meaning: "để", groupId: "purpose" }
    ],
    synonymPatterns: ["(으)ㄹ 때까지"],
    examples: [
      { sentence: "아이는 날이 <b>어두워지도록</b> 아무 연락도 없었다." },
      { sentence: "아이는 날이 <b>어두워질 때까지</b> 아무 연락도 없었다." }
    ], notes: "Có 2 nghĩa: 'đến tận' (mức độ) và 'để' (mục đích)"
  },
  {
    id: 20, grammar: "기만 하다",
    senses: [{ meaning: "hễ..., chỉ cần...", groupId: "whenever" }],
    synonymPatterns: ["(으)ㄹ 때마다"],
    examples: [
      { sentence: "목감기에 걸려서 그런지 음식을 <b>먹기만 하면</b> 목이 아프다." },
      { sentence: "목감기에 걸려서 그런지 음식을 <b>먹을 때마다</b> 목이 아프다." }
    ], notes: ""
  },
  {
    id: 21, grammar: "(으)ㄴ 채(로)",
    senses: [{ meaning: "trong khi, vẫn, đang", groupId: "state" }],
    synonymPatterns: ["고"],
    examples: [
      { sentence: "저기 우산을 <b>쓴 채</b> 서 있는 사람이 오늘 소개할 사람이다." },
      { sentence: "저기 우산을 <b>쓰고</b> 서 있는 사람이 오늘 소개할 사람이다." }
    ], notes: ""
  },

  // === 22-33 ===
  {
    id: 22, grammar: "(으)ㄹ 뿐만 아니라",
    senses: [{ meaning: "không những...mà còn", groupId: "addition" }],
    synonymPatterns: ["ㄴ/은 데다가", "것은 물론이고"],
    examples: [
      { sentence: "이 식당은 음식 값이 <b>쌀 뿐만 아니라</b> 종업원도 아주 친절하다." },
      { sentence: "이 식당은 음식 값이 <b>싼 데다가</b> 종업원도 아주 친절하다." },
      { sentence: "이 식당은 음식 값이 <b>싼 것은 물론이고</b> 종업원도 아주 친절하다." }
    ], notes: ""
  },
  {
    id: 23, grammar: "은/는커녕",
    senses: [{ meaning: "chẳng những ko...mà lại còn", groupId: "addition" }],
    synonymPatterns: ["은/는 물론이고", "은/는 말할 것도 없고"],
    examples: [
      { sentence: "목이 너무 아파서 <b>밥은커녕</b> 물조차 못 마신다." },
      { sentence: "목이 너무 아파서 <b>밥은 물론이고</b> 물조차 못 마신다." },
      { sentence: "목이 너무 아파서 <b>밥은 말할 것도 없고</b> 물조차 못 마신다." }
    ], notes: ""
  },
  {
    id: 24, grammar: "(나) 마나",
    senses: [{ meaning: "làm gì cũng vô ích, dù...", groupId: "concession" }],
    synonymPatterns: ["어/아 보자", "것도 없이"],
    examples: [
      { sentence: "<b>물어보나 마나</b> 동생은 집에 있다고 할 것이다." },
      { sentence: "<b>물어보자</b> 동생은 집에 있다고 할 것이다." },
      { sentence: "<b>물어볼 것도 없이</b> 동생은 집에 있다고 할 것이다." }
    ], notes: ""
  },
  {
    id: 25, grammar: "든지",
    senses: [{ meaning: "dù...", groupId: "concession" }],
    synonymPatterns: ["더라도"],
    examples: [
      { sentence: "저 사람과 같이 일한다면 뭘 <b>하든지</b> 열심히 하는 사람이면 좋겠다." },
      { sentence: "저 사람과 같이 일한다면 뭘 <b>하더라도</b> 열심히 하는 사람이면 좋겠다." }
    ], notes: ""
  },
  {
    id: 26, grammar: "(으)ㄹ 정도로",
    senses: [{ meaning: "đến mức", groupId: "extent" }],
    synonymPatterns: ["만큼", "게"],
    examples: [
      { sentence: "친구를 얼마 전에 만났는데 <b>몰라볼 정도로</b> 살이 많이 빠져 있었다." },
      { sentence: "친구를 얼마 전에 만났는데 <b>몰라볼 만큼</b> 살이 많이 빠져 있었다." },
      { sentence: "친구를 얼마 전에 만났는데 <b>몰라보게</b> 살이 많이 빠져 있었다." }
    ], notes: ""
  },
  {
    id: 27, grammar: "기 마련이다",
    senses: [{ meaning: "đương nhiên", groupId: "inevitable" }],
    synonymPatterns: ["는 법이다", "게 돼 있다"],
    examples: [
      { sentence: "물건이 오래되면 사용하지 않아도 <b>낡기 마련이다</b>." },
      { sentence: "물건이 오래되면 사용하지 않아도 <b>낡는 법이다</b>." },
      { sentence: "물건이 오래되면 사용하지 않아도 <b>낡게 돼 있다</b>." }
    ], notes: ""
  },
  {
    id: 28, grammar: "(으)ㄹ 수밖에 없다",
    senses: [{ meaning: "đành phải, chỉ còn cách", groupId: "no_choice" }],
    synonymPatterns: ["아/어야만 했다", "지 않을 수 없었다"],
    examples: [
      { sentence: "열이 너무 심하게 나서 병원에 <b>가야만 했다</b>." },
      { sentence: "열이 너무 심하게 나서 병원에 <b>가지 않을 수 없었다</b>." },
      { sentence: "열이 너무 심하게 나서 병원에 <b>갈 수밖에 없었다</b>." }
    ], notes: ""
  },
  {
    id: 29, grammar: "(으)ㄹ까 봐(서)",
    senses: [{ meaning: "e rằng, có lẽ sẽ", groupId: "worry" }],
    synonymPatterns: ["것 같아서", "지도 몰라서"],
    examples: [
      { sentence: "처음 자전거를 배울 때 <b>넘어질까 봐</b> 걱정했는데 생각보다 쉬웠다." },
      { sentence: "처음 자전거를 배울 때 <b>넘어질 것 같아서</b> 걱정했는데 생각보다 쉬웠다." }
    ], notes: ""
  },
  {
    id: 30, grammar: "자마자",
    senses: [{ meaning: "ngay sau khi", groupId: "immediate" }],
    synonymPatterns: ["는 대로", "면 바로", "기가 무섭게"],
    examples: [
      { sentence: "나는 버스터미널에 <b>도착하자마자</b> 부모님께 전화를 드릴 생각이다." },
      { sentence: "나는 버스터미널에 <b>도착하는 대로</b> 부모님께 전화를 드릴 생각이다." },
      { sentence: "나는 버스터미널에 <b>도착하면 바로</b> 부모님께 전화를 드릴 생각이다." },
      { sentence: "화점 입장이 <b>시작되자마자</b> 손님들이 몰려들었다." },
      { sentence: "화점 입장이 <b>시작되기가 무섭게</b> 손님들이 몰려들었다." }
    ], notes: ""
  },
  {
    id: 31, grammar: "는 길에",
    senses: [{ meaning: "trên đường, đang", groupId: "on_way" }],
    synonymPatterns: ["다가"],
    examples: [
      { sentence: "집에 <b>들어오는 길에</b> 꽃이 예뻐서 한 다발을 샀다." },
      { sentence: "집에 <b>들어오다가</b> 꽃이 예뻐서 한 다발을 샀다." }
    ], notes: ""
  },
  {
    id: 32, grammar: "아/어 봐야",
    senses: [{ meaning: "dù...thì cũng", groupId: "concession" }],
    synonymPatterns: ["아/어 봐도", "본다고 해도"],
    examples: [
      { sentence: "좀 비싼 것 같지만 다른 가게에 <b>가 봐야</b> 값이 다 비슷할 것 같다." },
      { sentence: "좀 비싼 것 같지만 다른 가게에 <b>가 봐도</b> 값이 다 비슷할 것 같다." },
      { sentence: "좀 비싼 것 같지만 다른 가게에 <b>가 본다고 해도</b> 값이 다 비슷할 것 같다." }
    ], notes: ""
  },
  {
    id: 33, grammar: "(으)ㄹ 뿐이다",
    senses: [{ meaning: "chỉ", groupId: "only" }],
    synonymPatterns: ["에 불과하다", "다름이다"],
    examples: [
      { sentence: "바빠서 일을 못 끝냈다는 말은 <b>변명일 뿐이다</b>." },
      { sentence: "바빠서 일을 못 끝냈다는 말은 <b>변명에 불과하다</b>." },
      { sentence: "친구에게 항상 도움을 받기만 해서 <b>미안할 뿐이다</b>." },
      { sentence: "친구에게 항상 도움을 받기만 해서 <b>미안할 다름이다</b>." }
    ], notes: ""
  },

  // === 34-46 ===
  {
    id: 34, grammar: "(으)ㄹ걸 그랬다",
    senses: [{ meaning: "biết thế thì đã", groupId: "regret" }],
    synonymPatterns: ["었어야 했는데"],
    examples: [
      { sentence: "졸업하고 보니 학교 다닐 때 좀 더 열심히 <b>공부할걸 그랬다</b> 생각이 든다." },
      { sentence: "졸업하고 보니 학교 다닐 때 좀 더 열심히 <b>공부했어야 했는데</b> 생각이 든다." }
    ], notes: ""
  },
  {
    id: 35, grammar: "(으)려던 참이다",
    senses: [{ meaning: "định", groupId: "intention" }],
    synonymPatterns: ["려고 했다"],
    examples: [
      { sentence: "사무실이 너무 더워서 안 그래도 막 에어컨을 <b>켜려던 참이었다</b>." },
      { sentence: "사무실이 너무 더워서 안 그래도 막 에어컨을 <b>켜려고 했다</b>." }
    ], notes: ""
  },
  {
    id: 36, grammar: "는 대로",
    senses: [{ meaning: "theo như", groupId: "according" }],
    synonymPatterns: ["는 것처럼", "는 것과 같이"],
    examples: [
      { sentence: "요가를 배우는데 선생님이 <b>하는 대로</b> 따라 하기가 쉽지 않다." },
      { sentence: "요가를 배우는데 선생님이 <b>하는 것처럼</b> 따라 하기가 쉽지 않다." },
      { sentence: "요가를 배우는데 선생님이 <b>하는 것과 같이</b> 따라 하기가 쉽지 않다." }
    ], notes: ""
  },
  {
    id: 37, grammar: "에 달려 있다",
    senses: [{ meaning: "phụ thuộc vào", groupId: "depend" }],
    synonymPatterns: ["나름이다"],
    examples: [
      { sentence: "똑같은 재료인데도 음식 맛이 다른 건 요리하기<b>에 달려 있다</b>." },
      { sentence: "똑같은 재료인데도 음식 맛이 다른 건 요리하기 <b>나름이다</b>." }
    ], notes: ""
  },
  {
    id: 38, grammar: "(으)ㄴ/는 척하다",
    senses: [{ meaning: "giả vờ", groupId: "pretend" }],
    synonymPatterns: ["것처럼 행동하다", "체하다"],
    examples: [
      { sentence: "회사 동료가 바쁘 보였지만 도와주고 싶지 않아서 <b>모르는 척했다</b>." },
      { sentence: "회사 동료가 바쁘 보였지만 도와주고 싶지 않아서 <b>모르는 것처럼 행동했다</b>." },
      { sentence: "회사 동료가 바쁘 보였지만 도와주고 싶지 않아서 <b>모르는 체했다</b>." }
    ], notes: ""
  },
  {
    id: 39, grammar: "다가 보니까",
    senses: [{ meaning: "cứ...thì", groupId: "result_of" }],
    synonymPatterns: ["는 탓에"],
    examples: [
      { sentence: "바쁘서 식사를 제시간에 <b>못 하다가 보니까</b> 속이 쓸릴 때가 많아졌다." },
      { sentence: "바쁘서 식사를 제시간에 <b>못 하는 탓에</b> 속이 쓸릴 때가 많아졌다." }
    ], notes: ""
  },
  {
    id: 40, grammar: "듯이",
    senses: [{ meaning: "như, như thể", groupId: "like_as" }],
    synonymPatterns: ["것처럼"],
    examples: [
      { sentence: "나라마다 언어가 <b>다르듯이</b> 문화도 다르다." },
      { sentence: "나라마다 언어가 <b>다른 것처럼</b> 문화도 다르다." }
    ], notes: ""
  },
  {
    id: 41, grammar: "기도 하고",
    senses: [{ meaning: "vừa, cũng", groupId: "also" }],
    synonymPatterns: ["뿐만 아니라"],
    examples: [
      { sentence: "처음 보는 요리를 <b>배우기도 하고</b> 그걸 먹을 수도 있어서 좋아요." },
      { sentence: "처음 보는 요리를 <b>배울뿐만 아니라</b> 그걸 먹을 수도 있어서 좋아요." }
    ], notes: ""
  },
  {
    id: 42, grammar: "을 게 뻐하다",
    senses: [{ meaning: "chắc chắn", groupId: "obvious" }],
    synonymPatterns: ["을 것이 분명하다"],
    examples: [
      { sentence: "영수는 아직도 집에서 <b>자고있을 게 뻐하다</b>." },
      { sentence: "영수는 아직도 집에서 <b>자고있을 것이 분명하다</b>." }
    ], notes: ""
  },
  {
    id: 43, grammar: "이자",
    senses: [{ meaning: "vừa là...vừa là", groupId: "dual" }],
    synonymPatterns: ["인 동시에"],
    examples: [
      { sentence: "그 사람은 나의 <b>선생님이자</b> 유명한 감독이다." },
      { sentence: "그 사람은 나의 <b>선생님인 동시에</b> 유명한 감독이다." }
    ], notes: ""
  },
  {
    id: 44, grammar: "기 십상이다",
    senses: [{ meaning: "dễ bị", groupId: "likely" }],
    synonymPatterns: ["기 쉽다"],
    examples: [
      { sentence: "갑자기 운동을 많이 하면 몸에 이상이 <b>생기기 십상이다</b>." },
      { sentence: "갑자기 운동을 많이 하면 몸에 이상이 <b>생기기 쉽다</b>." }
    ], notes: ""
  },
  {
    id: 45, grammar: "아/어 놓다",
    senses: [{ meaning: "sẵn", groupId: "prepared" }],
    synonymPatterns: ["어/아 놓은 채로"],
    examples: [
      { sentence: "어제 얼마나 피곴했던지 컴퓨터를 <b>켜 놓고</b> 잠이 들었다." },
      { sentence: "어제 얼마나 피곴했던지 컴퓨터를 <b>켜 놓은 채로</b> 잠이 들었다." }
    ], notes: ""
  },
  {
    id: 46, grammar: "더니",
    senses: [
      { meaning: "nhưng", groupId: "contrast" },
      { meaning: "nguyên nhân - kết quả", groupId: "cause_result" },
      { meaning: "thứ tự", groupId: "sequence" }
    ],
    synonymPatterns: ["았/었는데"],
    examples: [
      { sentence: "아침에는 비가 오 <b>더니</b> 지금은 눈이 와요." },
      { sentence: "아침에는 비가 <b>왔는데</b> 지금은 눈 와요." }
    ], notes: "chỉ được dùng ở quá khứ. Có 3 nghĩa: nhưng / nguyên nhân-kết quả / thứ tự"
  }
];
