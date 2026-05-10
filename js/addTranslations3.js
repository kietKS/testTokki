const fs = require('fs');

// Map from HTML sentence -> Vietnamese translation
const htmlMap = {
  // ID 1
  '집 옮기는 소리가 나는 걸 보니까 옆집이 이사를 <b>가는 듯하다</b>.': 'Nghe tiếng chuyển đồ, có vẻ như nhà bên đang dọn nhà.',
  '집 옮기는 소리가 나는 걸 보니까 옆집이 이사를 <b>가나 보다</b>.': 'Nghe tiếng chuyển đồ, chắc là nhà bên đang dọn nhà.',
  '집 옮기는 소리가 나는 걸 보니까 옆집이 이사를 <b>가는 모양이다</b>.': 'Nghe tiếng chuyển đồ, có lẽ nhà bên đang dọn nhà.',
  // ID 2
  '친구가 기분 좋은 일이 있는지 기분이 <b>좋아 보였다</b>.': 'Bạn tôi trông có vẻ vui, chắc là có chuyện gì tốt.',
  '친구가 기분 좋은 일이 있는지 기분이 <b>좋은 것 같았다</b>.': 'Bạn tôi có vẻ đang vui, chắc là có chuyện gì đó tốt lành.',
  // ID 3
  '금요일이 장학금 신청일이라서 <b>잊어버리지 않게</b> 달력에 표시해 두었다.': 'Vì thứ 6 là ngày đăng ký học bổng nên tôi đã đánh dấu vào lịch để không quên.',
  '금요일이 장학금 신청일이라서 <b>잊어버리지 않도록</b> 달력에 표시해 두었다.': 'Vì thứ 6 là ngày đăng ký học bổng nên tôi đã đánh dấu vào lịch để không bị quên.',
  // ID 4
  '요즘 살을 빼<b>기 위해서</b> 열심히 운동을 하고 있다.': 'Dạo này tôi đang chăm chỉ tập thể dục để giảm cân.',
  '요즘 살을 빼<b>려고</b> 열심히 운동을 하고 있다.': 'Dạo này tôi đang chăm chỉ tập thể dục vì định giảm cân.',
  // ID 5
  '외국에서 생활을 잘하<b>려면</b> 그 나라의 문화를 이해하는 게 중요하다.': 'Muốn sống tốt ở nước ngoài thì điều quan trọng là phải hiểu văn hóa của đất nước đó.',
  '외국에서 생활을 잘하<b>기 위해서는</b> 그 나라의 문화를 이해하는 게 중요하다.': 'Để sống tốt ở nước ngoài thì điều quan trọng là phải hiểu văn hóa của đất nước đó.',
  // ID 6
  '친구가 곤란할까 봐 그 사실을 알면서 <b>모른 척했다</b>.': 'Vì sợ bạn bị khó xử nên dù biết sự thật tôi vẫn giả vờ không biết.',
  '친구가 곤란할까 봐 그 사실을 <b>알고서도</b> 모른 척했다.': 'Vì sợ bạn bị khó xử nên dù biết rõ sự thật tôi vẫn giả vờ không hay biết.',
  // ID 7
  '예상보다 손님이 많이 와서 준비한 음식이 <b>부족할지도 모른다</b>.': 'Khách đến nhiều hơn dự kiến nên không chừng thức ăn chuẩn bị sẽ không đủ.',
  '예상보다 손님이 많이 와서 준비한 음식이 <b>부족할 수도 있다</b>.': 'Khách đến nhiều hơn dự kiến nên có thể thức ăn chuẩn bị sẽ không đủ.',
  // ID 8
  '그는 정직하기 때문에 거짓말을 <b>했을 리가 없다</b>.': 'Vì anh ấy thành thật nên không có lý nào lại nói dối cả.',
  '그는 정직하기 때문에 거짓말을 <b>하지 않았을 것이다</b>.': 'Vì anh ấy thành thật nên chắc đã không nói dối đâu.',
  // ID 9
  '서울 근교에는 가족들과 함께 즐겁게 <b>놀 만한</b> 곳이 많이 있다.': 'Vùng ngoại ô Seoul có nhiều nơi đáng đến để vui chơi cùng gia đình.',
  '서울 근교에는 가족들과 함께 즐겁게 <b>놀 수 있는</b> 곳이 많이 있다.': 'Vùng ngoại ô Seoul có nhiều nơi có thể vui chơi cùng gia đình.',
  // ID 10
  '오늘이 벌써 12월 말이니까 올해도 다 지나간 <b>셈이다</b>.': 'Hôm nay đã là cuối tháng 12 rồi, coi như năm nay cũng đã trôi qua hết.',
  '오늘이 벌써 12월 말이니까 올해도 다 지나간 <b>거나 같다</b>.': 'Hôm nay đã là cuối tháng 12, cũng như năm nay đã trôi qua hết vậy.',
  '오늘이 벌써 12월 말이니까 올해도 다 지나간 <b>거나 마찬가지이다</b>.': 'Hôm nay đã là cuối tháng 12, coi như năm nay cũng đã qua hết.',
  '오늘이 벌써 12월 말이니까 올해도 다 지나간 <b>거나 다름없다</b>.': 'Hôm nay đã là cuối tháng 12, không khác gì năm nay đã trôi qua hết.',
  // ID 11
  '나는 지난주에 모임이 있어서 이번 주 모임은 있는 <b>줄 몰랐다</b>.': 'Tôi đã có cuộc họp tuần trước nên không ngờ tuần này lại còn có cuộc họp nữa.',
  '나는 지난주에 모임이 있어서 이번 주 모임은 없<b>다고 생각했다</b>.': 'Tôi đã có cuộc họp tuần trước nên nghĩ là tuần này không có.',
  // ID 12
  '사람들이 하도 떠드는 <b>바람에</b> 친구하고 대화를 할 수가 없었다.': 'Mọi người ồn ào quá nên không thể nói chuyện với bạn được.',
  '사람들이 하도 떠드는 <b>통에</b> 친구하고 대화를 할 수가 없었다.': 'Mọi người ồn ào hỗn loạn khiến không thể nói chuyện với bạn.',
  '사람들이 하도 떠들<b>어서</b> 친구하고 대화를 할 수가 없었다.': 'Vì mọi người ồn ào quá nên không thể nói chuyện với bạn.',
  // ID 13
  '눈이 피곤할 때 먼 곳을 쳐다보면 효과가 있<b>다기에</b> 해 보는 중이다.': 'Nghe bảo khi mắt mỏi mà nhìn xa thì có tác dụng nên đang thử xem.',
  '눈이 피곤할 때 먼 곳을 쳐다보면 효과가 있<b>다길래</b> 해 보는 중이다.': 'Nghe nói khi mắt mỏi nhìn ra xa thì có tác dụng nên đang thử xem.',
  // ID 17
  '이 영화는 재미있는 부분이 <b>있는가 하면</b> 지루한 부분도 꽤 있다.': 'Bộ phim này có những đoạn thú vị, đồng thời cũng có khá nhiều đoạn nhàm chán.',
  '이 영화는 재미있는 부분이 있<b>기는 하지만</b> 지루한 부분도 꽤 있다.': 'Bộ phim này tuy có những đoạn thú vị nhưng cũng có khá nhiều đoạn nhàm chán.',
  // ID 46
  '[Tương phản] 아침에는 비가 오 <b>더니</b> 지금은 눈이 와요.': '[Tương phản] Sáng trời mưa, vậy mà bây giờ lại có tuyết.',
  '[Nguyên nhân] 매일 운동하 <b>더니</b> 건강해졌어요.': '[Nguyên nhân] Ngày nào cũng tập thể dục nên giờ đã khỏe ra.',
  '[Thứ tự] 노래를 부르 <b>더니</b> 춤도 추기 시작했어요.': '[Thứ tự] Hát xong rồi bắt đầu nhảy luôn.',
};

let code = fs.readFileSync('js/data.js', 'utf8');
let count = 0;

Object.entries(htmlMap).forEach(([html, vi]) => {
  const transEscaped = vi.replace(/"/g, '\\"');
  const pattern = `{ sentence: "${html}" }`;
  const replacement = `{ sentence: "${html}", translation: "${transEscaped}" }`;
  if (code.includes(pattern)) {
    code = code.split(pattern).join(replacement);
    count++;
  } else {
    console.log('NOT FOUND:', html.substring(0, 50));
  }
});

fs.writeFileSync('js/data.js', code, 'utf8');
console.log('Translations added:', count);
