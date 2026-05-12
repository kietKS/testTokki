const fs = require('fs');

// Load and parse data
let code = fs.readFileSync('js/data.js', 'utf8');
eval(code.replace('const synonymGroups', 'var synonymGroups').replace('const grammarData', 'var grammarData'));

// Translation map: stripped Korean text (no HTML tags) -> Vietnamese
const translationMap = {
  // ID 12
  "서둘러 나오는 바람에 지갑을 안 가지고 나왔다.": "Vì vội vàng ra ngoài nên đã không mang theo ví.",
  "서둘러 나오느라고 지갑을 안 가지고 나왔다.": "Vì bận vội ra ngoài nên đã không mang theo ví.",
  "서둘러 나온 탓에 지갑을 안 가지고 나왔다.": "Tại vì vội vàng ra ngoài nên đã quên mang ví.",
  // ID 13
  "눈이 피곤할 때 먼 곳을 쳐다보면 효과가 있다기에 해 봤다.": "Nghe bảo khi mắt mỏi mà nhìn xa thì có tác dụng nên đã thử.",
  "눈이 피곤할 때 먼 곳을 쳐다보면 효과가 있다길래 해 봤다.": "Nghe nói khi mắt mỏi nhìn ra xa thì có tác dụng nên đã thử làm xem.",
  // ID 14
  "나는 그림 작업에 집중한 나머지 중요한 전화를 받지 못했다.": "Vì tập trung vào công việc vẽ quá mức nên tôi đã bỏ lỡ cuộc gọi quan trọng.",
  "나는 그림 작업에 집중한 탓에 중요한 전화를 받지 못했다.": "Tại vì tập trung vào công việc vẽ nên đã bỏ lỡ cuộc gọi quan trọng.",
  // ID 15
  "이 제품은 열에 강한 반면에 습기에는 약하다.": "Sản phẩm này chịu nhiệt tốt, ngược lại lại yếu với độ ẩm.",
  "이 제품은 열에 강한 데 반해 습기에는 약하다.": "Sản phẩm này chịu nhiệt tốt, trái lại lại yếu với độ ẩm.",
  // ID 16
  "나는 공부를 열심히 하는데도 성적이 잘 오르지 않는다.": "Dù tôi học hăng hái nhưng điểm vẫn không tăng.",
  "나는 공부를 열심히 하지만 성적이 잘 오르지 않는다.": "Tôi học chăm chỉ nhưng điểm vẫn không tăng.",
  // ID 17
  "이 영화는 재미있는 부분이 있는가 하면 지루한 부분도 있다.": "Bộ phim này có những đoạn thú vị, đồng thời cũng có những đoạn nhàm chán.",
  "이 영화는 재미있는 부분이 있기는 하지만 지루한 부분도 있다.": "Bộ phim này tuy có đoạn thú vị nhưng cũng có đoạn nhàm chán.",
  // ID 18
  "스마트폰이 복잡해서 그런지 어머니가 설명을 듣고도 모르겠다고 하셨다.": "Có lẽ vì điện thoại thông minh phức tạp nên mẹ bảo dù nghe giải thích vẫn không hiểu.",
  "스마트폰이 복잡해서 그런지 어머니가 설명을 들었는데도 모르겠다고 하셨다.": "Có lẽ vì điện thoại thông minh phức tạp, dù mẹ đã nghe giải thích rồi vẫn bảo không hiểu.",
  // ID 19
  "아이는 날이 어두워지도록 아무 연락도 없었다.": "Đứa bé cho đến tận khi trời tối vẫn không có tin tức gì.",
  "아이는 날이 어두워질 때까지 아무 연락도 없었다.": "Đứa bé cho đến khi trời tối cũng không có tin tức gì.",
  // ID 20
  "목감기에 걸려서 그런지 음식을 먹기만 하면 목이 아프다.": "Có lẽ vì bị cảm họng nên hễ ăn gì là cổ họng lại đau.",
  "목감기에 걸려서 그런지 음식을 먹을 때마다 목이 아프다.": "Có lẽ vì bị cảm họng nên mỗi khi ăn là cổ họng lại đau.",
  // ID 21
  "저기 우산을 쓴 채 서 있는 사람이 오늘 소개할 사람이다.": "Người đang đứng kia với chiếc ô trên tay chính là người tôi sẽ giới thiệu hôm nay.",
  "저기 우산을 쓰고 서 있는 사람이 오늘 소개할 사람이다.": "Người đang đứng kia đang cầm ô chính là người tôi sẽ giới thiệu hôm nay.",
  // ID 22
  "이 식당은 음식 값이 쌀 뿐만 아니라 종업원도 아주 친절하다.": "Nhà hàng này không chỉ giá cả phải chăng mà nhân viên cũng rất thân thiện.",
  "이 식당은 음식 값이 싼 데다가 종업원도 아주 친절하다.": "Nhà hàng này giá rẻ mà nhân viên lại còn rất thân thiện.",
  "이 식당은 음식 값이 싼 것은 물론이고 종업원도 아주 친절하다.": "Nhà hàng này giá rẻ là đương nhiên rồi, nhân viên cũng rất thân thiện.",
  // ID 23
  "목이 너무 아파서 밥은커녕 물조차 못 마신다.": "Đau họng quá, cơm chẳng nói, đến nước cũng không uống được.",
  "목이 너무 아파서 밥은 물론이고 물조차 못 마신다.": "Đau họng quá, cơm đương nhiên rồi, đến nước cũng không uống được.",
  "목이 너무 아파서 밥은 말할 것도 없고 물조차 못 마신다.": "Đau họng quá, cơm khỏi nói, đến nước cũng không uống được.",
  // ID 24
  "물어보나 마나 동생은 집에 있다고 할 것이다.": "Hỏi làm gì, chắc chắn em sẽ nói là đang ở nhà.",
  "물어봤자 동생은 집에 있다고 할 것이다.": "Dù có hỏi thì em cũng sẽ nói là đang ở nhà thôi.",
  "물어볼 것도 없이 동생은 집에 있다고 할 것이다.": "Chẳng cần hỏi, em chắc chắn sẽ nói là đang ở nhà.",
  // ID 25
  "저 사람과 같이 일한다면 뭘 하든지 열심히 하는 사람이면 좋겠다.": "Nếu làm việc cùng người đó thì muốn họ là người dù làm gì cũng hết lòng.",
  "저 사람과 같이 일한다면 뭘 하더라도 열심히 하는 사람이면 좋겠다.": "Nếu làm việc cùng người đó thì muốn họ là người dù làm gì cũng nỗ lực hết mình.",
  // ID 26
  "친구를 얼마 전에 만났는데 몰라볼 정도로 살이 많이 빠져 있었다.": "Gặp lại bạn không lâu trước, thấy gầy đến mức không nhận ra.",
  "친구를 얼마 전에 만났는데 몰라볼 만큼 살이 많이 빠져 있었다.": "Gặp lại bạn không lâu trước, gầy đến mức không nhận ra.",
  "친구를 얼마 전에 만났는데 몰라보게 살이 많이 빠져 있었다.": "Gặp lại bạn không lâu trước, thấy gầy đến mức không nhận ra được.",
  // ID 27
  "물건이 오래되면 사용하지 않아도 낡기 마련이다.": "Đồ vật để lâu thì đương nhiên sẽ cũ đi dù không dùng.",
  "물건이 오래되면 사용하지 않아도 낡는 법이다.": "Đồ vật để lâu thì theo lẽ thường sẽ cũ dù không dùng.",
  "물건이 오래되면 사용하지 않아도 낡게 돼 있다.": "Đồ vật để lâu thì nhất định sẽ cũ dù không dùng.",
  // ID 28
  "열이 너무 심하게 나서 병원에 가야만 했다.": "Sốt quá nặng nên đã phải đến bệnh viện.",
  "열이 너무 심하게 나서 병원에 가지 않을 수 없었다.": "Sốt quá nặng, không thể không đến bệnh viện.",
  "열이 너무 심하게 나서 병원에 갈 수밖에 없었다.": "Sốt quá nặng nên đành phải đến bệnh viện.",
  // ID 29
  "처음 자전거를 배울 때 넘어질까 봐 걱정했는데 생각보다 쉬웠다.": "Khi mới học đi xe đạp, lo sợ sẽ ngã nhưng thực ra dễ hơn tưởng tượng.",
  "처음 자전거를 배울 때 넘어질 것 같아서 걱정했는데 생각보다 쉬웠다.": "Khi mới học đi xe đạp, lo vì cảm giác sẽ ngã nhưng thực ra dễ hơn tưởng tượng.",
  // ID 30
  "나는 버스터미널에 도착하자마자 부모님께 전화를 드릴 생각이다.": "Tôi định vừa đến bến xe là gọi điện cho bố mẹ ngay.",
  "나는 버스터미널에 도착하는 대로 부모님께 전화를 드릴 생각이다.": "Tôi định đến bến xe rồi liên lạc với bố mẹ ngay.",
  "나는 버스터미널에 도착하면 바로 부모님께 전화를 드릴 생각이다.": "Tôi định đến bến xe là gọi điện ngay cho bố mẹ.",
  "화점 입장이 시작되자마자 손님들이 몰려들었다.": "Vừa mở cửa bách hóa là khách hàng ùa vào.",
  "화점 입장이 시작되기가 무섭게 손님들이 몰려들었다.": "Vừa mở cửa bách hóa là khách hàng lập tức ùa vào ngay.",
  // ID 31
  "집에 들어오는 길에 꽃이 예뻐서 한 다발을 샀다.": "Trên đường về nhà, thấy hoa đẹp nên tiện mua một bó.",
  "집에 들어오다가 꽃이 예뻐서 한 다발을 샀다.": "Đang trên đường về nhà, thấy hoa đẹp nên mua một bó.",
  // ID 32
  "좀 비싼 것 같지만 다른 가게에 가 봐야 값이 다 비슷할 것 같다.": "Tuy có vẻ hơi đắt nhưng có đi cửa hàng khác thì giá cũng tương tự thôi.",
  "좀 비싼 것 같지만 다른 가게에 가 봐도 값이 다 비슷할 것 같다.": "Tuy có vẻ hơi đắt nhưng dù thử đến cửa hàng khác thì giá cũng sẽ tương tự.",
  "좀 비싼 것 같지만 다른 가게에 가 본다고 해도 값이 다 비슷할 것 같다.": "Tuy có vẻ hơi đắt, nhưng dù có đến cửa hàng khác thì giá cũng đều giống nhau.",
  // ID 33
  "바빠서 일을 못 끝냈다는 말은 변명일 뿐이다.": "Nói bận nên không làm xong việc chẳng qua chỉ là lời biện hộ.",
  "바빠서 일을 못 끝냈다는 말은 변명에 불과하다.": "Nói bận nên không làm xong việc chỉ không hơn gì lời biện hộ.",
  "친구에게 항상 도움을 받기만 해서 미안할 뿐이다.": "Chỉ toàn nhận sự giúp đỡ từ bạn nên tôi chỉ thấy áy náy.",
  "친구에게 항상 도움을 받기만 해서 미안할 다름이다.": "Chỉ toàn nhận sự giúp đỡ từ bạn nên cũng chẳng khác gì thấy áy náy.",
  // ID 34
  "졸업하고 보니 학교 다닐 때 좀 더 열심히 공부할걸 그랬다 생각이 든다.": "Sau khi tốt nghiệp nhìn lại, ước gì hồi đi học đã học chăm hơn.",
  "졸업하고 보니 학교 다닐 때 좀 더 열심히 공부했어야 했는데 생각이 든다.": "Sau khi tốt nghiệp nhìn lại, đáng lẽ phải học chăm hơn khi còn đi học.",
  // ID 35
  "사무실이 너무 더워서 안 그래도 막 에어컨을 켜려던 참이었다.": "Văn phòng nóng quá, vừa đúng lúc đang định bật điều hòa rồi.",
  "사무실이 너무 더워서 안 그래도 막 에어컨을 켜려고 했다.": "Văn phòng nóng quá, tôi vừa định bật điều hòa.",
  // ID 36
  "요가를 배우는데 선생님이 하는 대로 따라 하기가 쉽지 않다.": "Học yoga nhưng làm y hệt theo giáo viên không hề dễ.",
  "요가를 배우는데 선생님이 하는 것처럼 따라 하기가 쉽지 않다.": "Học yoga nhưng làm giống như giáo viên không hề dễ.",
  "요가를 배우는데 선생님이 하는 것과 같이 따라 하기가 쉽지 않다.": "Học yoga nhưng làm y như cách giáo viên làm không hề dễ.",
  // ID 37
  "똑같은 재료인데도 음식 맛이 다른 건 요리하기에 달려 있다.": "Dù nguyên liệu giống nhau nhưng hương vị khác nhau là phụ thuộc vào cách nấu.",
  "똑같은 재료인데도 음식 맛이 다른 건 요리하기 나름이다.": "Dù nguyên liệu giống nhau nhưng hương vị khác nhau là tùy thuộc vào cách nấu.",
  // ID 38
  "회사 동료가 바빠 보였지만 도와주고 싶지 않아서 모르는 척했다.": "Đồng nghiệp có vẻ bận, nhưng vì không muốn giúp nên tôi đã giả vờ không biết.",
  "회사 동료가 바빠 보였지만 도와주고 싶지 않아서 모르는 것처럼 행동했다.": "Đồng nghiệp có vẻ bận, nhưng vì không muốn giúp nên tôi hành động như thể không biết.",
  "회사 동료가 바빠 보였지만 도와주고 싶지 않아서 모르는 체했다.": "Đồng nghiệp có vẻ bận, nhưng vì không muốn giúp nên tôi đã làm ra vẻ không biết.",
  // ID 39
  "바빠서 식사를 제시간에 못 하다가 보니까 속이 쓰릴 때가 많아졌다.": "Vì bận nên cứ ăn không đúng giờ, dần dần hay bị đau dạ dày.",
  "바빠서 식사를 제시간에 못 하는 탓에 속이 쓰릴 때가 많아졌다.": "Tại vì bận nên ăn không đúng giờ mà hay bị đau dạ dày.",
  // ID 40
  "나라마다 언어가 다르듯이 문화도 다르다.": "Cũng như mỗi quốc gia có ngôn ngữ khác nhau, văn hóa cũng khác nhau.",
  "나라마다 언어가 다른 것처럼 문화도 다르다.": "Giống như mỗi quốc gia có ngôn ngữ khác nhau, văn hóa cũng vậy.",
  // ID 41
  "처음 보는 요리를 배우기도 하고 그걸 먹을 수도 있어서 좋아요.": "Vừa được học những món chưa từng thấy vừa được ăn nên thích lắm.",
  "처음 보는 요리를 배울뿐만 아니라 그걸 먹을 수도 있어서 좋아요.": "Không chỉ học được những món lạ mà còn được ăn chúng nên thích lắm.",
  // ID 42
  "영수는 아직도 집에서 자고 있을 게 뻔하다.": "Chắc chắn Yeongsu giờ này vẫn đang ngủ ở nhà.",
  // ID 43
  "그 사람은 나의 선생님이자 유명한 감독이다.": "Người đó vừa là thầy giáo của tôi vừa là đạo diễn nổi tiếng.",
  "그 사람은 나의 선생님인 동시에 유명한 감독이다.": "Người đó đồng thời là thầy giáo của tôi và là đạo diễn nổi tiếng.",
  // ID 44
  "갑자기 운동을 많이 하면 몸에 이상이 생기기 십상이다.": "Nếu tập thể dục quá nhiều đột ngột thì rất dễ xảy ra vấn đề sức khỏe.",
  "갑자기 운동을 많이 하면 몸에 이상이 생기기 쉽다.": "Nếu tập thể dục quá nhiều đột ngột thì dễ xảy ra vấn đề sức khỏe.",
  // ID 45
  "어제 얼마나 피곤했던지 컴퓨터를 켜 놓고 잠이 들었다.": "Hôm qua mệt đến nỗi ngủ quên trong khi máy tính vẫn đang bật.",
  "어제 얼마나 피곤했던지 컴퓨터를 켜 놓은 채로 잠이 들었다.": "Hôm qua mệt đến nỗi ngủ quên trong khi vẫn để nguyên máy tính đang bật.",
  // ID 46
  "[Tương phản] 아침에는 비가 오더니 지금은 눈이 와요.": "[Tương phản] Sáng trời mưa, vậy mà bây giờ lại có tuyết.",
  "[Tương phản ↔] 아침에는 비가 왔는데 지금은 눈 와요.": "[Tương phản ↔] Sáng trời mưa nhưng bây giờ lại có tuyết.",
  "[Nguyên nhân] 매일 운동하더니 건강해졌어요.": "[Nguyên nhân] Ngày nào cũng tập thể dục nên giờ đã khỏe ra.",
  "[Thứ tự] 노래를 부르더니 춤도 추기 시작했어요.": "[Thứ tự] Hát xong rồi bắt đầu nhảy luôn.",
};

