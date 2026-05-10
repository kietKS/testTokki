const fs = require('fs');
let code = fs.readFileSync('js/data.js', 'utf8');
eval(code.replace('const synonymGroups', 'var synonymGroups').replace('const grammarData', 'var grammarData'));

const additionalMap = {
  // ID 1 - 것 같다
  "집 옮기는 소리가 나는 걸 보니까 옆집이 이사를 가는 것 같다.": "Nghe tiếng chuyển đồ, hình như nhà bên đang dọn nhà.",
  "집 옮기는 소리가 나는 걸 보니까 옆집이 이사를 가는 듯하다.": "Nghe tiếng chuyển đồ, có vẻ như nhà bên đang dọn nhà.",
  "집 옮기는 소리가 나는 걸 보니까 옆집이 이사를 가나 보다.": "Nghe tiếng chuyển đồ, chắc là nhà bên đang dọn nhà.",
  "집 옮기는 소리가 나는 걸 보니까 옆집이 이사를 가는 모양이다.": "Nghe tiếng chuyển đồ, có lẽ nhà bên đang dọn nhà.",
  // ID 2 - 보이다
  "친구가 기분 좋은 일이 있는지 기분이 좋아 보였다.": "Bạn tôi trông có vẻ vui, chắc là có chuyện gì tốt.",
  "친구가 기분 좋은 일이 있는지 기분이 좋은 것 같았다.": "Bạn tôi có vẻ đang vui, chắc là có chuyện gì đó vui.",
  // ID 3 - 게
  "금요일이 장학금 신청일이라서 잊어버리지 않게 달력에 표시해 두었다.": "Vì thứ 6 là ngày đăng ký học bổng nên tôi đã đánh dấu vào lịch để không quên.",
  "금요일이 장학금 신청일이라서 잊어버리지 않도록 달력에 표시해 두었다.": "Vì thứ 6 là ngày đăng ký học bổng nên tôi đã đánh dấu vào lịch để không bị quên.",
  // ID 4 - 기 위해서
  "요즘 살을 빼기 위해서 열심히 운동을 하고 있다.": "Dạo này tôi đang chăm chỉ tập thể dục để giảm cân.",
  "요즘 살을 빼려고 열심히 운동을 하고 있다.": "Dạo này tôi đang chăm chỉ tập thể dục vì định giảm cân.",
  // ID 5 - 려면
  "외국에서 생활을 잘하려면 그 나라의 문화를 이해하는 게 중요하다.": "Muốn sống tốt ở nước ngoài thì điều quan trọng là phải hiểu văn hóa của đất nước đó.",
  "외국에서 생활을 잘하기 위해서는 그 나라의 문화를 이해하는 게 중요하다.": "Để sống tốt ở nước ngoài thì điều quan trọng là phải hiểu văn hóa của đất nước đó.",
  // ID 6 - 지만
  "친구가 곤란할까 봐 그 사실을 알면서 모른 척했다.": "Vì sợ bạn bị khó xử nên dù biết sự thật tôi vẫn giả vờ không biết.",
  "친구가 곤란할까 봐 그 사실을 알고서도 모른 척했다.": "Vì sợ bạn bị khó xử nên dù biết rõ sự thật tôi vẫn giả vờ không hay biết.",
  // ID 7 - 지도 모르다
  "예상보다 손님이 많이 와서 준비한 음식이 부족할지도 모른다.": "Khách đến nhiều hơn dự kiến nên không chừng thức ăn chuẩn bị sẽ không đủ.",
  "예상보다 손님이 많이 와서 준비한 음식이 부족할 수도 있다.": "Khách đến nhiều hơn dự kiến nên có thể thức ăn chuẩn bị sẽ không đủ.",
  // ID 8 - 리가 없다
  "그는 정직하기 때문에 거짓말을 했을 리가 없다.": "Vì anh ấy thành thật nên không có lý nào lại nói dối cả.",
  "그는 정직하기 때문에 거짓말을 하지 않았을 것이다.": "Vì anh ấy thành thật nên chắc đã không nói dối đâu.",
  // ID 9 - 만하다
  "서울 근교에는 가족들과 함께 즐겁게 놀 만한 곳이 많이 있다.": "Vùng ngoại ô Seoul có nhiều nơi đáng đến để vui chơi cùng gia đình.",
  "서울 근교에는 가족들과 함께 즐겁게 놀 수 있는 곳이 많이 있다.": "Vùng ngoại ô Seoul có nhiều nơi có thể vui chơi cùng gia đình.",
  // ID 10 - 셈이다
  "오늘이 벌써 12월 말이니까 올해도 다 지나간 셈이다.": "Hôm nay đã là cuối tháng 12 rồi, coi như năm nay cũng đã trôi qua hết.",
  "오늘이 벌써 12월 말이니까 올해도 다 지나간 거나 같다.": "Hôm nay đã là cuối tháng 12, cũng như năm nay đã trôi qua hết vậy.",
  "오늘이 벌써 12월 말이니까 올해도 다 지나간 거나 마찬가지이다.": "Hôm nay đã là cuối tháng 12, coi như năm nay cũng đã qua hết.",
  "오늘이 벌써 12월 말이니까 올해도 다 지나간 거나 다름없다.": "Hôm nay đã là cuối tháng 12, không khác gì năm nay đã trôi qua hết.",
  // ID 11 - 줄 몰랐다
  "나는 지난주에 모임이 있어서 이번 주 모임은 있는 줄 몰랐다.": "Tôi đã có cuộc họp tuần trước nên không ngờ tuần này lại còn có cuộc họp nữa.",
  "나는 지난주에 모임이 있어서 이번 주 모임은 없다고 생각했다.": "Tôi đã có cuộc họp tuần trước nên nghĩ là tuần này không có.",
  // ID 12 - 바람에 variants
  "사람들이 하도 떠드는 바람에 친구하고 대화를 할 수가 없었다.": "Mọi người ồn ào quá nên không thể nói chuyện với bạn được.",
  "사람들이 하도 떠드는 통에 친구하고 대화를 할 수가 없었다.": "Mọi người ồn ào hỗn loạn khiến không thể nói chuyện với bạn.",
  "사람들이 하도 떠들어서 친구하고 대화를 할 수가 없었다.": "Vì mọi người ồn ào quá nên không nói chuyện với bạn được.",
  // ID 13 - variants with 해 보는 중이다
  "눈이 피곤할 때 먼 곳을 쳐다보면 효과가 있다기에 해 보는 중이다.": "Nghe bảo khi mắt mỏi mà nhìn xa thì có tác dụng nên đang thử xem.",
  "눈이 피곤할 때 먼 곳을 쳐다보면 효과가 있다길래 해 보는 중이다.": "Nghe nói khi mắt mỏi nhìn ra xa thì có tác dụng nên đang thử xem.",
  // ID 17 - 가 하면 variants
  "이 영화는 재미있는 부분이 있는가 하면 지루한 부분도 꽤 있다.": "Bộ phim này có những đoạn thú vị, đồng thời cũng có khá nhiều đoạn nhàm chán.",
  "이 영화는 재미있는 부분이 있기는 하지만 지루한 부분도 꽤 있다.": "Bộ phim này tuy có những đoạn thú vị nhưng cũng có khá nhiều đoạn nhàm chán.",
  // ID 46 - 더니 (with space before 더니 in original)
  "[Tương phản] 아침에는 비가 오 더니 지금은 눈이 와요.": "[Tương phản] Sáng trời mưa, vậy mà bây giờ lại có tuyết.",
  "[Nguyên nhân] 매일 운동하 더니 건강해졌어요.": "[Nguyên nhân] Ngày nào cũng tập thể dục nên giờ đã khỏe ra.",
  "[Thứ tự] 노래를 부르 더니 춤도 추기 시작했어요.": "[Thứ tự] Hát xong rồi bắt đầu nhảy luôn.",
};

let newCode = code;
let count = 0;

Object.entries(additionalMap).forEach(([kr, vi]) => {
  const transEscaped = vi.replace(/"/g, '\\"');
  const pattern = `{ sentence: "${kr}" }`;
  const replacement = `{ sentence: "${kr}", translation: "${transEscaped}" }`;
  if (newCode.includes(pattern)) {
    newCode = newCode.split(pattern).join(replacement);
    count++;
  }
});

fs.writeFileSync('js/data.js', newCode, 'utf8');
console.log('Additional translations added:', count);

// Verify
eval(newCode.replace('const synonymGroups', 'var synonymGroups2').replace('const grammarData', 'var grammarData2'));
let remaining = 0;
grammarData2.forEach(g => {
  ['examples','ownExamples'].forEach(k => {
    (g[k]||[]).forEach(e => { if(!e.translation) { remaining++; console.log('Still missing ID', g.id, ':', e.sentence.replace(/<[^>]+>/g,'').substring(0,40)); } });
  });
});
console.log('Total still missing:', remaining);
