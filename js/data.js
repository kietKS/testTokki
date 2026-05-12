// ===== NHÓM ĐỒNG NGHĨA =====
const synonymGroups = [
  {
    id: "guess", label: "Phỏng đoán (hình như)", grammarIds: [1, 2, 7, 47, 48, 49, 120, 123],
    nuances: [
      "• 아/어 보이다: Nhìn bề ngoài rồi đoán. (VD: 옷이 작아 보여요 - Áo trông có vẻ nhỏ)",
      "• 나 보다: Đoán dựa trên chứng cứ trực tiếp nghe/thấy. (VD: 불이 꺼진 걸 보니까 자나 봐요 - Thấy tắt đèn nên chắc đang ngủ)",
      "• 는 모양이다: Đoán khách quan dựa trên hoàn cảnh. (VD: 사람들이 우산을 쓴 걸 보니까 비가 오는 모양이에요 - Mọi người che ô nên chắc trời đang mưa)",
      "• 는 듯하다: Giống 것 같다 nhưng trang trọng/văn viết. (VD: 비가 오는 듯하다 - Có vẻ trời mưa)",
      "• (으)ㄹ지도 모르다: Phỏng đoán xác suất rất thấp hoặc lo lắng. (VD: 비가 올지도 몰라요 - Không chừng trời sẽ mưa)",
      "• 것 같다: Phổ biến nhất, đoán chủ quan lẫn khách quan. (VD: 비가 올 것 같아요 - Chắc là trời sẽ mưa)",
      "⚠ (으)ㄹ 수 있다 ĐÃ TÁCH RIÊNG: cấu trúc này chỉ khả năng/năng lực, không phải phỏng đoán → nhóm 'ability'"
    ]
  },
  {
    id: "purpose", label: "Mục đích (để)", grammarIds: [3, 4, 19, 50, 71, 72, 155],
    nuances: [
      "• 기 위해(서): Chủ ngữ 2 vế ĐỒNG NHẤT. (VD: 한국에 가기 위해 돈을 모아요 - Để đi Hàn, tôi gom tiền)",
      "• 고자: Giống 기 위해서 nhưng dùng văn viết/trang trọng. (VD: 한국에 가고자 돈을 모아요)",
      "• 도록 (하다): Nhấn mạnh mức độ hoặc sai khiến 'để cho'. (VD: 잊지 않도록 메모하세요 - Hãy ghi chép để khỏi quên)",
      "• (으)려고: Cùng chủ ngữ. KHÔNG dùng mệnh lệnh/rủ rê ở đuôi câu. (VD: 밥을 먹으려고 식당에 가요 - O, 밥을 먹으려고 식당에 갑시다 - X)",
      "• (으)러: CHỈ đi với động từ di chuyển (가다, 오다) ở vế sau. (VD: 밥을 먹으러 식당에 가요)",
      "• 게: Mục đích/kết quả. Tương đương 도록 trong nhiều ngữ cảnh. (VD: 잊지 않게 메모해요)",
      "⚠ (으)려면 ĐÃ TÁCH RIÊNG: cấu trúc điều kiện mục tiêu, vế sau PHẢI là mệnh lệnh → nhóm 'condition'"
    ]
  },
  {
    id: "contrast", label: "Tương phản (nhưng)", grammarIds: [6, 16, 17, 18, 51, 122, 179, 182],
    nuances: [
      "• 지만: Đối lập hoàn toàn, cơ bản nhất. (VD: 비싸지만 샀어요 - Mắc nhưng vẫn mua)",
      "• (으)면서(도): 'Biết rõ A nhưng vẫn B' (mỉa mai), cùng chủ ngữ. (VD: 알면서도 안 알려줬어요 - Biết nhưng vẫn không chỉ)",
      "• (으)ㄴ/는데도: Mặc dù A (thực tế) nhưng B (trái mong đợi). (VD: 밥을 먹었는데도 배고파요 - Ăn rồi mà vẫn đói)",
      "• 고도: Nhấn mạnh sự bất ngờ/chê trách hành động đã hoàn tất. (VD: 밥을 먹고도 또 먹어? - Ăn rồi mà lại ăn nữa?)",
    ]
  },
  {
    id: "ability", label: "Có thể (khả năng / năng lực)", grammarIds: [92, 138],
    nuances: [
      "• (으)ㄹ 수 있다: Chỉ năng lực hoặc khả năng xảy ra. KHÔNG phải phỏng đoán. (VD: 저는 한국어를 할 수 있어요 - Tôi có thể nói tiếng Hàn; 눈이 올 수 있어요 - Có thể trời sẽ tuyết)",
      "⚠ Khi thêm 도 → 수도 있다 mới mang sắc thái phỏng đoán mờ nhạt (nhưng vẫn khác 것 같다 / 나 보다). KHÔNG xếp cùng nhóm phỏng đoán."
    ]
  },
  {
    id: "impossible", label: "Không có lý (부정)", grammarIds: [8, 124, 125, 126],
    nuances: ["• (으) 리가 없다: Phủ định tuyệt đối khả năng. (VD: 그 사람이 도둑일 리가 없어요 - Người đó không có lý nào lại là trộm)"]
  },
  {
    id: "worthy", label: "Đáng để làm", grammarIds: [9, 127],
    nuances: ["• (으)ㄹ 만하다: Đáng để trải nghiệm, giới thiệu. (VD: 이 영화는 볼 만해요 - Phim này đáng xem)"]
  },
  {
    id: "consider_as", label: "Xem như, coi như", grammarIds: [10, 69, 74, 128, 129, 131],
    nuances: [
      "• 거나 마찬가지이다: Bản chất giống nhau dù thực tế không hẳn. (VD: 10분 남았으니 끝난 거나 마찬가지예요 - Còn 10 phút coi như là xong rồi)",
      "• (으)ㄴ/는 셈이다: Dựa trên tính toán mà xem như là... (VD: 90점이니까 잘한 셈이에요 - 90 điểm thì coi như là làm tốt rồi)",
      "• 것과 같다: Trạng thái gần như tương đương. (VD: 죽은 것과 같아요 - Giống như chết rồi vậy)"
    ]
  },
  {
    id: "unexpected", label: "Không ngờ rằng", grammarIds: [11, 130],
    nuances: ["• (으)ㄴ/는 줄 몰랐다: Nhầm tưởng sự thật. (VD: 비가 오는 줄 몰랐어요 - Không ngờ là trời đang mưa)"]
  },
  {
    id: "reason", label: "Nguyên nhân (vì, do)", grammarIds: [12, 13, 14, 46, 53, 54, 55, 80, 81, 82, 146, 166, 168, 169, 177, 178, 181, 189, 190, 191],
    nuances: [
      "• 아/어서: KHÔNG dùng mệnh lệnh/rủ rê. KHÔNG gắn thì quá khứ/tương lai (았/었/겠). (VD: 아파서 - O, 아팠어서 - X)",
      "• (으)므로: Văn viết. CÓ THỂ gắn thì quá khứ/tương lai ở trước. (VD: 바빴으므로 - Vì đã bận)",
      "• (으)니까: DÙNG ĐƯỢC mệnh lệnh/rủ rê. CÓ THỂ chia thì. (VD: 비가 오니까 집에 가세요 - Mưa nên hãy về nhà)",
      "• 기 때문에: Khách quan. KHÔNG dùng mệnh lệnh/rủ rê. (VD: 비가 오기 때문에 안 가요 - Vì mưa nên không đi)",
      "• 는 바람에: Bất ngờ → Kết quả TIÊU CỰC. (VD: 비가 오는 바람에 옷이 젖었어요 - Mưa bất ngờ làm ướt áo)",
      "• 느라고: Cùng chủ ngữ. Tốn thời gian làm vế 1 nên vế 2 TIÊU CỰC. (VD: 자느라고 못 갔어 - Bận ngủ nên không đi được)",
      "• ㄴ/은 탓에: Đổ lỗi, trách móc → Kết quả TIÊU CỰC. (VD: 네 탓에 망했어 - Tại mày mà hỏng bét)",
      "• 는 통에: Hoàn cảnh ồn ào, hỗn loạn → Kết quả TIÊU CỰC. (VD: 애들이 우는 통에 깼어요 - Bọn trẻ khóc ầm ĩ nên bị tỉnh giấc)",
      "• 더니: Trải nghiệm trong quá khứ dẫn đến kết quả hiện tại. (VD: 매일 운동하더니 건강해졌어요 - Ngày nào cũng tập thể dục hèn chi giờ khỏe ra)",
      "• (으)ㄹ 테니까: Người nói đưa ra cam kết/phỏng đoán làm lý do, vế sau thường là mệnh lệnh. (VD: 내가 청소할 테니까 너는 설거지해라 - Tôi sẽ dọn nên bạn hãy rửa bát)",
      "⚠ 더니 có 3 nghĩa (tương phản / nguyên nhân / thứ tự) — khi đọc bài thi cần xác định nghĩa đang dùng trước khi chọn cấu trúc thay thế. (으)ㄹ 테니까 CHỈ dùng khi người nói đưa ra cam kết/phỏng đoán, không thay thế hoàn toàn (으)니까."
    ]
  },
  {
    id: "opposite", label: "Trái lại, ngược lại", grammarIds: [15, 148],
    nuances: ["• (으)ㄴ/는 반면에: So sánh 2 mặt đối lập. (VD: 동생은 키가 큰 반면에 나는 작다 - Em thì cao trái lại tôi thì lùn)"]
  },
  {
    id: "extent", label: "Đến mức, đến tận", grammarIds: [19, 26, 56, 139, 142, 143],
    nuances: [
      "• 만큼: Mức độ tương đương nhau. (VD: 하늘만큼 사랑해 - Yêu nhiều như bầu trời)",
      "• (으)ㄹ 정도로: Sự phóng đại. (VD: 배가 아플 정도로 웃었어요 - Cười đến mức đau bụng)",
      "• 도록: Đến tận khi / đến mức. (VD: 밤새도록 공부했어요 - Học đến tận thâu đêm)"
    ]
  },
  {
    id: "whenever", label: "Hễ, chỉ cần, mỗi khi", grammarIds: [103, 140, 158],
    nuances: [
      "• 마다: Gắn sau Danh từ. (VD: 주말마다 영화를 봐요 - Mỗi cuối tuần đều xem phim)",
      "• 기만 하면: Gắn sau Động từ, điều kiện xảy ra thì kết quả luôn đến. (VD: 그 노래를 듣기만 하면 눈물이 나요 - Cứ hễ nghe bài đó là khóc)"
    ]
  },
  {
    id: "state", label: "Trạng thái (vẫn, đang)", grammarIds: [21, 152, 180],
    nuances: ["• (으)ㄴ 채(로): Giữ nguyên trạng thái để làm việc khác. (VD: 안경을 쓴 채로 세수했어요 - Để nguyên kính mà rửa mặt)"]
  },
  {
    id: "addition", label: "Không những...mà còn", grammarIds: [22, 57, 149, 173, 191],
    nuances: [
      "• (으)ㄹ 뿐만 아니라: Không chỉ A mà còn B (tích lũy cùng chiều). (VD: 음식이 쌀 뿐만 아니라 종업원도 친절하다 - Không chỉ rẻ mà nhân viên còn tốt)",
      "• ㄴ/은 데다가: Thêm đặc điểm cùng chiều (Tốt+tốt, Xấu+xấu). Tự nhiên hơn 뿐만 아니라 trong văn nói. (VD: 예쁜 데다가 성격도 좋아요 - Đẹp mà còn tốt tính)",
      "• 거니와: Văn viết hoặc trang trọng. Thừa nhận vế trước và bổ sung vế sau cùng chiều. (VD: 맛도 있거니와 푸짐해요 - Không chỉ ngon mà còn đầy đặn)",
      "⚠ 은/는커녕 ĐÃ TÁCH RIÊNG: chiều nghĩa ngược lại (phủ định leo thang) → nhóm 'neg_escalation'"
    ]
  },
  {
    id: "neg_escalation", label: "Chẳng những không...mà còn không (phủ định leo thang)", grammarIds: [23, 184, 183],
    nuances: [
      "• 은/는커녕: Chẳng những không A mà đến B (cơ bản hơn) cũng không. Chiều nghĩa TIÊU CỰC, ngược hoàn toàn với 뿐만 아니라. (VD: 밥은커녕 물도 못 마셨어 - Cơm còn chả có huống hồ là nước)",
      "• Tương đương: 은/는 물론이고 (khi phủ định), 은/는 말할 것도 없고",
      "⚠ KHÔNG xếp cùng nhóm với 뿐만 아니라 / 데다가 vì chiều nghĩa ngược nhau."
    ]
  },
  {
    id: "concession", label: "Dù (nhượng bộ)", grammarIds: [24, 25, 32, 58, 87, 88, 116, 117, 118, 119],
    nuances: [
      "• 아/어/여도: 'Cho dù' cơ bản, dùng phổ biến nhất. (VD: 비가 와도 갈 거예요 - Dù mưa tôi vẫn đi)",
      "• 더라도: Giả định tình huống cực đoan hoặc khó xảy ra, mạnh hơn 아/어도. (VD: 지구가 멸망하더라도 - Dẫu trái đất có diệt vong)",
      "• (으)ㄹ지라도: Giống 더라도 nhưng trang trọng/văn viết. (VD: 실패할지라도 포기하지 마 - Dù có thất bại cũng đừng bỏ cuộc)",
      "• 아/어 봐야: Dù có cố thì cũng vô ích → kết quả tiêu cực. (VD: 지금 가 봐야 늦었어요 - Giờ có đi thì cũng trễ rồi)",
      "• (나) 마나: Làm cũng vô ích vì biết trước kết quả. (VD: 물어보나 마나 안 할 거예요 - Hỏi làm gì, dù gì nó cũng chả làm đâu)",
      "• 든지: 'Bất kể là gì / dù là thứ gì đi nữa'. Dùng khi không xác định cụ thể điều gì. (VD: 뭘 하든지 열심히 해라 - Dù làm gì thì cũng hãy làm hết sức)",
      "⚠ 든지 chỉ thay thế được 더라도 khi mang nghĩa 'bất kể điều gì'. Không thay thế 더라도 trong tình huống giả định cụ thể (VD: 지구가 멸망하더라도 ≠ 지구가 멸망하든지)."
    ]
  },
  {
    id: "inevitable", label: "Đương nhiên", grammarIds: [27, 59, 60],
    nuances: [
      "• 기 마련이다 / 는 법이다: Quy luật tự nhiên, chân lý. (VD: 겨울은 춥기 마련이에요 - Mùa đông thì đương nhiên là lạnh)",
      "• 게 돼 있다: Định mệnh, quy định đã thiết lập sẵn. (VD: 열심히 하면 성공하게 돼 있어요 - Cố gắng thì kiên quyết sẽ thành công)"
    ]
  },
  {
    id: "no_choice", label: "Đành phải, buộc phải", grammarIds: [28, 61, 176, 187],
    nuances: ["• (으)ㄹ 수밖에 없다 / 지 않을 수 없다: Không còn cách nào khác. (VD: 돈이 없어서 걸어갈 수밖에 없었어요 - Không có tiền đành phải đi bộ)"]
  },
  {
    id: "worry", label: "E rằng, lo lắng", grammarIds: [29, 145, 149, 188],
    nuances: ["• (으)ㄹ까 봐: Lo sợ vế trước nên ĐÃ phòng tránh ở vế sau. (VD: 비가 올까 봐 우산을 샀어요 - Sợ mưa nên đã mua ô)"]
  },
  {
    id: "immediate", label: "Ngay sau khi", grammarIds: [30, 62, 157, 173],
    nuances: [
      "• 자마자: Vừa làm xong A thì B diễn ra. (VD: 집에 도착하자마자 잤어요 - Vừa về đến nhà là ngủ luôn)",
      "• 기가 무섭게: Tốc độ phản xạ cực nhanh (nhanh hơn 자마자). (VD: 수업이 끝나기가 무섭게 나갔어요 - Lớp vừa tan là nó tót ra ngay)"
    ]
  },
  {
    id: "on_way", label: "Trên đường, tiện thể", grammarIds: [31],
    nuances: [
      "• 는 길에: Đang di chuyển (đi/đến/về) thì tiện thể làm việc khác. CHỈ dùng với động từ di chuyển. (VD: 집에 가는 길에 빵을 샀어요 - Trên đường về nhà tôi tiện mua bánh)",
      "⚠ 다가 ĐÃ TÁCH RIÊNG: hành động bị gián đoạn, dùng được với MỌI động từ → nhóm 'interrupted'"
    ]
  },
  {
    id: "interrupted", label: "Đang làm thì (bị gián đoạn)", grammarIds: [76],
    nuances: [
      "• 다가: Hành động vế 1 đang diễn ra thì bị ngắt hoặc chuyển hướng sang vế 2. Dùng được với MỌI loại động từ, không cần di chuyển. (VD: 공부하다가 잠이 들었어요 - Đang học thì ngủ gục; 집에 오다가 비를 맞았어요 - Đang về nhà thì bị mưa)",
      "⚠ KHÔNG hoán đổi được với 는 길에 trừ khi động từ vế 1 là động từ di chuyển VÀ không có ý gián đoạn."
    ]
  },
  {
    id: "only", label: "Chỉ (한정)", grammarIds: [33, 63, 170, 183],
    nuances: ["• 에 불과하다: 'Chẳng qua chỉ là', mức độ thấp (văn viết). (VD: 그것은 시작에 불과하다 - Đó mới chỉ là sự khởi đầu)"]
  },
  {
    id: "regret", label: "Hối tiếc", grammarIds: [34, 64, 93],
    nuances: [
      "• 었어야 했는데: Đáng lẽ phải làm (nhấn mạnh trách nhiệm). (VD: 일찍 일어났어야 했는데 - Đáng lẽ phải dậy sớm)",
      "• 지 말 걸 그랬다: Hối hận vì ĐÃ lỡ làm. (VD: 커피를 마시지 말 걸 그랬어 - Biết thế đã không uống cà phê)"
    ]
  },
  {
    id: "intention", label: "Định, chuẩn bị", grammarIds: [35, 73, 171],
    nuances: [
      "• (으)려던 참이다: Vừa nảy sinh ý định thì có tác động khớp luôn. (VD: 밥을 먹으려던 참이었어요 - Vừa tính đi ăn cơm thì cậu rủ)",
      "• (으)려고 하다: Kế hoạch mơ hồ, định làm. (VD: 내년에 유학을 가려고 해요 - Năm sau tôi định đi du học)"
    ]
  },
  {
    id: "according", label: "Theo như", grammarIds: [36, 186],
    nuances: ["• 는 대로: Làm y hệt vế trước. (VD: 선생님이 말하는 대로 하세요 - Hãy làm theo lời giáo viên)"]
  },
  {
    id: "depend", label: "Phụ thuộc vào", grammarIds: [37, 91, 159, 160],
    nuances: [
      "• 에 달려 있다: Phụ thuộc vào Danh từ (N). (VD: 성공은 노력에 달려 있다 - Thành công phụ thuộc vào nỗ lực)",
      "• 기 나름이다: Phụ thuộc vào cách làm (Động từ). (VD: 생각하기 나름이다 - Tùy thuộc vào cách suy nghĩ)"
    ]
  },
  {
    id: "pretend", label: "Giả vờ", grammarIds: [38, 70, 151],
    nuances: ["• 체하다: Giống 척하다 nhưng hay dùng trong văn chương. (VD: 아는 체했어요 - Đã giả vờ biết)"]
  },
  {
    id: "result_of", label: "Cứ...thì (kết quả)", grammarIds: [39],
    nuances: ["• 다가 보니까: Lặp lại hành động liên tục thì nhận ra kết quả. (VD: 매일 먹다가 보니까 살이 쪘어요 - Ngày nào cũng ăn riết rồi mập lên)"]
  },
  {
    id: "like_as", label: "Như, như thể", grammarIds: [40, 65, 163, 164, 165],
    nuances: ["• 마치 ... 것처럼/듯이: Giống hệt nhau. (VD: 마치 꿈을 꾸는 것처럼 - Giống hệt như đang mơ)"]
  },
  {
    id: "also", label: "Vừa, cũng", grammarIds: [41],
    nuances: ["• 기도 하고: Liệt kê hai đặc điểm bổ sung cho nhau. (VD: 예쁘기도 하고 착하기도 해요 - Vừa xinh lại vừa ngoan)"]
  },
  {
    id: "obvious", label: "Chắc chắn, rõ ràng", grammarIds: [42, 66, 134, 136],
    nuances: [
      "• 을 게 뻔하다: Dễ đoán trước, thường là kết quả tiêu cực. (VD: 또 지각할 게 뻔해요 - Chắc chắn lại trễ cho xem)",
      "• 분명하다: Khẳng định chắc chắn (cả tốt lẫn xấu). (VD: 범인인 것이 분명하다 - Chắc chắn là hung thủ)"
    ]
  },
  {
    id: "dual", label: "Vừa là...vừa là", grammarIds: [43, 67],
    nuances: [
      "• 이자 / 인 동시에: 2 đặc điểm tồn tại song song (AND). (VD: 친구이자 선생님이에요 - Vừa là bạn vừa là thầy)"
    ]
  },
  {
    id: "likely", label: "Dễ bị, dễ xảy ra", grammarIds: [44, 68, 156],
    nuances: ["• 기 십상이다: 8, 9 phần 10 sẽ xảy ra (thường chỉ kết quả xấu/lỗi lầm). (VD: 감기에 걸리기 십상이다 - Rất dễ bị cảm)"]
  },
  {
    id: "prepared", label: "Sẵn", grammarIds: [45],
    nuances: ["• 아/어 놓다: Làm xong hành động và duy trì kết quả. (VD: 문을 열어 놓았어요 - Đã mở sẵn cửa)"]
  },
  {
    id: "sequence", label: "Thứ tự, sau đó", grammarIds: [46, 75, 132, 153],
    nuances: ["• 고 나서: Nhấn mạnh hoàn tất triệt để vế 1 rồi mới làm vế 2. (VD: 숙제를 하고 나서 놀아요 - Làm xong hẳn bài tập rồi mới chơi)"]
  },
  {
    id: "while_time", label: "Trong lúc, trong khi", grammarIds: [102, 106, 107],
    nuances: [
      "• 는 동안: Vế 1 và 2 song song diễn ra. Chủ ngữ 2 vế CÓ THỂ khác nhau. (VD: 내가 자는 동안 비가 왔어요 - Trong lúc tôi ngủ thì trời mưa)"
    ]
  },
  {
    id: "since_time", label: "Kể từ khi...được bao lâu", grammarIds: [77],
    nuances: [
      "• (으)ㄴ 지 되다: Đã bao lâu kể từ khi... (VD: 한국에 온 지 1년이 됐어요 - Tôi đến Hàn Quốc được 1 năm rồi)"
    ]
  },
  {
    id: "change_result", label: "Trở nên, được (kết quả do ngoại cảnh)", grammarIds: [100],
    nuances: [
      "• 게 되다: Kết quả đạt được do yếu tố bên ngoài tác động, người nói không hoàn toàn chủ động. Nhấn mạnh ĐIỂM ĐẾN, không diễn tả quá trình. (VD: 김치를 먹게 됐어요 - Tôi đã ăn được Kimchi rồi; 한국 회사에 취직하게 됐어요 - Tôi được nhận vào làm công ty Hàn)",
      "⚠ KHÔNG dùng 게 되다 để diễn tả quá trình đang xảy ra. KHÔNG hoán đổi với 아/어 가다."
    ]
  },
  {
    id: "change_process", label: "Dần dần (quá trình tiếp diễn)", grammarIds: [78],
    nuances: [
      "• 아/어 가다: Sự thay đổi đang diễn ra từ từ, hướng về tương lai. Nhấn mạnh QUÁ TRÌNH, không phải điểm đến. (VD: 일이 다 끝나 가요 - Công việc đang dần xong rồi; 날씨가 따뜻해져 가요 - Thời tiết đang dần ấm lên)",
      "⚠ KHÔNG hoán đổi với 게 되다. Cặp đối xứng là 아/어 오다 (quá trình từ quá khứ đến hiện tại)."
    ]
  },
  {
    id: "completion", label: "Hoàn tất (mất rồi)", grammarIds: [79, 154],
    nuances: ["• 아/어 버리다: Kết thúc triệt để (Cảm xúc: Nhẹ nhõm hoặc Tiếc nuối). (VD: 다 먹어 버렸어요 - Tôi lỡ ăn sạch hết rồi)"]
  },
  {
    id: "condition", label: "Giả định, điều kiện (Nếu)", grammarIds: [83, 84, 85, 86, 5, 121],
    nuances: [
      "• (으)면: Giả định thông thường, dễ xảy ra. (VD: 비가 오면 집에 있을 거예요 - Nếu mưa thì tôi sẽ ở nhà)",
      "• 다면: Giả định điều khó/không thể xảy ra trong thực tế. Thường đi với 을 텐데/겠지. (VD: 내가 새라면 날아갈 텐데 - Nếu tôi là chim thì tôi sẽ bay đi)",
      "• 고 싶으면: Nếu muốn làm gì → vế sau là lời khuyên/mệnh lệnh. (VD: 시험에 합격하고 싶으면 열심히 공부해라)",
      "• (으)려면: Nếu muốn đạt mục tiêu → vế sau PHẢI là mệnh lệnh/lời khuyên. Tương đương 고 싶으면. (VD: 합격하려면 공부하세요 - Muốn đậu thì hãy học đi)",
      "⚠ 거든(요) ĐÃ TÁCH RIÊNG: cú pháp và chức năng hoàn toàn khác → nhóm 'geodeun'"
    ]
  },
  {
    id: "geodeun", label: "거든 — Điều kiện (mệnh lệnh) / Giải thích lý do", grammarIds: [84],
    nuances: [
      "• 거든 (GIỮA CÂU — điều kiện): Vế sau BẮT BUỘC là mệnh lệnh hoặc rủ rê. Không thể thay bằng 다면. (VD: 바쁘거든 나중에 연락하세요 - Nếu bận thì lát hãy liên lạc)",
      "• 거든요 (CUỐI CÂU — giải thích): Cung cấp lý do/thông tin mới mà người nghe chưa biết. Hoàn toàn khác chức năng với vế trên. (VD: 저 오늘 못 가요. 약속이 있거든요 - Hôm nay tôi không đi được. Vì tôi có hẹn rồi)",
      "⚠ Hai cách dùng của 거든 KHÔNG thể hoán đổi cho nhau. 거든 (giữa câu) mang nghĩa điều kiện nhưng bắt buộc đi kèm mệnh lệnh hoặc rủ rê. 거든요 (cuối câu) không thuộc bất kỳ nhóm đồng nghĩa nào khác."
    ]
  },
  {
    id: "progression", label: "Càng...càng", grammarIds: [90],
    nuances: ["• (으)ㄹ수록: Thường đi kèm (으)면 ở trước. (VD: 갈수록 더 예뻐져요 - Càng ngày càng đẹp ra)"]
  },
  {
    id: "almost", label: "Suýt nữa thì", grammarIds: [94],
    nuances: ["• (으)ㄹ 뻔하다: Việc xấu suýt xảy ra nhưng CHƯA XẢY RA (Luôn dùng quá khứ). (VD: 넘어질 뻔했어요 - Suýt nữa thì té)"]
  },
  {
    id: "experience", label: "Kinh nghiệm", grammarIds: [95],
    nuances: ["• (으)ㄴ 적이 있다: Từng làm gì đó trong quá khứ. (VD: 한국에 간 적이 있어요 - Tôi từng đi Hàn Quốc)"]
  },
  {
    id: "habit", label: "Thói quen", grammarIds: [96],
    nuances: ["• 곤 하다: Thói quen lặp đi lặp lại. (VD: 주말에 등산을 하곤 해요 - Cuối tuần tôi thường đi leo núi)"]
  },
  {
    id: "tendency", label: "Khuynh hướng", grammarIds: [97],
    nuances: ["• 는 편이다: Đánh giá nghiêng về một phía (thuộc dạng...). (VD: 매운 음식을 잘 먹는 편이에요 - Tôi thuộc dạng ăn cay giỏi)"]
  },
  {
    id: "wish", label: "Mong ước (Ước gì)", grammarIds: [98],
    nuances: ["• (으)면 좋겠다: Hay đi cùng quá khứ ở trước (았/었/였으면). (VD: 합격했으면 좋겠어요 - Ước gì tôi thi đậu)"]
  },
  {
    id: "alternative", label: "Thay thế", grammarIds: [99],
    nuances: ["• 는 대신(에): Thay thế hoặc bù trừ. (VD: 얼굴이 안 예쁜 대신에 똑똑해요 - Dù không đẹp nhưng bù lại rất thông minh)"]
  },
  {
    id: "obligation", label: "Bắt buộc", grammarIds: [101, 175],
    nuances: ["• 아/어야 하다: Nghĩa vụ phải làm. (VD: 내일 일찍 일어나야 해요 - Ngày mai phải dậy sớm)"]
  },
  {
    id: "choice", label: "Lựa chọn (Hoặc)", grammarIds: [89],
    nuances: ["• 거나: Lựa chọn 1 trong 2 khả năng (OR). (VD: 책을 읽거나 영화를 봐요 - Đọc sách hoặc xem phim)"]
  }
  ,
  {
    id: "opportune", label: "Nhân tiện (tiện thể đang làm)", grammarIds: [105, 137],
    nuances: [
      "• 는 김에: Nhân cơ hội đang làm A thì tiện làm thêm B. Dùng được với MỌI động từ (không chỉ di chuyển). (VD: 마트에 가는 김에 세제도 사 와요 - Nhân tiện đang đi siêu thị thì mua luôn nước giặt)",
      "⚠ Khác 는 길에 (ID 31): 는 길에 chỉ dùng với động từ di chuyển (가다/오다); 는 김에 dùng được với bất kỳ hành động nào đang diễn ra"
    ]
  },
  {
    id: "future_result", label: "Cứ làm liên tục thì sẽ (kết quả tương lai)", grammarIds: [108, 161, 167],
    nuances: [
      "• 다가보면 / 다 보면: Lặp lại hành động liên tục → kết quả sẽ thay đổi ở TƯƠNG LAI. (VD: 포기하지 않고 계속 연습하다 보면 언젠가는 잘하게 될 거예요 - Cứ kiên trì luyện tập thì rồi sẽ giỏi thôi)",
      "⚠ Khác 다가 보니까 (nhóm result_of, ID 39): 다가 보니까 = kết quả đã nhận ra ở hiện tại/quá khứ; 다가보면 = kết quả sẽ xảy ra ở tương lai"
    ]
  },
  {
    id: "preference", label: "Thà...còn hơn (chọn lựa ưu tiên)", grammarIds: [109, 141, 162],
    nuances: [
      "• (으)ㄹ 바에야: Thà làm B còn hơn phải làm A. Vế trước là điều không muốn; vế sau thường có 차라리. (VD: 그 사람에게 부탁할 바에야 차라리 혼자 하는 게 낫겠어요 - Thà tự làm một mình còn hơn nhờ người đó)",
      "• 느니 (차라리): Tương tự nhưng mang sắc thái chán nản/bất mãn mạnh hơn. (VD: 이렇게 사느니 차라리 - Thà rằng còn hơn sống như thế này)",
      "⚠ Cả hai đều có chiều nghĩa: A (không muốn) → thà B (dù B cũng không lý tưởng). Vế sau thường có 차라리, 그냥, 낫다"
    ]
  },
  {
    id: "no_need", label: "Không cần nói / Không thể hơn được", grammarIds: [111, 144, 172],
    nuances: [
      "• (으)ㄹ 나위가 없다: Diễn đạt mức độ hoàn hảo đến mức không cần nói thêm. Hay xuất hiện dưới 2 dạng cố định: 더할 나위가 없다 (không thể tốt hơn được nữa) và 말할 나위가 없다 (không cần phải nói). (VD: 이번 여행은 더 말할 나위가 없이 즐거웠어요 - Chuyến đi lần này vui đến mức không cần phải nói thêm gì nữa)",
      "⚠ Hay xuất hiện trong đề thi dạng điền vào chỗ trống hoặc tìm câu có nghĩa tương đương với 말할 것도 없다 / (으)ㄹ 필요도 없다"
    ]
  },
  {
    id: "guess_concern", label: "Phỏng đoán kèm cảm xúc (lo lắng / tiếc nuối / quan tâm)", grammarIds: [113, 133, 135],
    nuances: [
      "• (으)ㄹ 텐데: Phỏng đoán về tình huống + ngụ ý cảm xúc của người nói (lo lắng, tiếc nuối, quan tâm). (VD: 지금쯤 배가 고플 텐데 밥은 먹었어요? - Giờ này chắc đói rồi, ăn cơm chưa?)",
      "• Cũng dùng để đưa ra bối cảnh lịch sự trước khi nhờ vả/cảm ơn: 바쁘실 텐데 와 주셔서 감사합니다 (Dù chắc bận mà vẫn đến, cảm ơn)",
      "⚠ Khác 것 같다 (phỏng đoán đơn thuần, trung tính): 텐데 luôn ngụ ý người nói có phản ứng cảm xúc với tình huống đó. Không thể thay 텐데 bằng 것 같다 khi câu hỏi đi kèm chăm sóc/quan tâm"
    ]
  }

];