// Apply translations to all examples
let addedCount = 0;
grammarData.forEach(g => {
  ['examples', 'ownExamples'].forEach(key => {
    if (!g[key]) return;
    g[key].forEach(ex => {
      if (ex.translation) return; // already has translation
      // Strip HTML tags from sentence to look up
      const stripped = ex.sentence.replace(/<[^>]+>/g, '');
      if (translationMap[stripped]) {
        ex.translation = translationMap[stripped];
        addedCount++;
      }
    });
  });
});

console.log('Translations added:', addedCount);

// Check how many are still missing
let stillMissing = 0;
grammarData.forEach(g => {
  ['examples', 'ownExamples'].forEach(key => {
    if (!g[key]) return;
    g[key].forEach(ex => {
      if (!ex.translation) {
        stillMissing++;
        console.log('STILL MISSING in ID', g.id, ':', ex.sentence.replace(/<[^>]+>/g,'').substring(0,50));
      }
    });
  });
});
console.log('Still missing translations:', stillMissing);

// Now regenerate the data.js file with updated translations
// We'll do this by string replacement - find each { sentence: "X" } and add translation
// Build a modified version of grammarData entries

// Rebuild examples sections
let newCode = code;

grammarData.forEach(g => {
  ['examples', 'ownExamples'].forEach(key => {
    if (!g[key]) return;
    g[key].forEach(ex => {
      if (!ex.translation) return;
      // Find { sentence: "..." } pattern (without translation) and replace with { sentence: "...", translation: "..." }
      const sentEscaped = ex.sentence
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/\[/g, '\\[')
        .replace(/\]/g, '\\]')
        .replace(/\(/g, '\\(')
        .replace(/\)/g, '\\)')
        .replace(/\./g, '\\.')
        .replace(/\?/g, '\\?')
        .replace(/\*/g, '\\*')
        .replace(/\+/g, '\\+');

      const transEscaped = ex.translation.replace(/"/g, '\\"');
      
      // Look for the pattern without translation in the file
      const pattern = `{ sentence: "${ex.sentence}" }`;
      const replacement = `{ sentence: "${ex.sentence}", translation: "${transEscaped}" }`;
      
      if (newCode.includes(pattern)) {
        newCode = newCode.split(pattern).join(replacement);
      }
    });
  });
});

fs.writeFileSync('js/data.js', newCode, 'utf8');
console.log('File updated successfully!');
