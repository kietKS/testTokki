// Nhóm đồng nghĩa - mỗi nhóm chứa các grammar ID chia sẻ cùng 1 nghĩa
const synonymGroups = [
  { id: "guess", label: "Phỏng đoán (hình như, có vẻ)", grammarIds: [1, 2] },
  { id: "purpose", label: "Mục đích (để)", grammarIds: [3, 4, 5] },
  { id: "contrast", label: "Tương phản (nhưng)", grammarIds: [6] },
];

// Dữ liệu ngữ pháp - thêm dần vào đây
const grammarData = [
  {
    id: 1,
    grammar: "(으)ㄴ/는 것 같다",
    senses: [
      { meaning: "hình như, có vẻ như, chắc là", groupId: "guess" }
    ],
    synonymPatterns: ["는 듯하다", "나 보다", "는 모양이다"],
    examples: [
      { sentence: "집 옮기는 소리가 나는 걸 보니까 옆집이 이사를 <b>가는 것 같다</b>." },
      { sentence: "집 옮기는 소리가 나는 걸 보니까 옆집이 이사를 <b>가는 듯하다</b>." },
      { sentence: "집 옮기는 소리가 나는 걸 보니까 옆집이 이사를 <b>가나 보다</b>." },
      { sentence: "집 옮기는 소리가 나는 걸 보니까 옆집이 이사를 <b>가는 모양이다</b>." }
    ],
    notes: ""
  },
  {
    id: 2,
    grammar: "아/어 보이다",
    senses: [
      { meaning: "trông có vẻ", groupId: "guess" }
    ],
    synonymPatterns: ["은/는 것 같았다"],
    examples: [
      { sentence: "친구가 기분 좋은 일이 있는지 기분이 <b>좋아 보였다</b>." },
      { sentence: "친구가 기분 좋은 일이 있는지 기분이 <b>좋은 것 같았다</b>." }
    ],
    notes: ""
  },
  {
    id: 3,
    grammar: "게",
    senses: [
      { meaning: "để", groupId: "purpose" }
    ],
    synonymPatterns: ["도록"],
    examples: [
      { sentence: "금요일이 장학금 신청일이라서 <b>잊어버리지 않게</b> 달력에 표시해 두었다." },
      { sentence: "금요일이 장학금 신청일이라서 <b>잊어버리지 않도록</b> 달력에 표시해 두었다." }
    ],
    notes: ""
  },
  {
    id: 4,
    grammar: "기 위해서",
    senses: [
      { meaning: "để", groupId: "purpose" }
    ],
    synonymPatterns: ["(으)려고"],
    examples: [
      { sentence: "요즘 살을 <b>빼기 위해서</b> 열심히 운동을 하고 있다." },
      { sentence: "요즘 살을 <b>빼려고</b> 열심히 운동을 하고 있다." }
    ],
    notes: ""
  },
  {
    id: 5,
    grammar: "(으)려면",
    senses: [
      { meaning: "để", groupId: "purpose" }
    ],
    synonymPatterns: ["기 위해서는"],
    examples: [
      { sentence: "외국에서 생활을 <b>잘하려면</b> 그 나라의 문화를 이해하는 게 중요하다." },
      { sentence: "외국에서 생활을 <b>잘하기 위해서는</b> 그 나라의 문화를 이해하는 게 중요하다." }
    ],
    notes: ""
  },
  {
    id: 6,
    grammar: "(으)면서(도)",
    senses: [
      { meaning: "nhưng", groupId: "contrast" }
    ],
    synonymPatterns: ["알면서도", "모른 척했다"],
    examples: [
      { sentence: "친구가 곤란할까 봐 그 사실을 <b>알면서</b> 모른 척했다." },
      { sentence: "친구가 곤란할까 봐 그 사실을 <b>알고서도</b> 모른 척했다." }
    ],
    notes: ""
  }
];