// ===== DỮ LIỆU NGỮ PHÁP =====
const grammarData = [
  // === 1-6: Đã có ===
  {
    id: 1, grammar: "(으)ㄴ/는 것 같다",
    senses: [{ meaning: "hình như, có vẻ như, chắc là", groupId: "guess" }],
    synonymPatterns: ["는 듯하다", "나 보다", "는 모양이다"],
    examples: [
      { sentence: "집 옮기는 소리가 나는 걸 보니까 옆집이 이사를 <b>가는 것 같다</b>.", translation: "Nghe tiếng chuyển đồ, hình như nhà bên đang dọn nhà." },
      { sentence: "집 옮기는 소리가 나는 걸 보니까 옆집이 이사를 <b>가는 듯하다</b>.", translation: "Nghe tiếng chuyển đồ, có vẻ như nhà bên đang dọn nhà." },
      { sentence: "집 옮기는 소리가 나는 걸 보니까 옆집이 이사를 <b>가나 보다</b>.", translation: "Nghe tiếng chuyển đồ, chắc là nhà bên đang dọn nhà." },
      { sentence: "집 옮기는 소리가 나는 걸 보니까 옆집이 이사를 <b>가는 모양이다</b>.", translation: "Nghe tiếng chuyển đồ, có lẽ nhà bên đang dọn nhà." }
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
      { sentence: "친구가 기분 좋은 일이 있는지 기분이 <b>좋아 보였다</b>.", translation: "Bạn tôi trông có vẻ vui, chắc là có chuyện gì tốt." },
      { sentence: "친구가 기분 좋은 일이 있는지 기분이 <b>좋은 것 같았다</b>.", translation: "Bạn tôi có vẻ đang vui, chắc là có chuyện gì đó tốt lành." }
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
      { sentence: "금요일이 장학금 신청일이라서 <b>잊어버리지 않게</b> 달력에 표시해 두었다.", translation: "Vì thứ 6 là ngày đăng ký học bổng nên tôi đã đánh dấu vào lịch để không quên." },
      { sentence: "금요일이 장학금 신청일이라서 <b>잊어버리지 않도록</b> 달력에 표시해 두었다.", translation: "Vì thứ 6 là ngày đăng ký học bổng nên tôi đã đánh dấu vào lịch để không bị quên." }
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
      { sentence: "요즘 살을 <b>빼기 위해서</b> 열심히 운동을 하고 있다.", translation: "Dạo này tôi đang chăm chỉ tập thể dục để giảm cân." },
      { sentence: "요즘 살을 <b>빼려고</b> 열심히 운동을 하고 있다.", translation: "Dạo này tôi đang chăm chỉ tập thể dục vì định giảm cân." }
    ], notes: "",
    ownExamples: [
      { sentence: "요즘 살을 <b>빼기 위해서</b> 열심히 운동을 하고 있다.", translation: "Dạo này tôi đang chăm chỉ tập thể dục để giảm cân." }
    ]
  },
  {
    id: 5, grammar: "(으)려면",
    senses: [{ meaning: "nếu muốn... thì (điều kiện mục tiêu)", groupId: "condition" }],
    synonymPatterns: ["기 위해서는"],
    examples: [
      { sentence: "외국에서 생활을 <b>잘하려면</b> 그 나라의 문화를 이해하는 게 중요하다.", translation: "Để sống tốt ở nước ngoài, việc hiểu văn hóa nước đó là rất quan trọng." },
      { sentence: "외국에서 생활을 <b>잘하기 위해서는</b> 그 나라의 문화를 이해하는 게 중요하다.", translation: "Để sống tốt ở nước ngoài, việc hiểu văn hóa nước đó là rất quan trọng." }
    ], notes: "",
    ownExamples: [
      { sentence: "외국에서 생활을 <b>잘하려면</b> 그 나라의 문화를 이해하는 게 중요하다.", translation: "Để sống tốt ở nước ngoài, việc hiểu văn hóa nước đó là rất quan trọng." }
    ]
  },
  {
    id: 6, grammar: "(으)면서(도)",
    senses: [{ meaning: "nhưng", groupId: "contrast" }],
    synonymPatterns: ["고서도"],
    examples: [
      { sentence: "친구가 곤란할까 봐 그 사실을 <b>알면서</b> 모른 척했다.", translation: "Sợ bạn gặp khó, dù biết chuyện đó nhưng tôi giả vờ không biết." },
      { sentence: "친구가 곤란할까 봐 그 사실을 <b>알고서도</b> 모른 척했다.", translation: "Vì sợ bạn bị khó xử nên dù biết rõ sự thật tôi vẫn giả vờ không hay biết." }
    ], notes: "",
    ownExamples: [
      { sentence: "친구가 곤란할까 봐 그 사실을 <b>알면서</b> 모른 척했다.", translation: "Sợ bạn gặp khó, dù biết chuyện đó nhưng tôi giả vờ không biết." }
    ]
  },

  // === 7-21: MỚI THÊM ===
  {
    id: 7, grammar: "(으)ㄹ지도 모르다",
    senses: [{ meaning: "có lẽ, ko biết chừng", groupId: "guess" }],
    synonymPatterns: ["(으)ㄹ 수도 있다"],
    examples: [
      { sentence: "예상보다 손님이 많이 와서 준비한 음식이 <b>부족할지도 모른다</b>.", translation: "Khách đến nhiều hơn dự kiến nên không chừng thức ăn chuẩn bị sẽ không đủ." },
      { sentence: "예상보다 손님이 많이 와서 준비한 음식이 <b>부족할 수도 있다</b>.", translation: "Khách đến nhiều hơn dự kiến nên có thể thức ăn chuẩn bị sẽ không đủ." }
    ], notes: ""
  },
  {
    id: 8, grammar: "(으)ㄹ 리가 없다",
    senses: [{ meaning: "không có lý gì mà, không thể nào", groupId: "impossible" }],
    synonymPatterns: ["지 않았을 것이다", "(으)ㄹ 리 만무하다", "(으)ㄹ 턱이 없다"],
    examples: [
      { sentence: "그는 정직하기 때문에 거짓말을 <b>했을 리가 없다</b>.", translation: "Vì anh ấy thành thật nên không có lý nào lại nói dối cả." },
      { sentence: "그는 정직하기 때문에 거짓말을 <b>하지 않았을 것이다</b>.", translation: "Vì anh ấy thành thật nên chắc đã không nói dối đâu." }
    ], notes: ""
  },
  {
    id: 9, grammar: "(으)ㄹ 만하다",
    senses: [{ meaning: "giá trị, đáng để làm", groupId: "worthy" }],
    synonymPatterns: ["(으)ㄹ 가치가 있다"],
    examples: [
      { sentence: "서울 근교에는 가족들과 함께 즐겁게 <b>놀 만한</b> 곳이 많이 있다.", translation: "Vùng ngoại ô Seoul có nhiều nơi đáng đến để vui chơi cùng gia đình." },
      { sentence: "서울 근교에는 가족들과 함께 즐겁게 <b>놀 수 있는</b> 곳이 많이 있다.", translation: "Vùng ngoại ô Seoul có nhiều nơi có thể vui chơi cùng gia đình." }
    ], notes: ""
  },
  {
    id: 10, grammar: "(으)ㄴ/는 셈이다",
    senses: [{ meaning: "giống như, xem như, coi như", groupId: "consider_as" }],
    synonymPatterns: ["거나 같다", "거나 마찬가지이다", "거나 다름없다"],
    examples: [
      { sentence: "오늘이 벌써 12월 말이니까 올해도 다 <b>지나간 셈이다</b>.", translation: "Hôm nay đã là cuối tháng 12 rồi, coi như năm nay cũng đã trôi qua hết." },
      { sentence: "오늘이 벌써 12월 말이니까 올해도 다 <b>지나간 거나 같다</b>.", translation: "Hôm nay đã là cuối tháng 12, cũng như năm nay đã trôi qua hết vậy." },
      { sentence: "오늘이 벌써 12월 말이니까 올해도 다 <b>지나간 거나 마찬가지이다</b>.", translation: "Hôm nay đã là cuối tháng 12, coi như năm nay cũng đã qua hết." },
      { sentence: "오늘이 벌써 12월 말이니까 올해도 다 <b>지나간 거나 다름없다</b>.", translation: "Hôm nay đã là cuối tháng 12, không khác gì năm nay đã trôi qua hết." }
    ], notes: ""
  },
  {
    id: 11, grammar: "(으)ㄴ/는 줄 몰랐다",
    senses: [{ meaning: "không ngờ rằng", groupId: "unexpected" }],
    synonymPatterns: ["다고 생각했다"],
    examples: [
      { sentence: "나는 지난주에 모임이 있어서 이번 주 모임은 <b>있는 줄 몰랐다</b>.", translation: "Tôi đã có cuộc họp tuần trước nên không ngờ tuần này lại còn có cuộc họp nữa." },
      { sentence: "나는 지난주에 모임이 있어서 이번 주 모임은 <b>없다고 생각했다</b>.", translation: "Tôi đã có cuộc họp tuần trước nên nghĩ là tuần này không có." }
    ], notes: ""
  },
  {
    id: 12, grammar: "는 바람에",
    senses: [{ meaning: "vì, tại vì", groupId: "reason" }],
    synonymPatterns: ["는 통에", "어서/아서", "느라고", "ㄴ/은 탓에"],
    examples: [
      { sentence: "사람들이 하도 <b>떠드는 바람에</b> 친구하고 대화를 할 수가 없었다.", translation: "Mọi người ồn ào quá nên không thể nói chuyện với bạn được." },
      { sentence: "사람들이 하도 <b>떠드는 통에</b> 친구하고 대화를 할 수가 없었다.", translation: "Mọi người ồn ào hỗn loạn khiến không thể nói chuyện với bạn." },
      { sentence: "사람들이 하도 <b>떠들어서</b> 친구하고 대화를 할 수가 없었다.", translation: "Vì mọi người ồn ào quá nên không thể nói chuyện với bạn." },
      { sentence: "서둘러 <b>나오는 바람에</b> 지갑을 안 가지고 나왔다.", translation: "Vì vội vàng ra ngoài nên đã không mang theo ví." },
      { sentence: "서둘러 <b>나오느라고</b> 지갑을 안 가지고 나왔다.", translation: "Vì bận vội ra ngoài nên đã không mang theo ví." },
      { sentence: "서둘러 <b>나온 탓에</b> 지갑을 안 가지고 나왔다.", translation: "Tại vì vội vàng ra ngoài nên đã quên mang ví." }
    ], notes: "chỉ dùng cho kết quả tiêu cực"
  },
  {
    id: 13, grammar: "ㄴ/는다기에/길래",
    senses: [{ meaning: "vì nói là, vì bảo là", groupId: "reason" }],
    synonymPatterns: ["다기에", "다길래"],
    examples: [
      { sentence: "눈이 피곤할 때 먼 곳을 쳐다보면 효과가 <b>있다기에</b> 해 보는 중이다.", translation: "Nghe bảo khi mắt mỏi mà nhìn xa thì có tác dụng nên đang thử xem." },
      { sentence: "눈이 피곤할 때 먼 곳을 쳐다보면 효과가 <b>있다길래</b> 해 보는 중이다.", translation: "Nghe nói khi mắt mỏi nhìn ra xa thì có tác dụng nên đang thử xem." }
    ], notes: ""
  },
  {
    id: 14, grammar: "(으)ㄴ 나머지",
    senses: [{ meaning: "do...nên", groupId: "reason" }],
    synonymPatterns: ["ㄴ/은 탓에"],
    examples: [
      { sentence: "나는 그림 작업에 <b>집중한 나머지</b> 중요한 전화를 받지 못했다.", translation: "Vì tập trung vào công việc vẽ quá mức nên tôi đã bỏ lỡ cuộc gọi quan trọng." },
      { sentence: "나는 그림 작업에 <b>집중한 탓에</b> 중요한 전화를 받지 못했다.", translation: "Tại vì tập trung vào công việc vẽ nên đã bỏ lỡ cuộc gọi quan trọng." }
    ], notes: ""
  },
  {
    id: 15, grammar: "(으)ㄴ/는 반면에",
    senses: [{ meaning: "trái lại, ngược lại", groupId: "opposite" }],
    synonymPatterns: ["ㄴ/은 데 반해"],
    examples: [
      { sentence: "이 제품은 열에 <b>강한 반면에</b> 습기에는 약하다.", translation: "Sản phẩm này chịu nhiệt tốt, ngược lại lại yếu với độ ẩm." },
      { sentence: "이 제품은 열에 <b>강한 데 반해</b> 습기에는 약하다.", translation: "Sản phẩm này chịu nhiệt tốt, trái lại lại yếu với độ ẩm." }
    ], notes: ""
  },
  {
    id: 16, grammar: "(으)ㄴ/는데도",
    senses: [{ meaning: "dù ...nhưng", groupId: "contrast" }],
    synonymPatterns: ["지만"],
    examples: [
      { sentence: "나는 공부를 열심히 <b>하는데도</b> 성적이 잘 오르지 않는다.", translation: "Dù tôi học chăm chỉ nhưng điểm vẫn không tăng." },
      { sentence: "나는 공부를 열심히 <b>하지만</b> 성적이 잘 오르지 않는다.", translation: "Tôi học chăm chỉ nhưng điểm vẫn không tăng." }
    ], notes: ""
  },
  {
    id: 17, grammar: "(으)ㄴ/는가 하면",
    senses: [{ meaning: "cũng ...nhưng", groupId: "contrast" }],
    synonymPatterns: ["기는 하지만"],
    examples: [
      { sentence: "이 영화는 재미있는 부분이 <b>있는가 하면</b> 지루한 부분도 꽤 있다.", translation: "Bộ phim này có những đoạn thú vị, đồng thời cũng có khá nhiều đoạn nhàm chán." },
      { sentence: "이 영화는 재미있는 부분이 <b>있기는 하지만</b> 지루한 부분도 꽤 있다.", translation: "Bộ phim này tuy có những đoạn thú vị nhưng cũng có khá nhiều đoạn nhàm chán." }
    ], notes: ""
  },
  {
    id: 18, grammar: "고도",
    senses: [{ meaning: "dù ...nhưng", groupId: "contrast" }],
    synonymPatterns: ["었는데도"],
    examples: [
      { sentence: "스마트폰이 복잡해서 그런지 어머니가 설명을 <b>듣고도</b> 모르겠다고 하셨다.", translation: "Có lẽ vì điện thoại thông minh phức tạp nên mẹ bảo dù nghe giải thích vẫn không hiểu." },
      { sentence: "스마트폰이 복잡해서 그런지 어머니가 설명을 <b>들었는데도</b> 모르겠다고 하셨다.", translation: "Có lẽ vì điện thoại thông minh phức tạp, dù mẹ đã nghe giải thích rồi vẫn bảo không hiểu." }
    ], notes: ""
  },
  {
    id: 19, grammar: "도록",
    senses: [
      { meaning: "đến tận", groupId: "extent" },
      { meaning: "để (mục đích)", groupId: "purpose" },
      { meaning: "để cho (sai khiến 사동적)", groupId: "purpose" }
    ],
    synonymPatterns: ["(으)ㄹ 때까지"],
    examples: [
      { sentence: "아이는 날이 <b>어두워지도록</b> 아무 연락도 없었다.", translation: "Đứa bé cho đến tận khi trời tối vẫn không có tin tức gì." },
      { sentence: "아이는 날이 <b>어두워질 때까지</b> 아무 연락도 없었다.", translation: "Đứa bé cho đến khi trời tối cũng không có tin tức gì." }
    ], notes: "Có 3 nghĩa: (1) 'đến tận / đến mức' (VD: 밤새도록 - suốt đêm); (2) 'để' - mục đích (VD: 잊지 않도록 메모해요); (3) 'để cho' - sai khiến, khiến ai đó làm gì (VD: 학생들이 조용히 하도록 했다 - Tôi đã khiến học sinh giữ im lặng)"
  },

  {
    id: 21, grammar: "(으)ㄴ 채(로)",
    senses: [{ meaning: "trong khi, vẫn, đang", groupId: "state" }],
    synonymPatterns: ["고"],
    examples: [
      { sentence: "저기 우산을 <b>쓴 채</b> 서 있는 사람이 오늘 소개할 사람이다.", translation: "Người đang đứng kia đang che ô chính là người tôi sẽ giới thiệu hôm nay." },
      { sentence: "저기 우산을 <b>쓰고</b> 서 있는 사람이 오늘 소개할 사람이다.", translation: "Người đang đứng kia đang cầm ô chính là người tôi sẽ giới thiệu hôm nay." }
    ], notes: ""
  },

  // === 22-33 ===
  {
    id: 22, grammar: "(으)ㄹ 뿐만 아니라",
    senses: [{ meaning: "không những...mà còn", groupId: "addition" }],
    synonymPatterns: ["ㄴ/은 데다가", "것은 물론이고", "거니와"],
    examples: [
      { sentence: "이 식당은 음식 값이 <b>쌀 뿐만 아니라</b> 종업원도 아주 친절하다.", translation: "Nhà hàng này không chỉ giá cả phải chăng mà nhân viên cũng rất thân thiện." },
      { sentence: "이 식당은 음식 값이 <b>싼 데다가</b> 종업원도 아주 친절하다.", translation: "Nhà hàng này giá rẻ mà nhân viên lại còn rất thân thiện." },
      { sentence: "이 식당은 음식 값이 <b>싼 것은 물론이고</b> 종업원도 아주 친절하다.", translation: "Nhà hàng này giá rẻ là đương nhiên rồi, nhân viên cũng rất thân thiện." }
    ], notes: ""
  },
  {
    id: 23, grammar: "은/는커녕",
    senses: [{ meaning: "chẳng những không...mà đến (cái cơ bản) cũng không (phủ định leo thang)", groupId: "neg_escalation" }],
    synonymPatterns: ["은/는 물론이고", "은/는 말할 것도 없고"],
    examples: [
      { sentence: "목이 너무 아파서 <b>밥은커녕</b> 물조차 못 마신다.", translation: "Đau họng quá, cơm chẳng nói, đến nước cũng không uống được." },
      { sentence: "목이 너무 아파서 <b>밥은 물론이고</b> 물조차 못 마신다.", translation: "Đau họng quá, cơm đương nhiên rồi, đến nước cũng không uống được." },
      { sentence: "목이 너무 아파서 <b>밥은 말할 것도 없고</b> 물조차 못 마신다.", translation: "Đau họng quá, cơm khỏi nói, đến nước cũng không uống được." }
    ], notes: ""
  },
  {
    id: 24, grammar: "(나) 마나",
    senses: [{ meaning: "làm gì cũng vô ích, dù...", groupId: "concession" }],
    synonymPatterns: ["어/아 봤자", "것도 없이"],
    examples: [
      { sentence: "<b>물어보나 마나</b> 동생은 집에 있다고 할 것이다.", translation: "Hỏi làm gì, chắc chắn em sẽ nói là đang ở nhà." },
      { sentence: "<b>물어봤자</b> 동생은 집에 있다고 할 것이다.", translation: "Dù có hỏi thì em cũng sẽ nói là đang ở nhà thôi." },
      { sentence: "<b>물어볼 것도 없이</b> 동생은 집에 있다고 할 것이다.", translation: "Chẳng cần hỏi, em chắc chắn sẽ nói là đang ở nhà." }
    ], notes: ""
  },
  {
    id: 25, grammar: "든지",
    senses: [{ meaning: "dù...", groupId: "concession" }],
    synonymPatterns: ["더라도"],
    examples: [
      { sentence: "저 사람과 같이 일한다면 뭘 <b>하든지</b> 열심히 하는 사람이면 좋겠다.", translation: "Nếu làm việc cùng người đó thì muốn họ là người dù làm gì cũng hết lòng." },
      { sentence: "저 사람과 같이 일한다면 뭘 <b>하더라도</b> 열심히 하는 사람이면 좋겠다.", translation: "Nếu làm việc cùng người đó thì muốn họ là người dù làm gì cũng nỗ lực hết mình." }
    ], notes: ""
  },
  {
    id: 26, grammar: "(으)ㄹ 정도로",
    senses: [{ meaning: "đến mức", groupId: "extent" }],
    synonymPatterns: ["만큼", "게", "(으)ㄹ 지경으로"],
    examples: [
      { sentence: "친구를 얼마 전에 만났는데 <b>몰라볼 정도로</b> 살이 많이 빠져 있었다.", translation: "Gặp lại bạn không lâu trước, thấy gầy đến mức không nhận ra." },
      { sentence: "친구를 얼마 전에 만났는데 <b>몰라볼 만큼</b> 살이 많이 빠져 있었다.", translation: "Gặp lại bạn không lâu trước, gầy đến mức không nhận ra." },
      { sentence: "친구를 얼마 전에 만났는데 <b>몰라보게</b> 살이 많이 빠져 있었다.", translation: "Gặp lại bạn không lâu trước, thấy gầy đến mức không nhận ra được." }
    ], notes: ""
  },
  {
    id: 27, grammar: "기 마련이다",
    senses: [{ meaning: "đương nhiên", groupId: "inevitable" }],
    synonymPatterns: ["는 법이다", "게 돼 있다"],
    examples: [
      { sentence: "물건이 오래되면 사용하지 않아도 <b>낡기 마련이다</b>.", translation: "Đồ vật để lâu thì đương nhiên sẽ cũ đi dù không dùng." },
      { sentence: "물건이 오래되면 사용하지 않아도 <b>낡는 법이다</b>.", translation: "Đồ vật để lâu thì theo lẽ thường sẽ cũ dù không dùng." },
      { sentence: "물건이 오래되면 사용하지 않아도 <b>낡게 돼 있다</b>.", translation: "Đồ vật để lâu thì nhất định sẽ cũ dù không dùng." }
    ], notes: ""
  },
  {
    id: 28, grammar: "(으)ㄹ 수밖에 없다",
    senses: [{ meaning: "đành phải, chỉ còn cách", groupId: "no_choice" }],
    synonymPatterns: ["아/어야만 했다", "지 않을 수 없었다"],
    examples: [
      { sentence: "열이 너무 심하게 나서 병원에 <b>가야만 했다</b>.", translation: "Sốt quá nặng nên đã phải đến bệnh viện." },
      { sentence: "열이 너무 심하게 나서 병원에 <b>가지 않을 수 없었다</b>.", translation: "Sốt quá nặng, không thể không đến bệnh viện." },
      { sentence: "열이 너무 심하게 나서 병원에 <b>갈 수밖에 없었다</b>.", translation: "Sốt quá nặng nên đành phải đến bệnh viện." }
    ], notes: ""
  },
  {
    id: 29, grammar: "(으)ㄹ까 봐(서)",
    senses: [{ meaning: "e rằng, có lẽ sẽ", groupId: "worry" }],
    synonymPatterns: ["것 같아서", "지도 몰라서", "(으)ㄹ세라"],
    examples: [
      { sentence: "처음 자전거를 배울 때 <b>넘어질까 봐</b> 걱정했는데 생각보다 쉬웠다.", translation: "Khi mới học đi xe đạp, lo sợ sẽ ngã nhưng thực ra dễ hơn tưởng tượng." },
      { sentence: "처음 자전거를 배울 때 <b>넘어질 것 같아서</b> 걱정했는데 생각보다 쉬웠다.", translation: "Khi mới học đi xe đạp, lo vì cảm giác sẽ ngã nhưng thực ra dễ hơn tưởng tượng." }
    ], notes: ""
  },
  {
    id: 30, grammar: "자마자",
    senses: [{ meaning: "ngay sau khi", groupId: "immediate" }],
    synonymPatterns: ["는 대로", "면 바로", "기가 무섭게", "기가 바쁘게"],
    examples: [
      { sentence: "나는 버스터미널에 <b>도착하자마자</b> 부모님께 전화를 드릴 생각이다.", translation: "Tôi định vừa đến bến xe là gọi điện cho bố mẹ ngay." },
      { sentence: "나는 버스터미널에 <b>도착하는 대로</b> 부모님께 전화를 드릴 생각이다.", translation: "Tôi định đến bến xe rồi liên lạc với bố mẹ ngay." },
      { sentence: "나는 버스터미널에 <b>도착하면 바로</b> 부모님께 전화를 드릴 생각이다.", translation: "Tôi định đến bến xe là gọi điện ngay cho bố mẹ." },
      { sentence: "백화점 입장이 <b>시작되자마자</b> 손님들이 몰려들었다.", translation: "Vừa mở cửa bách hóa là khách hàng ùa vào." },
      { sentence: "백화점 입장이 <b>시작되기가 무섭게</b> 손님들이 몰려들었다.", translation: "Vừa mở cửa bách hóa là khách hàng lập tức ùa vào ngay." }
    ], notes: ""
  },
  {
    id: 31, grammar: "는 길에",
    senses: [{ meaning: "trên đường, đang", groupId: "on_way" }],
    synonymPatterns: ["다가"],
    examples: [
      { sentence: "집에 <b>들어오는 길에</b> 꽃이 예뻐서 한 다발을 샀다.", translation: "Trên đường về nhà, thấy hoa đẹp nên tiện mua một bó." },
      { sentence: "집에 <b>들어오다가</b> 꽃이 예뻐서 한 다발을 샀다.", translation: "Đang trên đường về nhà, thấy hoa đẹp nên mua một bó." }
    ], notes: ""
  },
  {
    id: 32, grammar: "아/어 봐야",
    senses: [{ meaning: "dù...thì cũng", groupId: "concession" }],
    synonymPatterns: ["아/어 봐도", "본다고 해도"],
    examples: [
      { sentence: "좀 비싼 것 같지만 다른 가게에 <b>가 봐야</b> 값이 다 비슷할 것 같다.", translation: "Tuy có vẻ hơi đắt nhưng có đi cửa hàng khác thì giá cũng tương tự thôi." },
      { sentence: "좀 비싼 것 같지만 다른 가게에 <b>가 봐도</b> 값이 다 비슷할 것 같다.", translation: "Tuy có vẻ hơi đắt nhưng dù thử đến cửa hàng khác thì giá cũng sẽ tương tự." },
      { sentence: "좀 비싼 것 같지만 다른 가게에 <b>가 본다고 해도</b> 값이 다 비슷할 것 같다.", translation: "Tuy có vẻ hơi đắt, nhưng dù có đến cửa hàng khác thì giá cũng đều giống nhau." }
    ], notes: ""
  },
  {
    id: 33, grammar: "(으)ㄹ 뿐이다",
    senses: [{ meaning: "chỉ", groupId: "only" }],
    synonymPatterns: ["에 불과하다", "다름이다", "(으)ㄹ 따름이다", "에 지나지 않다"],
    examples: [
      { sentence: "바빠서 일을 못 끝냈다는 말은 <b>변명일 뿐이다</b>.", translation: "Nói bận nên không làm xong việc chẳng qua chỉ là lời biện hộ." },
      { sentence: "바빠서 일을 못 끝냈다는 말은 <b>변명에 불과하다</b>.", translation: "Nói bận nên không làm xong việc chỉ không hơn gì lời biện hộ." },
      { sentence: "친구에게 항상 도움을 받기만 해서 <b>미안할 뿐이다</b>.", translation: "Chỉ toàn nhận sự giúp đỡ từ bạn nên tôi chỉ thấy áy náy." },
      { sentence: "친구에게 항상 도움을 받기만 해서 <b>미안할 따름이다</b>.", translation: "Chỉ toàn nhận sự giúp đỡ từ bạn nên tôi chỉ biết cảm thấy áy náy mà thôi." }
    ], notes: ""
  },

  // === 34-46 ===
  {
    id: 34, grammar: "(으)ㄹ걸 그랬다",
    senses: [{ meaning: "biết thế thì đã", groupId: "regret" }],
    synonymPatterns: ["었어야 했는데"],
    examples: [
      { sentence: "졸업하고 보니 학교 다닐 때 좀 더 열심히 <b>공부할걸 그랬다</b> 생각이 든다.", translation: "Sau khi tốt nghiệp nhìn lại, ước gì hồi đi học đã học chăm hơn." },
      { sentence: "졸업하고 보니 학교 다닐 때 좀 더 열심히 <b>공부했어야 했는데</b> 생각이 든다.", translation: "Sau khi tốt nghiệp nhìn lại, đáng lẽ phải học chăm hơn khi còn đi học." }
    ], notes: ""
  },
  {
    id: 35, grammar: "(으)려던 참이다",
    senses: [{ meaning: "định", groupId: "intention" }],
    synonymPatterns: ["려고 했다"],
    examples: [
      { sentence: "사무실이 너무 더워서 안 그래도 막 에어컨을 <b>켜려던 참이었다</b>.", translation: "Văn phòng nóng quá, vừa đúng lúc đang định bật điều hòa rồi." },
      { sentence: "사무실이 너무 더워서 안 그래도 막 에어컨을 <b>켜려고 했다</b>.", translation: "Văn phòng nóng quá, tôi vừa định bật điều hòa." }
    ], notes: ""
  },
  {
    id: 36, grammar: "는 대로",
    senses: [
      { meaning: "theo như, làm y hệt", groupId: "according" },
      { meaning: "ngay khi, vừa...liền", groupId: "immediate" }
    ],
    synonymPatterns: ["는 것처럼", "자마자"],
    examples: [
      { sentence: "요가를 배우는데 선생님이 <b>하는 대로</b> 따라 하기가 쉽지 않다.", translation: "Học yoga nhưng làm y hệt theo giáo viên không hề dễ." },
      { sentence: "요가를 배우는데 선생님이 <b>하는 것처럼</b> 따라 하기가 쉽지 않다.", translation: "Học yoga nhưng làm giống như giáo viên không hề dễ." }
    ], notes: ""
  },
  {
    id: 37, grammar: "에 달려 있다",
    senses: [{ meaning: "phụ thuộc vào", groupId: "depend" }],
    synonymPatterns: ["나름이다"],
    examples: [
      { sentence: "똑같은 재료인데도 음식 맛이 다른 건 요리하기<b>에 달려 있다</b>.", translation: "Dù nguyên liệu giống nhau nhưng hương vị khác nhau là phụ thuộc vào cách nấu." },
      { sentence: "똑같은 재료인데도 음식 맛이 다른 건 요리하기 <b>나름이다</b>.", translation: "Dù nguyên liệu giống nhau nhưng hương vị khác nhau là tùy thuộc vào cách nấu." }
    ], notes: ""
  },
  {
    id: 38, grammar: "(으)ㄴ/는 척하다",
    senses: [{ meaning: "giả vờ", groupId: "pretend" }],
    synonymPatterns: ["것처럼 행동하다", "체하다"],
    examples: [
      { sentence: "회사 동료가 바빠 보였지만 도와주고 싶지 않아서 <b>모르는 척했다</b>.", translation: "Đồng nghiệp có vẻ bận, nhưng vì không muốn giúp nên tôi đã giả vờ không biết." },
      { sentence: "회사 동료가 바빠 보였지만 도와주고 싶지 않아서 <b>모르는 것처럼 행동했다</b>.", translation: "Đồng nghiệp có vẻ bận, nhưng vì không muốn giúp nên tôi hành động như thể không biết." },
      { sentence: "회사 동료가 바빠 보였지만 도와주고 싶지 않아서 <b>모르는 체했다</b>.", translation: "Đồng nghiệp có vẻ bận, nhưng vì không muốn giúp nên tôi đã làm ra vẻ không biết." }
    ], notes: ""
  },
  {
    id: 39, grammar: "다가 보니까",
    senses: [{ meaning: "cứ...thì", groupId: "result_of" }],
    synonymPatterns: ["는 탓에"],
    examples: [
      { sentence: "바빠서 식사를 제시간에 <b>못 하다가 보니까</b> 속이 쓰릴 때가 많아졌다.", translation: "Vì bận nên cứ ăn không đúng giờ, dần dần hay bị đau dạ dày." },
      { sentence: "바빠서 식사를 제시간에 <b>못 하는 탓에</b> 속이 쓰릴 때가 많아졌다.", translation: "Tại vì bận nên ăn không đúng giờ mà hay bị đau dạ dày." }
    ], notes: ""
  },
  {
    id: 40, grammar: "듯이",
    senses: [{ meaning: "như, như thể", groupId: "like_as" }],
    synonymPatterns: ["것처럼"],
    examples: [
      { sentence: "나라마다 언어가 <b>다르듯이</b> 문화도 다르다.", translation: "Cũng như mỗi quốc gia có ngôn ngữ khác nhau, văn hóa cũng khác nhau." },
      { sentence: "나라마다 언어가 <b>다른 것처럼</b> 문화도 다르다.", translation: "Giống như mỗi quốc gia có ngôn ngữ khác nhau, văn hóa cũng vậy." }
    ], notes: ""
  },
  {
    id: 41, grammar: "기도 하고",
    senses: [{ meaning: "vừa, cũng", groupId: "also" }],
    synonymPatterns: ["뿐만 아니라"],
    examples: [
      { sentence: "처음 보는 요리를 <b>배우기도 하고</b> 그걸 먹을 수도 있어서 좋아요.", translation: "Vừa được học những món chưa từng thấy vừa được ăn nên thích lắm." },
      { sentence: "처음 보는 요리를 <b>배울뿐만 아니라</b> 그걸 먹을 수도 있어서 좋아요.", translation: "Không chỉ học được những món lạ mà còn được ăn chúng nên thích lắm." }
    ], notes: ""
  },
  {
    id: 42, grammar: "(으)ㄹ 게 뻔하다",
    senses: [{ meaning: "chắc chắn", groupId: "obvious" }],
    synonymPatterns: ["(으)ㄹ 게 틀림없다"],
    examples: [
      { sentence: "영수는 아직도 집에서 <b>자고 있을 게 뻔하다</b>.", translation: "Chắc chắn Yeongsu giờ này vẫn đang ngủ ở nhà." }
    ], notes: ""
  },
  {
    id: 43, grammar: "이자",
    senses: [{ meaning: "vừa là...vừa là", groupId: "dual" }],
    synonymPatterns: ["인 동시에"],
    examples: [
      { sentence: "그 사람은 나의 <b>선생님이자</b> 유명한 감독이다.", translation: "Người đó vừa là thầy giáo của tôi vừa là đạo diễn nổi tiếng." },
      { sentence: "그 사람은 나의 <b>선생님인 동시에</b> 유명한 감독이다.", translation: "Người đó đồng thời là thầy giáo của tôi và là đạo diễn nổi tiếng." }
    ], notes: ""
  },
  {
    id: 44, grammar: "기 십상이다",
    senses: [{ meaning: "dễ bị", groupId: "likely" }],
    synonymPatterns: ["기 쉽다", "기 일쑤이다"],
    examples: [
      { sentence: "갑자기 운동을 많이 하면 몸에 이상이 <b>생기기 십상이다</b>.", translation: "Nếu tập thể dục quá nhiều đột ngột thì rất dễ xảy ra vấn đề sức khỏe." },
      { sentence: "갑자기 운동을 많이 하면 몸에 이상이 <b>생기기 쉽다</b>.", translation: "Nếu tập thể dục quá nhiều đột ngột thì dễ xảy ra vấn đề sức khỏe." }
    ], notes: ""
  },
  {
    id: 45, grammar: "아/어 놓다",
    senses: [{ meaning: "sẵn", groupId: "prepared" }],
    synonymPatterns: ["어/아 놓은 채로"],
    examples: [
      { sentence: "어제 얼마나 피곤했던지 컴퓨터를 <b>켜 놓고</b> 잠이 들었다.", translation: "Hôm qua mệt đến nỗi ngủ quên trong khi máy tính vẫn đang bật." },
      { sentence: "어제 얼마나 피곤했던지 컴퓨터를 <b>켜 놓은 채로</b> 잠이 들었다.", translation: "Hôm qua mệt đến nỗi ngủ quên trong khi vẫn để nguyên máy tính đang bật." }
    ], notes: ""
  },
  {
    id: 46, grammar: "더니",
    senses: [
      { meaning: "nhưng", groupId: "contrast" },
      { meaning: "nguyên nhân", groupId: "reason" },
      { meaning: "thứ tự", groupId: "sequence" }
    ],
    synonymPatterns: ["았/었는데"],
    examples: [
      { sentence: "[Tương phản] 아침에는 비가 오 <b>더니</b> 지금은 눈이 와요.", translation: "[Tương phản] Sáng trời mưa, vậy mà bây giờ lại có tuyết." },
      { sentence: "[Tương phản ↔] 아침에는 비가 <b>왔는데</b> 지금은 눈 와요.", translation: "[Tương phản ↔] Sáng trời mưa nhưng bây giờ lại có tuyết." },
      { sentence: "[Nguyên nhân] 매일 운동하 <b>더니</b> 건강해졌어요.", translation: "[Nguyên nhân] Ngày nào cũng tập thể dục nên giờ đã khỏe ra." },
      { sentence: "[Thứ tự] 노래를 부르 <b>더니</b> 춤도 추기 시작했어요.", translation: "[Thứ tự] Hát xong rồi bắt đầu nhảy luôn." }
    ], notes: "Chỉ dùng khi người nói đã TRỰC TIẾP quan sát/trải nghiệm ở quá khứ. Có 3 nghĩa: (1) Tương phản: A xong rồi thay đổi thành B trái ngược; (2) Nguyên nhân: cứ A thì kết quả là B; (3) Thứ tự: làm A rồi tiếp tục B. CHỈ dùng ngôi thứ 3 hoặc bản thân (ngôi 1) khi tự quan sát mình từ bên ngoài"
  },

  // ===== BATCH MỚI: 47-58 =====
  {
    id: 47, grammar: "는 듯하다",
    senses: [{ meaning: "hình như, có vẻ như", groupId: "guess" }],
    synonymPatterns: ["(으)ㄴ/는 것 같다", "나 보다", "는 모양이다"],
    ownExamples: [
      { sentence: "그는 말이 없는 걸 보니 기분이 <b>안 좋은 듯하다</b>.", translation: "Nhìn anh ấy không nói gì, hình như tâm trạng không tốt." }
    ], notes: "tương đương 것 같다, mang sắc thái văn viết hơn"
  },
  {
    id: 48, grammar: "나 보다",
    senses: [{ meaning: "chắc là (suy đoán từ bằng chứng)", groupId: "guess" }],
    synonymPatterns: ["(으)ㄴ/는 것 같다", "는 듯하다", "는 모양이다"],
    ownExamples: [
      { sentence: "불이 꺼진 걸 보니 다들 집에 <b>갔나 봐요</b>.", translation: "Nhìn đèn tắt hết, chắc mọi người đã về nhà cả rồi." }
    ], notes: "Dùng khi người nói suy đoán từ bằng chứng quan sát được (nghe/thấy kết quả). ⚠ KHÔNG dùng cho chủ ngữ ngôi thứ nhất về chính mình: '친구가 피곤한가 봐요' ✅ (quan sát người khác) / '내가 피곤한가 봐요' ❌ (bản thân mình phải tự biết). Đây là điểm phân biệt hay xuất hiện trong đề TOPIK II"
  },
  {
    id: 49, grammar: "는 모양이다",
    senses: [{ meaning: "có vẻ như, trông có vẻ", groupId: "guess" }],
    synonymPatterns: ["(으)ㄴ/는 것 같다", "나 보다", "는 듯하다"],
    ownExamples: [
      { sentence: "옆집에서 음악 소리가 나는 걸 보니 파티를 <b>하는 모양이다</b>.", translation: "Nghe tiếng nhạc từ nhà hàng xóm, có vẻ họ đang tiệc tùng." }
    ], notes: "suy đoán dựa trên quan sát gián tiếp"
  },
  {
    id: 50, grammar: "(으)려고",
    senses: [{ meaning: "định, để (ý định)", groupId: "purpose" }],
    synonymPatterns: ["기 위해서", "(으)려면", "게"],
    ownExamples: [
      { sentence: "건강해지<b>려고</b> 매일 아침 운동을 시작했다.", translation: "Để trở nên khỏe mạnh, tôi bắt đầu tập thể dục mỗi sáng." }
    ], notes: "chủ ngữ câu trước và sau phải giống nhau"
  },
  {
    id: 51, grammar: "지만",
    senses: [{ meaning: "nhưng, tuy nhiên", groupId: "contrast" }],
    synonymPatterns: ["(으)ㄴ/는데도", "(으)면서(도)", "고도"],
    ownExamples: [
      { sentence: "이 영화는 좀 길 <b>지만</b> 내용이 너무 재미있어서 지루하지 않다.", translation: "Bộ phim này hơi dài nhưng nội dung rất thú vị nên không chán." }
    ], notes: "cấu trúc cơ bản nhất để diễn đạt 'nhưng'"
  },

  {
    id: 53, grammar: "는 통에",
    senses: [{ meaning: "vì, tại vì (hỗn loạn)", groupId: "reason" }],
    synonymPatterns: ["는 바람에", "ㄴ/은 탓에", "느라고"],
    ownExamples: [
      { sentence: "아이들이 <b>떠드는 통에</b> 집중해서 일을 할 수가 없었다.", translation: "Vì bọn trẻ ồn ào nên tôi không thể tập trung làm việc." }
    ], notes: "mang ý nghĩa hỗn loạn, náo loạn; kết quả thường tiêu cực"
  },
  {
    id: 54, grammar: "ㄴ/은 탓에",
    senses: [{ meaning: "vì, do (đổ lỗi)", groupId: "reason" }],
    synonymPatterns: ["는 바람에", "는 통에", "느라고"],
    ownExamples: [
      { sentence: "늦잠을 <b>잔 탓에</b> 중요한 회의에 늦어 버렸다.", translation: "Do ngủ quên nên tôi đã đến trễ cuộc họp quan trọng." }
    ], notes: "mang sắc thái đổ lỗi; nguyên nhân dẫn đến kết quả xấu"
  },
  {
    id: 55, grammar: "느라고",
    senses: [{ meaning: "vì bận làm gì đó", groupId: "reason" }],
    synonymPatterns: ["는 바람에", "ㄴ/은 탓에", "는 통에"],
    ownExamples: [
      { sentence: "친구를 기다리 <b>느라고</b> 밥을 못 먹었다.", translation: "Vì bận chờ bạn nên tôi không ăn cơm được." }
    ], notes: "chủ ngữ trước và sau phải giống nhau; hành động trước gây cản trở hành động sau"
  },
  {
    id: 56, grammar: "만큼",
    senses: [{ meaning: "bằng, nhiều như, đến mức", groupId: "extent" }],
    synonymPatterns: ["(으)ㄹ 정도로", "게"],
    ownExamples: [
      { sentence: "그 가수는 모르는 사람이 없을 <b>만큼</b> 유명하다.", translation: "Ca sĩ đó nổi tiếng đến mức không ai không biết." }
    ], notes: "diễn đạt mức độ tương đương hoặc đạt đến"
  },
  {
    id: 57, grammar: "ㄴ/은 데다가",
    senses: [{ meaning: "không những...mà còn", groupId: "addition" }],
    synonymPatterns: ["(으)ㄹ 뿐만 아니라", "것은 물론이고", "거니와"],
    ownExamples: [
      { sentence: "그 식당은 음식이 맛있는 <b>데다가</b> 가격도 저렴해서 자주 간다.", translation: "Nhà hàng đó không những ngon mà giá còn rẻ nữa nên tôi hay đến." }
    ], notes: "thường dùng khi bổ sung thêm đặc điểm cùng chiều"
  },
  {
    id: 58, grammar: "(으)ㄹ지라도",
    senses: [{ meaning: "dù, cho dù (nhượng bộ giả thiết)", groupId: "concession" }],
    synonymPatterns: ["든지", "아/어 봐야", "(나) 마나"],
    ownExamples: [
      { sentence: "아무리 힘 <b>들지라도</b> 포기하지 않겠다.", translation: "Dù khó khăn đến đâu tôi cũng sẽ không bỏ cuộc." }
    ], notes: "mạnh hơn 더라도, thường dùng trong văn viết"
  },

  // ===== BATCH MỚI: 59-70 =====
  {
    id: 59, grammar: "는 법이다",
    senses: [{ meaning: "đương nhiên là, vốn dĩ là", groupId: "inevitable" }],
    synonymPatterns: ["기 마련이다", "게 돼 있다"],
    ownExamples: [
      { sentence: "열심히 노력하면 좋은 결과가 나오 <b>는 법이다</b>.", translation: "Nếu cố gắng hết sức thì đương nhiên sẽ có kết quả tốt." }
    ], notes: "mang tính quy luật tự nhiên, chân lý"
  },
  {
    id: 60, grammar: "게 돼 있다",
    senses: [{ meaning: "tất nhiên sẽ, đã được sắp xếp như vậy", groupId: "inevitable" }],
    synonymPatterns: ["기 마련이다", "는 법이다"],
    ownExamples: [
      { sentence: "거짓말을 하면 언젠가는 들키 <b>게 돼 있다</b>.", translation: "Nói dối thì tất nhiên sẽ bị phát hiện vào lúc nào đó thôi." }
    ], notes: "nhấn mạnh kết quả tất yếu theo quy luật"
  },
  {
    id: 61, grammar: "지 않을 수 없다",
    senses: [{ meaning: "không thể không, buộc phải", groupId: "no_choice" }],
    synonymPatterns: ["(으)ㄹ 수밖에 없다", "아/어야만 했다"],
    ownExamples: [
      { sentence: "그 소식을 듣고 울 <b>지 않을 수 없었다</b>.", translation: "Nghe tin đó, tôi không thể không khóc." }
    ], notes: "phủ định kép → nghĩa khẳng định mạnh; tương đương 수밖에 없다"
  },
  {
    id: 62, grammar: "기가 무섭게",
    senses: [{ meaning: "ngay tức khắc, vừa...đã ngay", groupId: "immediate" }],
    synonymPatterns: ["자마자", "는 대로", "면 바로"],
    ownExamples: [
      { sentence: "문이 열리 <b>기가 무섭게</b> 사람들이 쏟아져 들어왔다.", translation: "Cửa vừa mở ra là người ta ùa vào ngay lập tức." }
    ], notes: "nhấn mạnh tốc độ cực nhanh, ngay tức thì; thường dùng cho sự kiện bất ngờ"
  },
  {
    id: 63, grammar: "에 불과하다",
    senses: [{ meaning: "chỉ là, chẳng qua là", groupId: "only" }],
    synonymPatterns: ["(으)ㄹ 뿐이다", "다름이다"],
    ownExamples: [
      { sentence: "그건 그냥 핑계 <b>에 불과하다</b>.", translation: "Đó chẳng qua chỉ là lý do bao biện mà thôi." }
    ], notes: "nhấn mạnh sự hạn chế, tầm thường; thường hàm ý phê phán"
  },
  {
    id: 64, grammar: "었어야 했는데",
    senses: [{ meaning: "đáng lẽ phải, biết thế thì đã", groupId: "regret" }],
    synonymPatterns: ["(으)ㄹ걸 그랬다"],
    ownExamples: [
      { sentence: "그때 더 열심히 공부 <b>했어야 했는데</b> 후회가 된다.", translation: "Đáng lẽ hồi đó phải học chăm chỉ hơn, giờ hối hận quá." }
    ], notes: "diễn đạt sự hối tiếc về việc đã không làm trong quá khứ"
  },
  {
    id: 65, grammar: "것처럼",
    senses: [{ meaning: "như, giống như, như thể", groupId: "like_as" }],
    synonymPatterns: ["듯이", "는 것과 같이"],
    ownExamples: [
      { sentence: "그는 아무 일도 없었던 <b>것처럼</b> 태연하게 웃고 있었다.", translation: "Anh ấy mỉm cười thản nhiên như thể không có chuyện gì xảy ra vậy." }
    ], notes: "diễn đạt sự so sánh, giống như"
  },

  {
    id: 66, grammar: "인 동시에",
    senses: [{ meaning: "vừa là...vừa là, đồng thời", groupId: "dual" }],
    synonymPatterns: ["이자"],
    ownExamples: [
      { sentence: "그녀는 훌륭한 어머니 <b>인 동시에</b> 성공한 사업가이다.", translation: "Cô ấy vừa là người mẹ tuyệt vời vừa là doanh nhân thành đạt." }
    ], notes: "nhấn mạnh hai vai trò/tính chất song song cùng tồn tại"
  },
  {
    id: 67, grammar: "기 쉽다",
    senses: [{ meaning: "dễ, dễ bị", groupId: "likely" }],
    synonymPatterns: ["기 십상이다"],
    ownExamples: [
      { sentence: "피곤하면 실수를 하 <b>기 쉽다</b>.", translation: "Khi mệt mỏi thì dễ mắc sai lầm." }
    ], notes: "diễn đạt khả năng dễ xảy ra; bình thường hơn 기 십상이다"
  },
  {
    id: 68, grammar: "거나 마찬가지이다",
    senses: [{ meaning: "cũng như, không khác gì, xem như", groupId: "consider_as" }],
    synonymPatterns: ["(으)ㄴ/는 셈이다", "거나 같다", "거나 다름없다"],
    ownExamples: [
      { sentence: "그 사람은 가족 <b>이나 마찬가지이다</b>.", translation: "Người đó cũng chẳng khác gì người trong gia đình vậy." }
    ], notes: "diễn đạt sự tương đương về bản chất dù không hoàn toàn giống"
  },
  {
    id: 69, grammar: "체하다",
    senses: [{ meaning: "giả vờ, làm bộ", groupId: "pretend" }],
    synonymPatterns: ["(으)ㄴ/는 척하다", "것처럼 행동하다"],
    ownExamples: [
      { sentence: "그는 나를 봤으면서도 못 본 <b>체했다</b>.", translation: "Anh ta trông thấy tôi rồi mà còn làm bộ không thấy." }
    ], notes: "tương đương 척하다; hơi cổ điển hơn một chút"
  },

  // ===== BATCH MỚI (TỪ VIDEO): 71-103 =====
  {
    id: 70, grammar: "고자",
    senses: [{ meaning: "để (mục đích, văn viết)", groupId: "purpose" }],
    synonymPatterns: ["기 위해(서)", "도록", "(으)려고"],
    ownExamples: [{ sentence: "이 문제를 해결하 <b>고자</b> 회의를 열었습니다.", translation: "Chúng tôi đã mở cuộc họp để giải quyết vấn đề này." }],
    notes: "thực hiện hành động để đạt mục đích phía trước, thường tốn công sức, văn viết/vĩ mô"
  },
  {
    id: 71, grammar: "(으)러",
    senses: [{ meaning: "đi/đến để", groupId: "purpose" }],
    synonymPatterns: ["(으)려고", "기 위해서"],
    ownExamples: [{ sentence: "친구를 만나 <b>러</b> 카페에 가고 있어요.", translation: "Tôi đang đến quán cà phê để gặp bạn." }],
    notes: "chỉ kết hợp với động từ di chuyển (가다, 오다, 다니다...)"
  },
  {
    id: 72, grammar: "(으)려고 하다",
    senses: [{ meaning: "định làm gì", groupId: "intention" }],
    synonymPatterns: ["(으)려던 참이다"],
    ownExamples: [{ sentence: "내년에는 한국어 능력 시험을 보 <b>려고 합니다</b>.", translation: "Năm sau tôi định thi năng lực tiếng Hàn." }],
    notes: "kế hoạch mơ hồ, chưa chắc chắn trong tương lai"
  },
  {
    id: 73, grammar: "(으)ㄴ/는 것과 같다",
    senses: [{ meaning: "gần như là, giống hệt như", groupId: "consider_as" }],
    synonymPatterns: ["(으)ㄴ/는 셈이다", "(으)ㄴ 거나 마찬가지다"],
    ownExamples: [{ sentence: "이 정도면 사실상 합격한 <b>것과 같다</b>.", translation: "Cỡ này thì trên thực tế cũng giống như là đã đậu rồi." }],
    notes: "so sánh trạng thái gần như tương đương"
  },
  {
    id: 74, grammar: "고 나서",
    senses: [{ meaning: "sau khi", groupId: "sequence" }],
    synonymPatterns: ["(으)ㄴ 후에"],
    ownExamples: [{ sentence: "밥을 먹 <b>고 나서</b> 양치를 했다.", translation: "Sau khi ăn cơm xong, tôi đã đánh răng." }],
    notes: "kết thúc hoàn toàn hành động trước rồi mới đến hành động sau"
  },
  {
    id: 75, grammar: "다가",
    senses: [{ meaning: "đang làm gì thì (bị gián đoạn)", groupId: "interrupted" }],
    synonymPatterns: ["는 길에"],
    ownExamples: [{ sentence: "책을 읽 <b>다가</b> 잠이 들었어요.", translation: "Tôi đang đọc sách thì ngủ thiếp đi." }],
    notes: "bị ngắt quãng, rẽ hướng sang hành động khác"
  },
  {
    id: 76, grammar: "(으)ㄴ 지 되다",
    senses: [{ meaning: "làm gì đó được bao lâu rồi", groupId: "since_time" }],
    synonymPatterns: [],
    ownExamples: [{ sentence: "한국어를 공부한 <b>지 1년이 되었습니다</b>.", translation: "Tôi học tiếng Hàn được 1 năm rồi." }],
    notes: "thường đi kèm với khoảng thời gian"
  },
  {
    id: 77, grammar: "아/어 가다",
    senses: [{ meaning: "dần dần (tiếp diễn đến tương lai)", groupId: "change_process" }],
    synonymPatterns: [],
    ownExamples: [{ sentence: "일이 거의 다 끝나 <b>갑니다</b>.", translation: "Công việc gần như đang dần hoàn tất rồi." }],
    notes: "Quá trình đang diễn ra từ hiện tại hướng về tương lai. ⚠ 아/어 오다 là cặp ĐỐI XỨNG (không phải synonym): 아/어 가다 = hiện tại→tương lai; 아/어 오다 = quá khứ→hiện tại. (VD: 한국어를 3년간 공부해 왔어요 - Tôi đã học tiếng Hàn 3 năm đến giờ)"
  },
  {
    id: 78, grammar: "아/어 버리다",
    senses: [{ meaning: "mất rồi (kết thúc)", groupId: "completion" }],
    synonymPatterns: ["고 말다"],
    ownExamples: [{ sentence: "너무 배가 고파서 피자를 다 먹 <b>어 버렸다</b>.", translation: "Đói quá nên tôi đã ăn sạch cái pizza mất rồi." }],
    notes: "kết thúc nhanh hơn dự kiến, mang sắc thái tiếc nuối hoặc nhẹ nhõm"
  },
  {
    id: 79, grammar: "(으)ㄴ/는 지 (모르다)",
    senses: [{ meaning: "không biết có phải vì... hay không", groupId: "reason" }],
    synonymPatterns: ["아서/어서 그런지"],
    ownExamples: [{ sentence: "피곤한 <b>지</b> 동생이 일찍 자네요.", translation: "Không biết có phải vì mệt không mà em tôi ngủ sớm thế." }],
    notes: "phỏng đoán một lý do"
  },
  {
    id: 80, grammar: "(으)니까",
    senses: [{ meaning: "bởi vì (lý do) / sau khi (nhận ra)", groupId: "reason" }],
    synonymPatterns: ["아서/어서"],
    ownExamples: [{ sentence: "날씨가 추우 <b>니까</b> 따뜻하게 입으세요.", translation: "Vì thời tiết lạnh nên hãy mặc ấm nhé." }],
    notes: "vế sau thường là câu mệnh lệnh, rủ rê. Hoặc sau khi làm gì thì nhận ra điều gì"
  },
  {
    id: 81, grammar: "(으)ㄹ 테니까",
    senses: [{ meaning: "vì sẽ/chắc sẽ... nên", groupId: "reason" }],
    synonymPatterns: ["(으)니까"],
    ownExamples: [{ sentence: "내가 청소를 할 <b>테니까</b> 너는 설거지를 해라.", translation: "Tôi sẽ dọn dẹp nên bạn hãy rửa bát đi." }],
    notes: "người nói thể hiện ý chí hoặc phỏng đoán để làm lý do cho vế sau (mệnh lệnh)"
  },
  {
    id: 82, grammar: "고 싶으면",
    senses: [{ meaning: "nếu muốn", groupId: "condition" }],
    synonymPatterns: ["(으)려면"],
    ownExamples: [{ sentence: "시험에 합격하 <b>고 싶으면</b> 열심히 공부해라.", translation: "Nếu muốn thi đậu thì hãy học chăm chỉ vào." }],
    notes: "tương đương (으)려면"
  },
  {
    id: 83, grammar: "거든(요)",
    senses: [{ meaning: "nếu (giữa câu, + mệnh lệnh) / vì (cuối câu, giải thích)", groupId: "geodeun" }],
    synonymPatterns: [],
    ownExamples: [{ sentence: "바쁘<b>거든</b> 나중에 연락하세요.", translation: "Nếu bận thì lát hãy liên lạc nhé." }],
    notes: "Hai chức năng cú pháp hoàn toàn khác nhau. Giữa câu: điều kiện → mệnh lệnh. Cuối câu: cung cấp lý do mới cho người nghe. KHÔNG thay thế được 다면 hay (으)면."
  },
  {
    id: 84, grammar: "다면",
    senses: [{ meaning: "nếu (giả định khó xảy ra)", groupId: "condition" }],
    synonymPatterns: ["(으)면"],
    ownExamples: [{ sentence: "내가 부자라 <b>면</b> 세계 여행을 갈 텐데.", translation: "Nếu tôi là người giàu thì tôi đã đi du lịch vòng quanh thế giới." }],
    notes: "giả định điều khó hoặc không thể xảy ra trong thực tế"
  },
  {
    id: 85, grammar: "(으)면",
    senses: [{ meaning: "nếu (giả định thông thường)", groupId: "condition" }],
    synonymPatterns: ["다면"],
    ownExamples: [{ sentence: "비가 오 <b>면</b> 집에 있을 거예요.", translation: "Nếu trời mưa thì tôi sẽ ở nhà." }],
    notes: "giả định thông thường, dễ xảy ra"
  },
  {
    id: 86, grammar: "아/어/여도",
    senses: [{ meaning: "cho dù", groupId: "concession" }],
    synonymPatterns: ["더라도", "(으)ㄹ지라도"],
    ownExamples: [{ sentence: "비가 와 <b>도</b> 축구 경기는 계속됩니다.", translation: "Cho dù trời mưa, trận đấu bóng đá vẫn tiếp tục." }],
    notes: "cho dù... đi chăng nữa thì kết quả vẫn không đổi"
  },
  {
    id: 87, grammar: "더라도",
    senses: [{ meaning: "cho dù (giả định)", groupId: "concession" }],
    synonymPatterns: ["아/어/여도", "든지"],
    ownExamples: [{ sentence: "바쁘 <b>더라도</b> 식사는 꼭 챙겨 드세요.", translation: "Dù có bận rộn thì cũng nhất định phải ăn uống đàng hoàng nhé." }],
    notes: "mang tính giả định mạnh hơn 아/어/여도"
  },
  {
    id: 88, grammar: "거나",
    senses: [{ meaning: "hoặc", groupId: "choice" }],
    synonymPatterns: ["든지"],
    ownExamples: [{ sentence: "주말에는 영화를 보 <b>거나</b> 책을 읽어요.", translation: "Cuối tuần tôi thường xem phim hoặc đọc sách." }],
    notes: "lựa chọn 1 trong 2"
  },
  {
    id: 89, grammar: "(으)ㄹ수록",
    senses: [{ meaning: "càng... càng", groupId: "progression" }],
    synonymPatterns: [],
    ownExamples: [{ sentence: "한국어는 배우면 배울 <b>수록</b> 재미있어요.", translation: "Tiếng Hàn càng học càng thấy thú vị." }],
    notes: "mức độ tăng tiến"
  },
  {
    id: 90, grammar: "기 나름이다",
    senses: [{ meaning: "phụ thuộc vào", groupId: "depend" }],
    synonymPatterns: ["기에 달려 있다"],
    ownExamples: [{ sentence: "행복은 마음먹 <b>기 나름이다</b>.", translation: "Hạnh phúc là phụ thuộc vào cách ta suy nghĩ." }],
    notes: "phụ thuộc vào cách thực hiện mà kết quả sẽ thay đổi"
  },
  {
    id: 91, grammar: "(으)ㄹ 수 있다",
    senses: [{ meaning: "có thể (khả năng / năng lực)", groupId: "ability" }],
    synonymPatterns: ["(으)ㄹ 능력이 있다"],
    ownExamples: [{ sentence: "내일은 비가 올 <b>수도 있어요</b>.", translation: "Ngày mai cũng có thể trời sẽ mưa." }],
    notes: "Chỉ năng lực hoặc khả năng tồn tại. Khi thêm 도 (수도 있다) mới mang nghĩa phỏng đoán mờ nhạt. KHÔNG phải ngữ pháp phỏng đoán như 것 같다 / 나 보다."
  },
  {
    id: 92, grammar: "지 말 걸 그랬다",
    senses: [{ meaning: "biết vậy đã không làm", groupId: "regret" }],
    synonymPatterns: ["(으)ㄹ걸 그랬다"],
    ownExamples: [{ sentence: "그 영화는 너무 재미없어서 보 <b>지 말 걸 그랬다</b>.", translation: "Bộ phim đó chán quá, biết thế tôi đã không xem." }],
    notes: "diễn tả sự hối tiếc vì đã lỡ làm gì đó"
  },
  {
    id: 93, grammar: "(으)ㄹ 뻔하다",
    senses: [{ meaning: "suýt nữa thì", groupId: "almost" }],
    synonymPatterns: [],
    ownExamples: [{ sentence: "길이 미끄러워서 넘어질 <b>뻔했어요</b>.", translation: "Đường trơn quá nên tôi suýt nữa thì ngã." }],
    notes: "điều tiêu cực suýt xảy ra nhưng may mắn không sao"
  },
  {
    id: 94, grammar: "(으)ㄴ 적이 있다/없다",
    senses: [{ meaning: "đã từng / chưa từng", groupId: "experience" }],
    synonymPatterns: [],
    ownExamples: [{ sentence: "한국에 가 본 <b>적이 있어요</b>.", translation: "Tôi đã từng đến Hàn Quốc." }],
    notes: "nói về trải nghiệm trong quá khứ"
  },
  {
    id: 95, grammar: "곤 하다",
    senses: [{ meaning: "thường hay", groupId: "habit" }],
    synonymPatterns: ["기 일쑤이다"],
    ownExamples: [{ sentence: "어릴 때 이 공원에서 놀 <b>곤 했어요</b>.", translation: "Hồi nhỏ tôi thường hay chơi ở công viên này." }],
    notes: "thói quen trong hiện tại (곤 하다) hoặc quá khứ (곤 했다). 기 일쑤이다 gần nghĩa nhưng mang sắc thái tiêu cực hơn (hay bị/hay mắc)"
  },
  {
    id: 96, grammar: "는 편이다",
    senses: [{ meaning: "thuộc dạng, vào loại", groupId: "tendency" }],
    synonymPatterns: [],
    ownExamples: [{ sentence: "저는 매운 음식을 잘 먹는 <b>편이에요</b>.", translation: "Tôi thuộc tuýp người ăn cay khá tốt." }],
    notes: "đánh giá thiên về một khuynh hướng nào đó"
  },
  {
    id: 97, grammar: "(으)면 좋겠다",
    senses: [{ meaning: "ước gì, mong rằng", groupId: "wish" }],
    synonymPatterns: ["(으)면 하다"],
    ownExamples: [{ sentence: "내일은 날씨가 맑았으 <b>면 좋겠어요</b>.", translation: "Mong rằng ngày mai thời tiết sẽ đẹp." }],
    notes: "thường kết hợp với 았/었/였 ở trước để nhấn mạnh mong ước"
  },
  {
    id: 98, grammar: "는 대신(에)",
    senses: [{ meaning: "thay vì, bù lại", groupId: "alternative" }],
    synonymPatterns: [],
    ownExamples: [{ sentence: "영화를 보 <b>는 대신에</b> 집에서 쉬기로 했어요.", translation: "Thay vì xem phim, tôi quyết định nghỉ ngơi ở nhà." }],
    notes: "hành động sau thay thế cho hành động trước"
  },
  {
    id: 99, grammar: "게 되다",
    senses: [{ meaning: "được, bị, trở nên (kết quả do ngoại cảnh)", groupId: "change_result" }],
    synonymPatterns: [],
    ownExamples: [{ sentence: "한국 회사에 취직하 <b>게 되었어요</b>.", translation: "Tôi đã được nhận vào làm ở một công ty Hàn Quốc." }],
    notes: "kết quả có được do yếu tố bên ngoài tác động vào"
  },
  {
    id: 100, grammar: "아/어야 하다",
    senses: [{ meaning: "phải", groupId: "obligation" }],
    synonymPatterns: ["아/어야 되다"],
    ownExamples: [{ sentence: "내일 시험이 있어서 공부를 <b>해야 합니다</b>.", translation: "Ngày mai có bài thi nên tôi phải học bài." }],
    notes: "diễn tả nghĩa vụ, sự bắt buộc"
  },
  {
    id: 101, grammar: "는 동안",
    senses: [{ meaning: "trong khi/trong lúc", groupId: "while_time" }],
    synonymPatterns: [],
    ownExamples: [{ sentence: "제가 청소를 하 <b>는 동안</b> 동생은 음악을 들었어요.", translation: "Trong lúc tôi dọn dẹp thì em tôi nghe nhạc." }],
    notes: "chỉ khoảng thời gian diễn ra hành động"
  },
  {
    id: 102, grammar: "마다",
    senses: [{ meaning: "mỗi, cứ hễ", groupId: "whenever" }],
    synonymPatterns: ["기만 하면", "(으)ㄹ 때마다"],
    ownExamples: [{ sentence: "주말 <b>마다</b> 등산을 가요.", translation: "Mỗi dịp cuối tuần tôi đều đi leo núi." }],
    notes: "gắn sau danh từ; nếu kết hợp với động từ thì dùng (으)ㄹ 때마다"
  },

  // ===== BATCH MỚI: 104-115 (bổ sung từ tham chiếu) =====
  {
    id: 103, grammar: "(으)ㄹ 따름이다",
    senses: [{ meaning: "chỉ là, chỉ có vậy thôi", groupId: "only" }],
    synonymPatterns: ["(으)ㄹ 뿐이다", "에 불과하다"],
    ownExamples: [{ sentence: "저는 맡은 일을 열심히 했을 <b>따름이에요</b>.", translation: "Tôi chỉ làm hết sức việc được giao mà thôi." }],
    notes: "tương đương 뿐이다, nhưng mang sắc thái khiêm tốn hơn; thường dùng trong văn viết hoặc lời nói trang trọng"
  },
  {
    id: 104, grammar: "는 김에",
    senses: [{ meaning: "nhân tiện, tiện thể đang làm gì thì làm luôn", groupId: "opportune" }],
    synonymPatterns: ["(으)ㄹ 겸", "는 길에"],
    ownExamples: [{ sentence: "마트에 가 <b>는 김에</b> 세제도 좀 사 와요.", translation: "Nhân tiện đang đi siêu thị thì mua luôn nước giặt về nhé." }],
    notes: "nhân cơ hội đang thực hiện hành động A thì làm thêm B. Khác 는 길에 (tiện đường di chuyển): 는 김에 dùng với mọi hành động, không chỉ di chuyển"
  },
  {
    id: 105, grammar: "는 가운데",
    senses: [{ meaning: "trong lúc, giữa lúc (bối cảnh)", groupId: "while_time" }],
    synonymPatterns: ["는 중에", "는 동안"],
    ownExamples: [{ sentence: "어려운 상황 <b>가운데</b>서도 희망을 잃지 않았어요.", translation: "Ngay giữa hoàn cảnh khó khăn vẫn không mất đi hy vọng." }],
    notes: "thường dùng trong văn viết/trang trọng; 는 중에 thông dụng hơn trong văn nói. Khác 는 동안: 가운데 nhấn mạnh bối cảnh/hoàn cảnh, 동안 nhấn mạnh khoảng thời gian"
  },
  {
    id: 106, grammar: "는 중에",
    senses: [{ meaning: "trong khi đang làm gì đó", groupId: "while_time" }],
    synonymPatterns: ["는 가운데", "는 동안"],
    ownExamples: [{ sentence: "수업 <b>중에</b> 전화가 울렸어요.", translation: "Trong khi đang học thì điện thoại reo." }],
    notes: "thường đi sau danh từ hành động (수업 중에, 회의 중에). Khác 는 동안: 중에 ngắn hơn, thông dụng với danh từ; 동안 đi với mệnh đề đầy đủ"
  },
  {
    id: 107, grammar: "다가보면",
    senses: [{ meaning: "cứ làm liên tục thì sẽ (kết quả thay đổi trong tương lai)", groupId: "future_result" }],
    synonymPatterns: ["노라면", "다 보면"],
    ownExamples: [{ sentence: "포기하지 않고 계속 연습하 <b>다 보면</b> 언젠가는 잘하게 될 거예요.", translation: "Cứ không bỏ cuộc mà tiếp tục luyện tập thì rồi sẽ có lúc làm giỏi thôi." }],
    notes: "hành động lặp lại/liên tục → kết quả thay đổi trong tương lai. Khác 다가 보니까 (ID 39): 다가 보니까 là kết quả đã nhận ra ở hiện tại/quá khứ; 다가보면 là kết quả sẽ xảy ra ở tương lai"
  },
  {
    id: 108, grammar: "(으)ㄹ 바에야",
    senses: [{ meaning: "thà... còn hơn (nếu phải làm vế trước thà làm vế sau hơn)", groupId: "preference" }],
    synonymPatterns: ["느니 (차라리)", "(으)ㄹ 바에는"],
    ownExamples: [{ sentence: "그 사람에게 부탁할 <b>바에야</b> 차라리 혼자 하는 게 낫겠어요.", translation: "Thà tự làm một mình còn hơn là nhờ người đó." }],
    notes: "biểu thị sự lựa chọn: thà B còn hơn A. Vế trước là điều không muốn; vế sau thường có 차라리 (thà rằng). 느니도 tương tự nhưng mang cảm giác chán nản hơn"
  },
  {
    id: 109, grammar: "(으)ㄴ 후에",
    senses: [{ meaning: "sau khi", groupId: "sequence" }],
    synonymPatterns: ["고 나서", "고 나서야", "(으)ㄴ 다음에"],
    ownExamples: [{ sentence: "식사를 한 <b>후에</b> 약을 드세요.", translation: "Hãy uống thuốc sau khi ăn xong." }],
    notes: "sau khi hoàn thành A thì mới B. Tương đương 고 나서 (ID 75) nhưng 후에 dùng được sau cả danh từ (졸업 후에); 고 나서 chỉ sau động từ"
  },
  {
    id: 110, grammar: "(으)ㄹ 나위가 없다",
    senses: [{ meaning: "không cần phải nói (quá tốt/hài lòng đến mức không thể hơn)", groupId: "no_need" }],
    synonymPatterns: ["(으)ㄹ 필요가 없다", "말할 것도 없다"],
    ownExamples: [{ sentence: "이번 여행은 더 말할 <b>나위가 없이</b> 즐거웠어요.", translation: "Chuyến đi lần này vui đến mức không cần phải nói thêm gì nữa." }],
    notes: "thường xuất hiện dưới dạng 더할 나위가 없다 (không thể tốt hơn) hoặc 말할 나위가 없다 (khỏi cần nói)"
  },
  {
    id: 111, grammar: "V-다시피",
    senses: [{ meaning: "gần như là, hầu như là (làm giống như hành động nhưng thực ra không hẳn)", groupId: "like_as" }],
    synonymPatterns: ["는 것처럼", "는 바와 같이"],
    ownExamples: [{ sentence: "그는 밥을 먹<b>다시피</b> 빠르게 먹어 치웠어요.", translation: "Anh ấy ăn gần như nuốt chửng, nhanh đến mức không thể gọi là ăn được." }],
    notes: "kết hợp với một số động từ thông dụng tạo thành cụm cố định: 알다시피 (như bạn đã biết), 보다시피 (như đã thấy). Mang nghĩa 'gần như, hầu như' — thực tế không hoàn toàn là hành động đó"
  },
  {
    id: 112, grammar: "(으)ㄹ 텐데",
    senses: [{ meaning: "chắc là... (phỏng đoán kèm băn khoăn, lo lắng, tiếc nuối)", groupId: "guess_concern" }],
    synonymPatterns: ["(으)ㄹ 것 같은데", "(으)ㄹ 것이다 + 그런데"],
    ownExamples: [{ sentence: "지금쯤 배가 고플 <b>텐데</b> 밥은 먹었어요?", translation: "Giờ này chắc đói rồi, ăn cơm chưa?" }],
    notes: "phỏng đoán về tình huống + kèm theo cảm xúc (lo lắng, tiếc nuối, hy vọng). Khác 것 같다 (chỉ phỏng đoán đơn thuần): 텐데 luôn ngụ ý phản ứng cảm xúc của người nói với tình huống đó"
  },
  {
    id: 113, grammar: "아/어지다",
    senses: [{ meaning: "trở nên, trở thành (thay đổi tự nhiên)", groupId: "change_process" }],
    synonymPatterns: ["게 되다", "아/어 가다"],
    ownExamples: [{ sentence: "날씨가 점점 따뜻해 <b>지고</b> 있어요.", translation: "Thời tiết đang dần trở nên ấm áp hơn." }],
    notes: "thay đổi trạng thái một cách tự nhiên (thường dùng với tính từ). Khác 게 되다 (ID 100): 아/어지다 = quá trình tự nhiên; 게 되다 = kết quả do tác động bên ngoài"
  },
  {
    id: 114, grammar: "(으)ㄹ 지경이다",
    senses: [{ meaning: "đến mức/nỗi (mức độ cực đoan, thường tiêu cực)", groupId: "extent" }],
    synonymPatterns: ["(으)ㄹ 정도이다", "만큼"],
    ownExamples: [{ sentence: "너무 바빠서 밥도 못 먹을 <b>지경이에요</b>.", translation: "Bận đến mức không có thời gian ăn cơm luôn." }],
    notes: "mức độ cực đoan hơn 정도, thường diễn đạt tình huống tiêu cực/khó khăn. (으)ㄹ 지경으로 là dạng trạng từ (làm bổ ngữ cho động từ sau)"
  },
  {
    id: 115, grammar: "어/아 봤자",
    senses: [{ meaning: "dù có làm thì cũng vô ích", groupId: "concession" }],
    synonymPatterns: ["(나) 마나", "것도 없이", "아/어 봐도", "본다고 해도"],
    ownExamples: [
      { sentence: "지금 서둘러 <b>봐야</b> 이미 늦어서 소용이 없다.", translation: "Dù có vội bây giờ thì cũng đã trễ rồi, chẳng ích gì." }
    ],
    notes: "diễn đạt sự vô nghĩa của hành động vì kết quả đã được biết trước; kết quả thường tiêu cực"
  },
  {
    id: 116, grammar: "것도 없이",
    senses: [{ meaning: "chẳng cần phải, không cần làm gì", groupId: "concession" }],
    synonymPatterns: ["(나) 마나", "어/아 봤자"],
    ownExamples: [
      { sentence: "물어볼 <b>것도 없이</b> 그 사람이 이길 거라는 걸 다들 알고 있었다.", translation: "Chẳng cần phải hỏi, ai cũng biết người đó sẽ thắng." }
    ],
    notes: "thường dùng ở dạng cố định 'V-볼 것도 없이' (chẳng cần xem/hỏi/xét); ngụ ý kết quả đã rõ ràng từ trước"
  },
  {
    id: 117, grammar: "아/어 봐도",
    senses: [{ meaning: "dù có thử thì cũng", groupId: "concession" }],
    synonymPatterns: ["아/어 봐야", "본다고 해도", "(나) 마나"],
    ownExamples: [
      { sentence: "다른 병원에 가 <b>봐도</b> 결과는 똑같을 거예요.", translation: "Dù có thử đến bệnh viện khác thì kết quả cũng sẽ như nhau thôi." }
    ],
    notes: "nhẹ hơn 봐야 một chút; gần nghĩa 봐야 nhưng ít nhấn mạnh tính vô ích hơn"
  },
  {
    id: 118, grammar: "본다고 해도",
    senses: [{ meaning: "dù có thử xem/làm thì cũng", groupId: "concession" }],
    synonymPatterns: ["아/어 봐야", "아/어 봐도", "(나) 마나"],
    ownExamples: [
      { sentence: "전문가한테 물어 <b>본다고 해도</b> 명확한 답을 얻기는 어려울 거예요.", translation: "Dù có hỏi chuyên gia thì cũng khó mà nhận được câu trả lời rõ ràng." }
    ],
    notes: "cấu trúc dài hơn, thường dùng trong văn viết hoặc văn nói trang trọng"
  },
  {
    id: 119, grammar: "은/는 것 같았다",
    senses: [{ meaning: "có vẻ như (ở quá khứ), trông có vẻ", groupId: "guess" }],
    synonymPatterns: ["아/어 보이다", "(으)ㄴ/는 것 같다"],
    ownExamples: [
      { sentence: "그날따라 그가 뭔가 숨기는 게 <b>있는 것 같았다</b>.", translation: "Hôm đó tôi cảm giác anh ấy như đang giấu điều gì đó." }
    ],
    notes: "dạng quá khứ của 것 같다; diễn đạt suy đoán ở thời điểm trong quá khứ"
  },
  {
    id: 120, grammar: "기 위해서는",
    senses: [{ meaning: "để (muốn đạt được thì phải)", groupId: "condition" }],
    synonymPatterns: ["(으)려면"],
    ownExamples: [
      { sentence: "시험에 합격하 <b>기 위해서는</b> 꾸준히 공부하는 것이 중요하다.", translation: "Để thi đậu thì điều quan trọng là phải học đều đặn." }
    ],
    notes: "biến thể của 기 위해서; thêm 는 nhấn mạnh điều kiện cần thiết, tương đương (으)려면 trong nhiều ngữ cảnh"
  },
  {
    id: 121, grammar: "고서도",
    senses: [{ meaning: "dù ... vẫn", groupId: "contrast" }],
    synonymPatterns: ["(으)면서(도)", "고도"],
    ownExamples: [
      { sentence: "위험한 줄 <b>알고서도</b> 그는 뛰어들었다.", translation: "Dù biết là nguy hiểm nhưng anh ta vẫn lao vào." }
    ],
    notes: "nhấn mạnh sự cố ý bất chấp: đã nhận thức rõ ràng (알고) mà vẫn làm; sắc thái mạnh hơn (으)면서도"
  },
  {
    id: 122, grammar: "(으)ㄹ 수도 있다",
    senses: [{ meaning: "có thể (phỏng đoán nhẹ)", groupId: "guess" }],
    synonymPatterns: ["(으)ㄹ지도 모르다", "(으)ㄴ/는 것 같다"],
    ownExamples: [
      { sentence: "내일 비가 올 <b>수도 있으니까</b> 우산을 챙기세요.", translation: "Ngày mai có thể trời mưa nên hãy mang theo ô nhé." }
    ],
    notes: "수 있다 + 도 → mang sắc thái phỏng đoán; nhẹ hơn (으)ㄹ지도 모르다. Phân biệt: (으)ㄹ 수 있다 (ID 92) = năng lực; (으)ㄹ 수도 있다 = khả năng có thể xảy ra"
  },
  {
    id: 123, grammar: "지 않았을 것이다",
    senses: [{ meaning: "chắc đã không..., không thể đã...", groupId: "impossible" }],
    synonymPatterns: ["(으)ㄹ 리가 없다", "(으)ㄹ 리 만무하다", "(으)ㄹ 턱이 없다"],
    ownExamples: [
      { sentence: "그 사람이라면 그런 말을 함부로 하 <b>지 않았을 것이다</b>.", translation: "Nếu là người đó thì chắc đã không buông ra những lời như vậy đâu." }
    ],
    notes: "phủ định trong quá khứ mang tính phỏng đoán; thường dùng trong lý luận hoặc biện hộ cho ai đó"
  },
  {
    id: 124, grammar: "(으)ㄹ 리 만무하다",
    senses: [{ meaning: "không có chuyện đó xảy ra, tuyệt đối không thể", groupId: "impossible" }],
    synonymPatterns: ["(으)ㄹ 리가 없다", "(으)ㄹ 턱이 없다", "지 않았을 것이다"],
    ownExamples: [
      { sentence: "그가 약속을 어길 <b>리 만무하다</b>. 평소에 너무 성실하거든.", translation: "Không có chuyện anh ấy phá vỡ lời hứa đâu. Bình thường anh ấy rất nghiêm túc mà." }
    ],
    notes: "mạnh hơn 리가 없다; mang sắc thái dứt khoát, quả quyết; chủ yếu dùng trong văn viết"
  },
  {
    id: 125, grammar: "(으)ㄹ 턱이 없다",
    senses: [{ meaning: "không có lý do gì mà, không thể nào (vì không có điều kiện)", groupId: "impossible" }],
    synonymPatterns: ["(으)ㄹ 리가 없다", "(으)ㄹ 리 만무하다"],
    ownExamples: [
      { sentence: "그 사람이 그런 비싼 선물을 살 <b>턱이 없다</b>. 수입이 얼마나 된다고.", translation: "Không có chuyện người đó mua món quà đắt như thế đâu. Thu nhập được bao nhiêu đâu mà." }
    ],
    notes: "nhấn mạnh sự bất khả thi vì thiếu điều kiện (tài chính, khả năng, hoàn cảnh); thường hàm ý mỉa mai"
  },
  {
    id: 126, grammar: "(으)ㄹ 가치가 있다",
    senses: [{ meaning: "có giá trị, đáng để làm", groupId: "worthy" }],
    synonymPatterns: ["(으)ㄹ 만하다"],
    ownExamples: [
      { sentence: "그 책은 한 번쯤 읽어 볼 <b>가치가 있어요</b>.", translation: "Cuốn sách đó đáng để đọc ít nhất một lần." }
    ],
    notes: "nhấn mạnh giá trị của việc làm gì đó; 만하다 thông dụng hơn trong văn nói, 가치가 있다 trang trọng hơn"
  },
  {
    id: 127, grammar: "거나 같다",
    senses: [{ meaning: "cũng như, giống như là", groupId: "consider_as" }],
    synonymPatterns: ["(으)ㄴ/는 셈이다", "거나 마찬가지이다", "거나 다름없다"],
    ownExamples: [
      { sentence: "이 날씨에 나갔다가는 감기에 걸린 <b>거나 같다</b>.", translation: "Đi ra ngoài trong thời tiết này thì cũng như bị cảm lạnh vậy." }
    ],
    notes: "biểu thị sự tương đương bản chất; thường kết hợp với 것 hoặc 거나 (거나 같다)"
  },
  {
    id: 128, grammar: "거나 다름없다",
    senses: [{ meaning: "không khác gì, cũng như là", groupId: "consider_as" }],
    synonymPatterns: ["(으)ㄴ/는 셈이다", "거나 마찬가지이다", "거나 같다"],
    ownExamples: [
      { sentence: "우리는 20년을 함께 살았으니 가족이<b>나 다름없어요</b>.", translation: "Chúng tôi đã sống cùng nhau 20 năm, không khác gì người trong gia đình." }
    ],
    notes: "nhấn mạnh sự tương đương hoàn toàn về bản chất; mạnh hơn 셈이다 một chút"
  },
  {
    id: 129, grammar: "다고 생각했다",
    senses: [{ meaning: "đã tưởng là, đã nghĩ là", groupId: "unexpected" }],
    synonymPatterns: ["(으)ㄴ/는 줄 몰랐다"],
    ownExamples: [
      { sentence: "그 식당이 문을 닫은 <b>줄 알았다</b>. 가 봤더니 아직 열더라.", translation: "Tôi đã nghĩ quán đó đóng cửa rồi. Đến nơi mới thấy vẫn còn mở." }
    ],
    notes: "diễn đạt nhận thức sai trong quá khứ; thường dùng ở dạng rút gọn '줄 알았다'. Khác (으)ㄴ 줄 몰랐다: 줄 알았다 = tưởng đúng nhưng sai; 줄 몰랐다 = không biết là có chuyện đó"
  },
  {
    id: 130, grammar: "(으)ㄴ 거나 마찬가지다",
    senses: [{ meaning: "cũng như là, coi như là", groupId: "consider_as" }],
    synonymPatterns: ["(으)ㄴ/는 셈이다", "거나 다름없다"],
    ownExamples: [{ sentence: "그렇게 오래 연락이 없으면 헤어진 <b>거나 마찬가지다</b>.", translation: "Mà lâu không liên lạc như vậy thì cũng như là chia tay rồi vậy." }],
    notes: "nhấn mạnh bản chất tương đương dù về hình thức chưa hẳn vậy"
  },
  {
    id: 131, grammar: "(으)ㄴ 다음에",
    senses: [{ meaning: "sau khi (làm xong)", groupId: "sequence" }],
    synonymPatterns: ["(으)ㄴ 후에", "고 나서"],
    ownExamples: [{ sentence: "밥을 먹은 <b>다음에</b> 산책을 해요.", translation: "Sau khi ăn cơm xong thì đi dạo." }],
    notes: "tương đương (으)ㄴ 후에; nhấn mạnh thứ tự trước-sau; dùng phổ biến trong văn nói"
  },
  {
    id: 132, grammar: "(으)ㄹ 것 같은데",
    senses: [{ meaning: "chắc là... (phỏng đoán kèm băn khoăn)", groupId: "guess_concern" }],
    synonymPatterns: ["(으)ㄹ 텐데"],
    ownExamples: [{ sentence: "지금쯤 피곤할 <b>것 같은데</b> 좀 쉬지 그래요?", translation: "Chắc giờ này mệt rồi, sao không nghỉ một chút?" }],
    notes: "gần nghĩa (으)ㄹ 텐데 nhưng nhẹ hơn về mặt cảm xúc; diễn đạt phỏng đoán kèm quan tâm"
  },
  {
    id: 133, grammar: "(으)ㄹ 것이 분명하다",
    senses: [{ meaning: "chắc chắn là, rõ ràng là", groupId: "obvious" }],
    synonymPatterns: ["(으)ㄹ 게 뻔하다", "(으)ㄹ 게 틀림없다"],
    ownExamples: [{ sentence: "그가 거짓말을 하고 있는 <b>것이 분명하다</b>.", translation: "Rõ ràng là anh ta đang nói dối." }],
    notes: "khẳng định mạnh; trang trọng hơn 게 뻔하다; thường dùng trong văn viết hoặc lập luận"
  },
  {
    id: 134, grammar: "(으)ㄹ 것이다 + 그런데",
    senses: [{ meaning: "chắc là... (phỏng đoán, kèm ý muốn nói thêm)", groupId: "guess_concern" }],
    synonymPatterns: ["(으)ㄹ 텐데"],
    ownExamples: [{ sentence: "많이 힘들 <b>것인데</b> 잘 버텨 주어서 고마워요.", translation: "Chắc là rất vất vả, cảm ơn vì đã cố gắng chịu đựng." }],
    notes: "kết hợp phỏng đoán + chuyển ý; thường rút gọn thành '(으)ㄹ 텐데' trong văn nói hàng ngày"
  },
  {
    id: 135, grammar: "(으)ㄹ 게 틀림없다",
    senses: [{ meaning: "chắc chắn là, nhất định là (không thể sai)", groupId: "obvious" }],
    synonymPatterns: ["(으)ㄹ 게 뻔하다", "(으)ㄹ 것이 분명하다"],
    ownExamples: [{ sentence: "열심히 준비했으니 성공할 <b>게 틀림없어요</b>.", translation: "Đã chuẩn bị kỹ như vậy, nhất định sẽ thành công thôi." }],
    notes: "nhấn mạnh xác suất gần như chắc chắn 100%; thường mang sắc thái tích cực hơn 게 뻔하다"
  },
  {
    id: 136, grammar: "(으)ㄹ 겸",
    senses: [{ meaning: "vừa để... vừa để... (tiện thể)", groupId: "opportune" }],
    synonymPatterns: ["는 김에"],
    ownExamples: [{ sentence: "운동도 할 <b>겸</b> 산책도 할 <b>겸</b> 공원에 나갔어요.", translation: "Vừa để tập thể dục vừa để đi dạo, tôi ra công viên." }],
    notes: "diễn đạt hai mục đích cùng lúc; thường lặp 2 lần 'V겸 V겸' hoặc 'V겸 N도 할 겸'"
  },
  {
    id: 137, grammar: "(으)ㄹ 능력이 있다",
    senses: [{ meaning: "có năng lực, có khả năng (làm gì)", groupId: "ability" }],
    synonymPatterns: ["(으)ㄹ 수 있다"],
    ownExamples: [{ sentence: "그는 어떤 문제든 해결할 <b>능력이 있다</b>.", translation: "Anh ấy có năng lực giải quyết bất kỳ vấn đề nào." }],
    notes: "trang trọng hơn (으)ㄹ 수 있다; nhấn mạnh năng lực/tài năng của chủ thể"
  },
  {
    id: 138, grammar: "(으)ㄹ 때까지",
    senses: [{ meaning: "cho đến khi, đến tận lúc", groupId: "extent" }],
    synonymPatterns: ["도록"],
    ownExamples: [{ sentence: "네가 올 <b>때까지</b> 기다릴게.", translation: "Tôi sẽ đợi cho đến khi bạn đến." }],
    notes: "giới hạn thời điểm kết thúc; khác 도록 (mục đích/mức độ)"
  },
  {
    id: 139, grammar: "(으)ㄹ 때마다",
    senses: [{ meaning: "mỗi khi, hễ khi nào", groupId: "whenever" }],
    synonymPatterns: ["기만 하면", "마다"],
    ownExamples: [{ sentence: "그 노래를 들을 <b>때마다</b> 눈물이 나요.", translation: "Mỗi khi nghe bài hát đó là tôi lại rơi nước mắt." }],
    notes: "gắn sau động từ; tương đương 기만 하면 về nghĩa nhưng cú pháp khác"
  },
  {
    id: 140, grammar: "(으)ㄹ 바에는",
    senses: [{ meaning: "thà... còn hơn (nếu phải làm điều không muốn)", groupId: "preference" }],
    synonymPatterns: ["(으)ㄹ 바에야", "느니 (차라리)"],
    ownExamples: [{ sentence: "그렇게 억지로 할 <b>바에는</b> 차라리 안 하는 게 낫다.", translation: "Thà không làm còn hơn phải làm ép như vậy." }],
    notes: "biến thể của (으)ㄹ 바에야; nghĩa gần giống nhau, 바에는 nhấn mạnh điều kiện hơn"
  },
  {
    id: 141, grammar: "(으)ㄹ 정도이다",
    senses: [{ meaning: "đến mức, đến nỗi", groupId: "extent" }],
    synonymPatterns: ["(으)ㄹ 지경이다", "만큼"],
    ownExamples: [{ sentence: "너무 바빠서 밥 먹을 시간도 없을 <b>정도예요</b>.", translation: "Bận đến mức không có thời gian ăn cơm luôn." }],
    notes: "dùng phổ biến hơn 지경이다; ít tiêu cực hơn; dùng được cả tình huống tốt lẫn xấu"
  },
  {
    id: 142, grammar: "(으)ㄹ 지경으로",
    senses: [{ meaning: "đến mức/nỗi (dùng làm trạng từ)", groupId: "extent" }],
    synonymPatterns: ["(으)ㄹ 정도로"],
    ownExamples: [{ sentence: "쓰러질 <b>지경으로</b> 일을 했어요.", translation: "Tôi đã làm việc đến mức gần ngã ra luôn." }],
    notes: "dạng trạng từ của 지경이다; bổ nghĩa cho động từ ở vế sau; mang tính cực đoan, tiêu cực"
  },
  {
    id: 143, grammar: "(으)ㄹ 필요가 없다",
    senses: [{ meaning: "không cần phải, chẳng cần", groupId: "no_need" }],
    synonymPatterns: ["(으)ㄹ 나위가 없다", "말할 것도 없다"],
    ownExamples: [{ sentence: "다 아는 사실이니까 설명할 <b>필요가 없어요</b>.", translation: "Ai cũng biết sự thật đó rồi nên không cần giải thích nữa." }],
    notes: "chỉ sự không cần thiết của hành động; tự nhiên hơn 나위가 없다 trong văn nói"
  },
  {
    id: 144, grammar: "(으)ㄹ세라",
    senses: [{ meaning: "vì sợ rằng... (e ngại lo lắng)", groupId: "worry" }],
    synonymPatterns: ["(으)ㄹ까 봐(서)"],
    ownExamples: [{ sentence: "아이가 다칠 <b>세라</b> 항상 손을 꼭 잡았다.", translation: "Luôn nắm chặt tay vì sợ con bị thương." }],
    notes: "văn viết/cổ điển hơn (으)ㄹ까 봐; thường xuất hiện trong văn học, bài thi"
  },
  {
    id: 145, grammar: "(으)니까 (khi dùng giữa câu + mệnh lệnh)",
    senses: [{ meaning: "vì... nên (đưa ra lý do cho mệnh lệnh)", groupId: "reason" }],
    synonymPatterns: ["(으)니까"],
    ownExamples: [{ sentence: "비가 오니까 우산을 챙기세요.", translation: "Vì trời mưa nên hãy mang theo ô nhé." }],
    notes: "đây là cách dùng đặc trưng của 니까: dùng được trước mệnh lệnh/rủ rê, khác 아/어서 không dùng được trước mệnh lệnh"
  },
  {
    id: 146, grammar: "(으)면 하다",
    senses: [{ meaning: "mong rằng, ước rằng", groupId: "wish" }],
    synonymPatterns: ["(으)면 좋겠다"],
    ownExamples: [{ sentence: "빨리 나았으면 해요.", translation: "Tôi mong bạn mau hồi phục." }],
    notes: "tương đương (으)면 좋겠다; ngắn gọn hơn trong văn nói; thường dùng kèm 았/었으면 hào"
  },
  {
    id: 147, grammar: "ㄴ/은 데 반해",
    senses: [{ meaning: "trong khi đó, trái lại (so sánh đối lập)", groupId: "opposite" }],
    synonymPatterns: ["(으)ㄴ/는 반면에"],
    ownExamples: [{ sentence: "언니는 키가 큰 <b>데 반해</b> 동생은 작아요.", translation: "Chị thì cao, trong khi đó em thì lại thấp." }],
    notes: "tương đương (으)ㄴ/는 반면에; nhấn mạnh sự tương phản rõ nét giữa hai vế"
  },
  {
    id: 148, grammar: "것 같아서",
    senses: [{ meaning: "vì sợ rằng, vì lo rằng (dùng làm lý do)", groupId: "worry" }],
    synonymPatterns: ["(으)ㄹ까 봐(서)"],
    ownExamples: [{ sentence: "늦을 <b>것 같아서</b> 일찍 출발했어요.", translation: "Vì sợ trễ nên tôi xuất phát sớm." }],
    notes: "dùng khi hành động phòng tránh đã diễn ra; tương đương (으)ㄹ까 봐 nhưng tự nhiên hơn trong văn nói"
  },
  {
    id: 149, grammar: "것은 물론이고",
    senses: [{ meaning: "không những...mà còn, ...là đương nhiên, còn thêm...", groupId: "addition" }],
    synonymPatterns: ["(으)ㄹ 뿐만 아니라", "ㄴ/은 데다가", "거니와"],
    ownExamples: [{ sentence: "한국어는 <b>물론이고</b> 일본어도 잘해요.", translation: "Không chỉ tiếng Hàn, tiếng Nhật cũng giỏi luôn." }],
    notes: "A는 물론이고 B: A đã là đương nhiên, B còn thêm vào; mạnh hơn 뿐만 아니라"
  },
  {
    id: 150, grammar: "것처럼 행동하다",
    senses: [{ meaning: "hành động như thể là, làm như là", groupId: "pretend" }],
    synonymPatterns: ["(으)ㄴ/는 척하다", "체하다"],
    ownExamples: [{ sentence: "그는 모든 것을 다 아는 <b>것처럼 행동했다</b>.", translation: "Anh ta hành động như thể biết tất cả mọi thứ." }],
    notes: "diễn đạt hành vi giả vờ; ít cố định hơn 척하다; thường dùng trong mô tả văn học"
  },
  {
    id: 151, grammar: "고",
    senses: [{ meaning: "trong khi, với trạng thái (giữ nguyên)", groupId: "state" }],
    synonymPatterns: ["(으)ㄴ 채(로)"],
    ownExamples: [{ sentence: "신발을 신고 들어왔어요.", translation: "Bước vào trong khi vẫn còn đi giày." }],
    notes: "dạng đơn giản của채로; 고 mang nghĩa thứ tự hoặc đồng thời; khi chỉ trạng thái gần với 채로"
  },
  {
    id: 152, grammar: "고 나서야",
    senses: [{ meaning: "mãi đến sau khi... mới, chỉ sau khi... mới", groupId: "sequence" }],
    synonymPatterns: ["(으)ㄴ 후에", "고 나서"],
    ownExamples: [{ sentence: "설명을 듣 <b>고 나서야</b> 이해할 수 있었어요.", translation: "Mãi đến sau khi nghe giải thích mới hiểu được." }],
    notes: "nhấn mạnh việc kết quả chỉ xảy ra SAU KHI hoàn tất hành động; 야 tạo sắc thái 'mãi mới'"
  },
  {
    id: 153, grammar: "고 말다",
    senses: [{ meaning: "cuối cùng đã lỡ làm, rốt cuộc đã (tiêu cực)", groupId: "completion" }],
    synonymPatterns: ["아/어 버리다"],
    ownExamples: [{ sentence: "참으려고 했는데 결국 울 <b>고 말았다</b>.", translation: "Định nhịn nhưng cuối cùng vẫn cứ khóc." }],
    notes: "diễn đạt kết cục không mong muốn dù đã cố gắng tránh; mang sắc thái tiếc nuối/bất lực"
  },
  {
    id: 154, grammar: "기 위해(서)",
    senses: [{ meaning: "để, nhằm mục đích", groupId: "purpose" }],
    synonymPatterns: ["고자", "(으)려고"],
    ownExamples: [{ sentence: "건강을 유지하 <b>기 위해서</b> 매일 운동해요.", translation: "Để duy trì sức khỏe, tôi tập thể dục mỗi ngày." }],
    notes: "dạng đầy đủ của 기 위해; 기 위해서는 (ID 121) nhấn mạnh điều kiện; thường dùng khi chủ ngữ 2 vế giống nhau"
  },
  {
    id: 155, grammar: "기 일쑤이다",
    senses: [{ meaning: "hay bị, thường xuyên (xảy ra điều xấu)", groupId: "likely" }],
    synonymPatterns: ["기 십상이다", "곤 하다"],
    ownExamples: [{ sentence: "그는 약속을 잊어버리 <b>기 일쑤예요</b>.", translation: "Anh ấy hay quên hẹn lắm." }],
    notes: "thường kết quả tiêu cực; nhấn mạnh tần suất cao của lỗi/thói quen xấu; gần nghĩa 기 십상이다"
  },
  {
    id: 156, grammar: "기가 바쁘게",
    senses: [{ meaning: "vừa mới... đã ngay lập tức", groupId: "immediate" }],
    synonymPatterns: ["자마자", "기가 무섭게"],
    ownExamples: [{ sentence: "집에 들어오 <b>기가 바쁘게</b> 쓰러졌어요.", translation: "Vừa mới bước vào nhà đã ngã xuống luôn." }],
    notes: "tương đương 기가 무섭게; gần nghĩa tự마자; nhấn mạnh tốc độ cực nhanh ngay tức thì"
  },
  {
    id: 157, grammar: "기만 하면",
    senses: [{ meaning: "hễ, chỉ cần (làm gì thì kết quả luôn xảy ra)", groupId: "whenever" }],
    synonymPatterns: ["마다", "(으)ㄹ 때마다"],
    ownExamples: [{ sentence: "그 사람 생각을 하 <b>기만 하면</b> 눈물이 나요.", translation: "Hễ cứ nghĩ đến người đó là nước mắt lại rơi." }],
    notes: "vế sau diễn đạt kết quả tất yếu; gắn sau động từ; mạnh hơn 때마다 về tính tất yếu"
  },
  {
    id: 158, grammar: "기에 달려 있다",
    senses: [{ meaning: "phụ thuộc vào cách làm, tùy vào việc", groupId: "depend" }],
    synonymPatterns: ["기 나름이다", "에 달려 있다"],
    ownExamples: [{ sentence: "성공은 얼마나 노력하느냐에 <b>달려 있어요</b>.", translation: "Thành công phụ thuộc vào việc bạn nỗ lực bao nhiêu." }],
    notes: "gắn sau cụm câu hỏi gián tiếp (얼마나/어떻게 + V느냐에); tương đương 기 나름이다"
  },
  {
    id: 159, grammar: "나름이다",
    senses: [{ meaning: "tùy, phụ thuộc vào (cách nhìn nhận)", groupId: "depend" }],
    synonymPatterns: ["기 나름이다", "에 달려 있다"],
    ownExamples: [{ sentence: "행복은 마음 <b>나름이에요</b>.", translation: "Hạnh phúc tùy thuộc vào suy nghĩ của mỗi người." }],
    notes: "dạng ngắn gọn; N 나름이다 = tùy vào N; gắn sau danh từ"
  },
  {
    id: 160, grammar: "노라면",
    senses: [{ meaning: "cứ làm mãi thì (sẽ có kết quả tương lai)", groupId: "future_result" }],
    synonymPatterns: ["다 보면", "다가보면"],
    ownExamples: [{ sentence: "계속 연습하 <b>노라면</b> 언젠가는 잘하게 될 거예요.", translation: "Cứ kiên trì luyện tập thì rồi sẽ giỏi thôi." }],
    notes: "văn viết hơn 다 보면; nhấn mạnh quá trình liên tục → kết quả tương lai"
  },
  {
    id: 161, grammar: "느니 (차라리)",
    senses: [{ meaning: "thà... còn hơn (bất mãn, không muốn)", groupId: "preference" }],
    synonymPatterns: ["(으)ㄹ 바에야", "(으)ㄹ 바에는"],
    ownExamples: [{ sentence: "이렇게 사느니 차라리 포기하겠어요.", translation: "Thà từ bỏ còn hơn sống như thế này." }],
    notes: "mang sắc thái chán nản/bất mãn mạnh hơn (으)ㄹ 바에야; vế sau thường có 차라리"
  },
  {
    id: 162, grammar: "는 것과 같이",
    senses: [{ meaning: "giống như, theo như (so sánh tương đồng)", groupId: "like_as" }],
    synonymPatterns: ["는 대로", "것처럼"],
    ownExamples: [{ sentence: "선생님이 말씀하신 <b>것과 같이</b> 연습이 중요합니다.", translation: "Như thầy đã nói, luyện tập là điều quan trọng." }],
    notes: "dùng khi so sánh hoặc trích dẫn; trang trọng; thường trong văn viết học thuật"
  },
  {
    id: 163, grammar: "는 것처럼",
    senses: [{ meaning: "như là, giống như đang", groupId: "like_as" }],
    synonymPatterns: ["것처럼", "듯이"],
    ownExamples: [{ sentence: "그는 아무 일도 없었던 <b>것처럼</b> 행동했다.", translation: "Anh ta hành động như thể không có chuyện gì xảy ra." }],
    notes: "so sánh trạng thái hoặc cách thức; kết hợp phổ biến với 마치 để nhấn mạnh"
  },
  {
    id: 164, grammar: "는 바와 같이",
    senses: [{ meaning: "như đã (trình bày/nêu), theo như đã", groupId: "like_as" }],
    synonymPatterns: ["것처럼", "V-다시피"],
    ownExamples: [{ sentence: "위에서 설명한 <b>바와 같이</b> 이 방법은 효과적이에요.", translation: "Như đã giải thích ở trên, phương pháp này rất hiệu quả." }],
    notes: "văn viết trang trọng; dùng khi trích dẫn lại nội dung đã đề cập; phổ biến trong báo cáo, luận văn"
  },
  {
    id: 165, grammar: "는 탓에",
    senses: [{ meaning: "do nguyên nhân mà, tại vì", groupId: "reason" }],
    synonymPatterns: ["ㄴ/은 탓에", "는 바람에"],
    ownExamples: [{ sentence: "비가 오는 <b>탓에</b> 행사가 취소됐어요.", translation: "Do trời mưa nên sự kiện bị hủy." }],
    notes: "dạng hiện tại của 탓에; kết quả luôn tiêu cực; khác 는 바람에 ở chỗ 바람에 = bất ngờ, 탓에 = đổ lỗi"
  },
  {
    id: 166, grammar: "다 보면",
    senses: [{ meaning: "cứ làm mãi thì (rồi sẽ)", groupId: "future_result" }],
    synonymPatterns: ["다가보면", "노라면"],
    ownExamples: [{ sentence: "계속 공부하 <b>다 보면</b> 늘게 될 거예요.", translation: "Cứ học mãi thì sẽ tiến bộ thôi." }],
    notes: "biến thể rút gọn của 다가 보면; thường dùng trong văn nói; kết quả ở tương lai"
  },
  {
    id: 167, grammar: "다기에",
    senses: [{ meaning: "vì nghe nói rằng..., vì bảo rằng... (lý do gián tiếp)", groupId: "reason" }],
    synonymPatterns: ["다길래", "ㄴ/는다기에/길래"],
    ownExamples: [{ sentence: "맛있 <b>다기에</b> 직접 와 봤어요.", translation: "Nghe bảo ngon nên tôi đến thử trực tiếp." }],
    notes: "rút gọn từ 다고 하기에; diễn đạt lý do dựa trên thông tin nghe được từ người khác"
  },
  {
    id: 168, grammar: "다길래",
    senses: [{ meaning: "vì nghe bảo rằng... (lý do nghe nói)", groupId: "reason" }],
    synonymPatterns: ["다기에", "ㄴ/는다기에/길래"],
    ownExamples: [{ sentence: "할인한 <b>다길래</b> 사러 왔어요.", translation: "Nghe bảo đang giảm giá nên đến mua." }],
    notes: "rút gọn từ 다고 하길래; thường hàm ý phản ứng/hành động sau khi nghe thông tin đó"
  },
  {
    id: 169, grammar: "다름이다",
    senses: [{ meaning: "chẳng qua chỉ là, không gì khác ngoài", groupId: "only" }],
    synonymPatterns: ["에 불과하다", "(으)ㄹ 뿐이다"],
    ownExamples: [{ sentence: "이건 그냥 오해에서 비롯된 <b>다름이 없어요</b>.", translation: "Cái này chẳng qua chỉ là xuất phát từ hiểu lầm thôi." }],
    notes: "thường dùng dạng '다름이 없다' = không gì khác; trang trọng hơn 뿐이다"
  },
  {
    id: 170, grammar: "려고 했다",
    senses: [{ meaning: "đã định (làm gì đó)", groupId: "intention" }],
    synonymPatterns: ["(으)려고 하다", "(으)려던 참이다"],
    ownExamples: [{ sentence: "전화하 <b>려고 했는데</b> 바빠서 못 했어요.", translation: "Định gọi điện nhưng bận quá nên không gọi được." }],
    notes: "dạng quá khứ của 려고 하다; thường ngụ ý kế hoạch bị gián đoạn hoặc chưa thực hiện được"
  },
  {
    id: 171, grammar: "말할 것도 없다",
    senses: [{ meaning: "không cần phải nói, đương nhiên rồi", groupId: "no_need" }],
    synonymPatterns: ["(으)ㄹ 나위가 없다", "(으)ㄹ 필요가 없다"],
    ownExamples: [{ sentence: "건강이 중요하다는 것은 <b>말할 것도 없어요</b>.", translation: "Việc sức khỏe là quan trọng thì đương nhiên khỏi phải nói rồi." }],
    notes: "diễn đạt điều hiển nhiên, ai cũng biết; thường đứng đầu hoặc cuối mệnh đề"
  },
  {
    id: 172, grammar: "면 바로",
    senses: [{ meaning: "hễ... thì ngay lập tức", groupId: "immediate" }],
    synonymPatterns: ["자마자", "기가 무섭게"],
    ownExamples: [{ sentence: "신호가 바뀌 <b>면 바로</b> 출발하세요.", translation: "Hễ đèn chuyển thì xuất phát ngay lập tức." }],
    notes: "nhấn mạnh tốc độ tức thì của phản ứng; ít trang trọng hơn 자마자; phổ biến trong văn nói"
  },
  {
    id: 173, grammar: "뿐만 아니라",
    senses: [{ meaning: "không chỉ... mà còn (liệt kê thêm)", groupId: "addition" }],
    synonymPatterns: ["(으)ㄹ 뿐만 아니라", "ㄴ/은 데다가", "거니와"],
    ownExamples: [{ sentence: "그 사람은 노래를 잘할 <b>뿐만 아니라</b> 춤도 잘 춰요.", translation: "Người đó không chỉ hát hay mà còn nhảy giỏi nữa." }],
    notes: "dạng đứng độc lập (không kèm động từ); tương đương hoàn toàn với (으)ㄹ 뿐만 아니라"
  },
  {
    id: 174, grammar: "아/어야 되다",
    senses: [{ meaning: "phải, cần phải làm", groupId: "obligation" }],
    synonymPatterns: ["아/어야 하다"],
    ownExamples: [{ sentence: "지금 바로 출발해야 <b>돼요</b>.", translation: "Phải xuất phát ngay bây giờ thôi." }],
    notes: "hoàn toàn tương đương 아/어야 하다 trong văn nói; 되다 được dùng phổ biến hơn trong hội thoại"
  },
  {
    id: 175, grammar: "아/어야만 했다",
    senses: [{ meaning: "đã buộc phải, đã đành phải (quá khứ)", groupId: "no_choice" }],
    synonymPatterns: ["(으)ㄹ 수밖에 없다", "지 않을 수 없었다"],
    ownExamples: [{ sentence: "돈이 없어서 걸어가야만 <b>했어요</b>.", translation: "Không có tiền nên đã đành phải đi bộ." }],
    notes: "dạng quá khứ của 아/어야 하다; thêm 만 để nhấn mạnh tính bắt buộc không có lựa chọn"
  },
  {
    id: 176, grammar: "아서/어서",
    senses: [{ meaning: "vì (lý do), nên (kết quả)", groupId: "reason" }],
    synonymPatterns: ["기 때문에", "(으)니까"],
    ownExamples: [{ sentence: "배가 고파 <b>서</b> 밥을 먹었어요.", translation: "Vì đói nên tôi ăn cơm." }],
    notes: "dạng cơ bản nhất chỉ nguyên nhân; không dùng với mệnh lệnh/rủ rê; không gắn thì quá khứ trực tiếp"
  },
  {
    id: 177, grammar: "아서/어서 그런지",
    senses: [{ meaning: "có lẽ vì... nên (phỏng đoán nguyên nhân)", groupId: "reason" }],
    synonymPatterns: ["(으)ㄴ/는 지 (모르다)", "(으)니까"],
    ownExamples: [{ sentence: "잠을 못 자서 <b>그런지</b> 피곤해요.", translation: "Có lẽ vì không ngủ được nên tôi thấy mệt." }],
    notes: "dùng khi không chắc chắn về nguyên nhân; phỏng đoán nhẹ; thường đi kèm '그런지'"
  },
  {
    id: 178, grammar: "았/었는데",
    senses: [{ meaning: "vốn đã... nhưng (tương phản), nhưng mà (chuyển ý)", groupId: "contrast" }],
    synonymPatterns: ["더니", "(으)ㄴ/는데도"],
    ownExamples: [{ sentence: "열심히 공부했 <b>는데</b> 시험을 못 봤어요.", translation: "Đã học hết sức nhưng thi không tốt." }],
    notes: "dạng quá khứ của 는데; diễn đạt sự tương phản giữa kỳ vọng và thực tế"
  },
  {
    id: 179, grammar: "어/아 놓은 채로",
    senses: [{ meaning: "trong trạng thái đã làm sẵn rồi mà vẫn cứ vậy", groupId: "state" }],
    synonymPatterns: ["(으)ㄴ 채(로)", "아/어 놓다"],
    ownExamples: [{ sentence: "창문을 열어 <b>놓은 채로</b> 잠이 들었어요.", translation: "Đã mở cửa sổ rồi mà vẫn cứ ngủ như vậy." }],
    notes: "kết hợp 아/어 놓다 + 채로; nhấn mạnh trạng thái đã chuẩn bị sẵn được duy trì"
  },
  {
    id: 180, grammar: "어서/아서",
    senses: [{ meaning: "vì bất ngờ xảy ra nên (nguyên nhân bất ngờ)", groupId: "reason" }],
    synonymPatterns: ["는 바람에", "기 때문에"],
    ownExamples: [{ sentence: "갑자기 비가 와 <b>서</b> 우산이 없어서 다 젖었어요.", translation: "Vì trời bất ngờ mưa nên không có ô, bị ướt hết." }],
    notes: "cùng dạng với 아서/어서 (ID 177) nhưng ngữ cảnh dùng nhấn mạnh vào bất ngờ; tương đương 는 바람에"
  },
  {
    id: 181, grammar: "었는데도",
    senses: [{ meaning: "dù đã làm rồi nhưng vẫn (tương phản quá khứ)", groupId: "contrast" }],
    synonymPatterns: ["고도", "(으)ㄴ/는데도"],
    ownExamples: [{ sentence: "밥을 먹 <b>었는데도</b> 아직 배가 고파요.", translation: "Đã ăn rồi mà vẫn còn đói." }],
    notes: "dạng quá khứ của 는데도; nhấn mạnh sự trái kỳ vọng sau khi hành động đã hoàn tất"
  },
  {
    id: 182, grammar: "에 지나지 않다",
    senses: [{ meaning: "chẳng qua chỉ là, không hơn gì là", groupId: "only" }],
    synonymPatterns: ["에 불과하다", "(으)ㄹ 뿐이다"],
    ownExamples: [{ sentence: "그건 핑계에 <b>지나지 않아요</b>.", translation: "Cái đó chẳng qua chỉ là cái cớ thôi." }],
    notes: "tương đương 에 불과하다; văn viết; gắn sau danh từ + 에"
  },
  {
    id: 183, grammar: "은/는 말할 것도 없고",
    senses: [{ meaning: "...là đương nhiên rồi, còn...", groupId: "neg_escalation" }],
    synonymPatterns: ["은/는커녕", "은/는 물론이고"],
    ownExamples: [{ sentence: "영어는 <b>말할 것도 없고</b> 한국어도 잘해요.", translation: "Tiếng Anh đương nhiên rồi, tiếng Hàn cũng giỏi luôn." }],
    notes: "A는 말할 것도 없고 B: A hiển nhiên, B còn bổ sung thêm; dùng cả chiều tích cực lẫn tiêu cực"
  },
  {
    id: 184, grammar: "은/는 물론이고",
    senses: [{ meaning: "...là đương nhiên, ngoài ra còn...", groupId: "neg_escalation" }],
    synonymPatterns: ["은/는커녕", "것은 물론이고"],
    ownExamples: [{ sentence: "시간은 <b>물론이고</b> 돈도 없어요.", translation: "Thời gian là đương nhiên rồi, tiền cũng không có nốt." }],
    notes: "tương đương 것은 물론이고; dùng được cả nghĩa tích cực và tiêu cực; khác 커녕 (chỉ tiêu cực)"
  },

  {
    id: 186, grammar: "지 않을 수 없었다",
    senses: [{ meaning: "không thể không làm, đã buộc phải (quá khứ)", groupId: "no_choice" }],
    synonymPatterns: ["(으)ㄹ 수밖에 없다", "아/어야만 했다"],
    ownExamples: [{ sentence: "그 말을 듣고 웃지 않을 수 <b>없었어요</b>.", translation: "Nghe câu đó xong không thể không cười được." }],
    notes: "dạng quá khứ của 지 않을 수 없다; nhấn mạnh không có lựa chọn nào khác"
  },
  {
    id: 187, grammar: "지도 몰라서",
    senses: [{ meaning: "vì biết đâu... (đề phòng, lo ngại)", groupId: "worry" }],
    synonymPatterns: ["(으)ㄹ까 봐(서)", "(으)ㄹ세라"],
    ownExamples: [{ sentence: "비가 올 <b>지도 몰라서</b> 우산을 챙겼어요.", translation: "Vì biết đâu trời mưa nên tôi đã mang theo ô." }],
    notes: "diễn đạt hành động đề phòng; kết hợp (으)ㄹ지도 모르다 + 아서; nhẹ hơn까 봐"
  },
  {
    id: 188, grammar: "기 때문에",
    senses: [{ meaning: "vì, do (lý do khách quan)", groupId: "reason" }],
    synonymPatterns: ["아서/어서", "(으)니까"],
    ownExamples: [{ sentence: "비가 오 <b>기 때문에</b> 행사를 취소했어요.", translation: "Vì trời mưa nên đã hủy sự kiện." }],
    notes: "chỉ nguyên nhân khách quan; KHÔNG dùng mệnh lệnh/rủ rê ở vế sau; khác 니까 (dùng được mệnh lệnh)"
  },
  {
    id: 189, grammar: "아/어서",
    senses: [{ meaning: "vì, nên (nguyên nhân cơ bản)", groupId: "reason" }],
    synonymPatterns: ["기 때문에", "(으)니까"],
    ownExamples: [{ sentence: "배가 고파 <b>서</b> 밥을 먹었어요.", translation: "Vì đói nên tôi ăn cơm." }],
    notes: "KHÔNG dùng mệnh lệnh/rủ rê; KHÔNG gắn thì quá khứ trực tiếp (았/었어서 ×); cơ bản nhất trong nhóm nguyên nhân"
  },
  {
    id: 190, grammar: "(으)므로",
    senses: [{ meaning: "vì, do (văn viết trang trọng)", groupId: "reason" }],
    synonymPatterns: ["기 때문에", "아/어서"],
    ownExamples: [{ sentence: "시간이 부족하 <b>므로</b> 핵심만 말씀드리겠습니다.", translation: "Vì thời gian không đủ nên tôi sẽ chỉ nói những điểm chính." }],
    notes: "văn viết; CÓ THỂ gắn thì quá khứ/tương lai ở trước (았/었으므로, 겠으므로); thường xuất hiện trong đề thi TOPIK văn viết"
  },
  {
    id: 191, grammar: "거니와",
    senses: [{ meaning: "không những... mà còn (thừa nhận rồi bổ sung)", groupId: "addition" }],
    synonymPatterns: ["(으)ㄹ 뿐만 아니라", "ㄴ/은 데다가"],
    ownExamples: [
      { sentence: "그는 기타도 잘 <b>치거니와</b> 노래 cũng rất hay.", translation: "Anh ấy không những chơi guitar giỏi mà còn hát hay nữa." },
      { sentence: "이 음식은 <b>맛도 있거니와</b> 푸짐해서 좋다.", translation: "Món này không những ngon mà còn đầy đặn nữa nên rất thích." }
    ],
    notes: "văn viết hoặc trang trọng; dùng khi thừa nhận vế trước và bổ sung thêm thông tin vế sau cùng chiều"
  }
];