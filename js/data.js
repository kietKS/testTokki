const synonymGroups = [
  // GUESS (PHỎNG ĐOÁN)
  { id: "guess_general", label: "Phỏng đoán (Hình như/Có vẻ)", grammarIds: [1, 47], nuances: ["• (으)ㄴ/는 것 같다: Phổ biến nhất, đoán chủ quan lẫn khách quan.", "• 는 듯하다: Giống 것 같다 nhưng trang trọng/văn viết."] },
  { id: "guess_observe", label: "Phỏng đoán (Trông có vẻ/Nhìn bề ngoài)", grammarIds: [2, 48, 49], nuances: ["• 아/어 보이다: Nhìn bề ngoài rồi đoán.", "• 나 보다: Đoán dựa trên chứng cứ trực tiếp nghe/thấy.", "• 는 모양이다: Đoán khách quan dựa trên hoàn cảnh."] },
  { id: "guess_doubt", label: "Phỏng đoán (Biết đâu chừng/Có thể)", grammarIds: [7, 122], nuances: ["• (으)ㄹ지도 모르다: Phỏng đoán xác suất rất thấp hoặc lo lắng.", "• (으)ㄹ 수도 있다: Phỏng đoán khả năng xảy ra (nhẹ hơn ㄹ지도 모르다)."] },
  { id: "guess_past_neg", label: "Phỏng đoán (Chắc đã không)", grammarIds: [123], nuances: ["• 지 않았을 것이다: Phủ định trong quá khứ mang tính phỏng đoán."] },

  // PURPOSE (MỤC ĐÍCH)
  { id: "purpose_general", label: "Mục đích (Để)", grammarIds: [4, 50, 70], nuances: ["• 기 위해(서): Chủ ngữ 2 vế ĐỒNG NHẤT.", "• 고자: Giống 기 위해서 nhưng dùng văn viết/trang trọng.", "• (으)려고: Cùng chủ ngữ. KHÔNG dùng mệnh lệnh/rủ rê ở đuôi câu."] },
  { id: "purpose_cause", label: "Mục đích (Để cho / Sai khiến)", grammarIds: [3, 197, 142], nuances: ["• 도록: Nhấn mạnh mức độ hoặc sai khiến 'để cho'.", "• 도록 하다: Khuyên bảo, yêu cầu hoặc thể hiện quyết tâm.", "• 게: Mục đích/kết quả. Tương đương 도록 trong nhiều ngữ cảnh."] },
  { id: "purpose_move", label: "Mục đích (Đi/Đến để)", grammarIds: [71], nuances: ["• (으)러: CHỈ đi với động từ di chuyển (가다, 오다) ở vế sau."] },

  // CONTRAST (TƯƠNG PHẢN)
  { id: "contrast_general", label: "Tương phản (Nhưng / Vậy mà)", grammarIds: [46, 51, 178], nuances: ["• 지만: Đối lập hoàn toàn, cơ bản nhất.", "• 았/었는데: Vốn đã... nhưng (tương phản), nhưng mà (chuyển ý).", "• 더니: Trải nghiệm trong quá khứ dẫn đến kết quả trái ngược hiện tại."] },
  { id: "contrast_unexpected", label: "Tương phản (Mặc dù... trái mong đợi)", grammarIds: [16, 18], nuances: ["• (으)ㄴ/는데도: Mặc dù A (thực tế) nhưng B (trái mong đợi).", "• 고도: Nhấn mạnh sự bất ngờ/chê trách hành động đã hoàn tất.", "• 었는데도: Dạng quá khứ của 는데도."] },
  { id: "contrast_action", label: "Tương phản (Biết mà vẫn làm / Mỉa mai)", grammarIds: [6, 121], nuances: ["• (으)면서(도): 'Biết rõ A nhưng vẫn B' (mỉa mai), cùng chủ ngữ.", "• 고서도: Cố ý bất chấp — đã nhận thức rõ ràng mà vẫn làm, mạnh hơn (으)면서(도)."] },
  { id: "contrast_opposite", label: "Tương phản (So sánh đối lập)", grammarIds: [15, 17, 147, 205], nuances: ["• (으)ㄴ/는 반면에: So sánh 2 mặt đối lập (Trái lại).", "• (으)ㄴ/는 데 반해: Trong khi đó, trái lại.", "• (으)ㄴ/는가 하면: Cùng một chủ thể nhưng có 2 mặt đối lập (Mặt này... mặt kia)."] },

  // CONCESSION (NHƯỢNG BỘ)
  { id: "concession_general", label: "Nhượng bộ (Dù, Cho dù)", grammarIds: [58, 86, 87], nuances: ["• 아/어/여도: Cơ bản nhất.", "• 더라도: Giả định tình huống cực đoan khó xảy ra.", "• (으)ㄹ지라도: Giống 더라도 nhưng văn viết.", "⚠ PHÂN BIỆT: Nhóm này là nhượng bộ trung lập (Dù A xảy ra, vẫn làm B). Khác hoàn toàn với nhóm '아/어 봤자' (Làm A cũng vô ích, kết quả tiêu cực)."] },
  { id: "concession_useless", label: "Nhượng bộ (Dù làm cũng vô ích)", grammarIds: [24, 32, 115, 117, 118], nuances: ["• (나) 마나: Làm cũng vô ích vì biết trước kết quả.", "• 아/어 봐야 / 어/아 봤자: Dù có cố thì kết quả vẫn không đổi.", "⚠ PHÂN BIỆT: Nhóm này luôn mang sắc thái tiêu cực/vô ích. Khác hoàn toàn với '아/어도' (nhượng bộ trung lập)."] },
  { id: "concession_any", label: "Lựa chọn (Hoặc / Bất kể... hay...)", grammarIds: [25], nuances: ["• 든지: Lựa chọn giữa nhiều phương án, không quan trọng chọn cái nào.", "⚠ LƯU Ý: '든지' KHÔNG mang tính giả định nhượng bộ. Không thể dùng lẫn lộn với '아/어도' hay '아/어 봤자'."] },

  // REASON (NGUYÊN NHÂN)
  { id: "reason_general", label: "Nguyên nhân (Cơ bản / Khách quan)", grammarIds: [188, 189, 190], nuances: ["• 아/어서: Cơ bản nhất. KHÔNG dùng mệnh lệnh/rủ rê.", "• 기 때문에: Khách quan. KHÔNG dùng mệnh lệnh/rủ rê.", "• (으)므로: Văn viết trang trọng."] },
  { id: "reason_command", label: "Nguyên nhân (Kèm Mệnh lệnh / Rủ rê)", grammarIds: [80, 81], nuances: ["• (으)니까: DÙNG ĐƯỢC mệnh lệnh/rủ rê. CÓ THỂ chia thì.", "• (으)ㄹ 테니까: Người nói đưa ra cam kết/phỏng đoán làm lý do, vế sau thường là mệnh lệnh."] },
  { id: "reason_negative", label: "Nguyên nhân (Tiêu cực / Đổ lỗi)", grammarIds: [12, 14, 53, 54, 55], nuances: ["• 는 바람에: Bất ngờ → Kết quả TIÊU CỰC.", "• 느라고: Tốn thời gian làm vế 1 nên vế 2 TIÊU CỰC.", "• ㄴ/은 탓에: Đổ lỗi, trách móc → Kết quả TIÊU CỰC.", "• 는 통에: Hoàn cảnh ồn ào, hỗn loạn → Kết quả TIÊU CỰC."] },
  { id: "reason_hearsay", label: "Nguyên nhân (Nghe nói là)", grammarIds: [13], nuances: ["• 다기에 / 다길래: Diễn đạt lý do dựa trên thông tin nghe được từ người khác."] },
  { id: "reason_guess", label: "Nguyên nhân (Phỏng đoán / Có lẽ vì)", grammarIds: [79, 148, 177], nuances: ["• 아서/어서 그런지 / (으)ㄴ/는지 (모르다): Dùng khi không chắc chắn về nguyên nhân; phỏng đoán nhẹ."] },
  { id: "reason_observe", label: "Nguyên nhân (Từ quan sát quá khứ)", grammarIds: [198], nuances: ["• 더니: Trải nghiệm quan sát trong quá khứ dẫn đến kết quả hiện tại."] },

  // CONDITION (ĐIỀU KIỆN)
  { id: "condition_restrict", label: "Điều kiện (Miễn là, Chừng nào còn)", grammarIds: [52, 119], nuances: ["• (으)ㄴ/는 한: Giới hạn phạm vi/tình huống. (VD: 살아있는 한 - Chừng nào còn sống)", "• (으)ㄴ/는 이상: Khẳng định mạnh mẽ sự thật đã xảy ra → dẫn đến kết quả tất yếu. (VD: 시작을 한 이상 - Một khi đã bắt đầu thì...)"] },
  { id: "condition_intent", label: "Điều kiện (Nếu muốn đạt mục tiêu)", grammarIds: [5, 82, 203, 204], nuances: ["• (으)려면 / 고 싶으면: Vế sau PHẢI là mệnh lệnh hoặc lời khuyên.", "• 기 위해서는: Trang trọng hơn (으)려면, mang nghĩa 'Để có thể... thì'."] },
  { id: "condition_general", label: "Giả định (Nếu)", grammarIds: [84, 85], nuances: ["• (으)면 / 다면: Giả định thông thường hoặc giả định điều khó xảy ra."] },
  { id: "geodeun", label: "거든 — Điều kiện / Giải thích", grammarIds: [83], nuances: ["• 거든: Giữa câu (mệnh lệnh) / Cuối câu (giải thích)."] },

  // EXTENT (ĐẾN MỨC)
  { id: "extent_degree", label: "Đến mức độ, Đến nỗi", grammarIds: [26, 56, 114, 141], nuances: ["• 만큼 / (으)ㄹ 정도로: Mức độ tương đương hoặc sự phóng đại.", "• (으)ㄹ 지경이다: Mức độ cực đoan (thường tiêu cực)."] },
  { id: "extent_time", label: "Đến tận khi", grammarIds: [19, 138], nuances: ["• (으)ㄹ 때까지 / 도록: Giới hạn thời điểm kết thúc (đến tận lúc)."] },

  // CÁC NHÓM KHÁC (ĐÃ CHUẨN XÁC)
  { id: "ability", label: "Có thể (Khả năng / Năng lực)", grammarIds: [91, 137, 185], nuances: ["• (으)ㄹ 수 있다: Chỉ năng lực hoặc khả năng xảy ra. KHÔNG phải phỏng đoán.", "⚠ Khi thêm 도 → 수도 있다 mới mang sắc thái phỏng đoán mờ nhạt."] },
  { id: "impossible", label: "Không có lý (Tuyệt đối không)", grammarIds: [8, 124, 125], nuances: ["• (으)ㄹ 리가 없다: Phủ định tuyệt đối khả năng."] },
  { id: "worthy", label: "Đáng để làm", grammarIds: [9, 126], nuances: ["• (으)ㄹ 만하다: Đáng để trải nghiệm, giới thiệu."] },
  { id: "consider_as", label: "Xem như, coi như", grammarIds: [10, 42, 68, 73, 127, 128, 130], nuances: ["• 거나 마찬가지이다: Bản chất giống nhau dù thực tế không hẳn.", "• (으)ㄴ/는 셈 치다: TỰ NHỦ / GIẢ VỜ như vậy để làm việc khác."] },
  { id: "unexpected", label: "Không ngờ rằng", grammarIds: [11, 129], nuances: ["• (으)ㄴ/는 줄 몰랐다: Nhầm tưởng sự thật.", "• (으)ㄴ 줄 알았다: Cứ tưởng là (nhưng không phải)."] },
  { id: "whenever", label: "Hễ, chỉ cần, mỗi khi", grammarIds: [102, 139, 157], nuances: ["• 마다: Gắn sau Danh từ.", "• 기만 하면: Gắn sau Động từ, điều kiện xảy ra thì kết quả luôn đến."] },
  { id: "state", label: "Trạng thái (Vẫn, Đang)", grammarIds: [21, 151, 179], nuances: ["• (으)ㄴ 채(로): Giữ nguyên trạng thái để làm việc khác."] },
  { id: "concurrent_action", label: "Đồng thời (Vừa...vừa...)", grammarIds: [173, 184], nuances: ["• (으)면서: Hai hành động do cùng một chủ thể thực hiện song song.", "• (으)며: Giống (으)면서 nhưng mang sắc thái văn viết/trang trọng."] },
  { id: "addition", label: "Không những...mà còn (Tích cực)", grammarIds: [22, 57, 149, 183, 191, 200], nuances: ["• (으)ㄹ 뿐만 아니라: Không chỉ A mà còn B.", "• (으)ㄴ/는 데다가: Thêm đặc điểm cùng chiều."] },
  { id: "neg_escalation", label: "Chẳng những không...mà còn không", grammarIds: [23], nuances: ["• 은/는커녕: Chiều nghĩa TIÊU CỰC, ngược hoàn toàn với 뿐만 아니라."] },
  { id: "inevitable", label: "Đương nhiên", grammarIds: [27, 59, 60], nuances: ["• 기 마련이다 / 는 법이다: Quy luật tự nhiên, chân lý."] },
  { id: "no_choice", label: "Đành phải, buộc phải", grammarIds: [28, 61, 201], nuances: ["• (으)ㄹ 수밖에 없다 / 지 않을 수 없다: Không còn cách nào khác."] },
  { id: "worry", label: "E rằng, lo lắng", grammarIds: [29, 144], nuances: ["• (으)ㄹ까 봐: Lo sợ vế trước nên ĐÃ phòng tránh ở vế sau."] },
  { id: "immediate", label: "Ngay sau khi", grammarIds: [30, 62, 156, 172, 196], nuances: ["• 자마자: Vừa làm xong A thì B diễn ra.", "• 기가 무섭게: Tốc độ phản xạ cực nhanh."] },
  { id: "on_way", label: "Trên đường, tiện thể", grammarIds: [31], nuances: ["• 는 길에: Đang di chuyển thì tiện thể làm việc khác. CHỈ dùng với động từ di chuyển."] },
  { id: "interrupted", label: "Đang làm thì (bị gián đoạn)", grammarIds: [75], nuances: ["• 다가: Hành động vế 1 đang diễn ra thì bị ngắt hoặc chuyển hướng sang vế 2."] },
  { id: "only", label: "Chỉ là, Chẳng qua là", grammarIds: [33, 63, 103, 169, 182], nuances: ["• 에 불과하다: 'Chẳng qua chỉ là', mức độ thấp (văn viết)."] },
  { id: "regret", label: "Hối tiếc", grammarIds: [34, 64, 92], nuances: ["• 었어야 했는데: Đáng lẽ phải làm.", "• 지 말 걸 그랬다: Hối hận vì ĐÃ lỡ làm.", "• (으)ㄹ걸 그랬다: Hối hận vì ĐÃ KHÔNG làm."] },
  { id: "intention", label: "Định, chuẩn bị", grammarIds: [35, 72, 154], nuances: ["• (으)려던 참이다: Vừa nảy sinh ý định thì có tác động khớp luôn.", "• (으)려고 하다: Kế hoạch mơ hồ, định làm."] },
  { id: "according", label: "Theo như", grammarIds: [36], nuances: ["• 는 대로: Làm y hệt vế trước."] },
  { id: "depend", label: "Phụ thuộc vào", grammarIds: [37, 90], nuances: ["• 에 달려 있다: Phụ thuộc vào Danh từ (N).", "• 기 나름이다: Phụ thuộc vào cách làm (Động từ)."] },
  { id: "pretend", label: "Giả vờ", grammarIds: [38, 69, 150], nuances: ["• 체하다: Giống 척하다 nhưng hay dùng trong văn chương."] },
  { id: "result_of", label: "Cứ...thì (phát hiện kết quả)", grammarIds: [39], nuances: ["• 다가 보니까: Lặp lại hành động liên tục thì nhận ra kết quả."] },
  { id: "like_as", label: "Như, như thể", grammarIds: [40, 65, 111, 162, 163, 164], nuances: ["• 마치 ... 것처럼/듯이: Giống hệt nhau."] },
  { id: "also", label: "Vừa, cũng", grammarIds: [41], nuances: ["• 기도 하고: Liệt kê hai đặc điểm bổ sung cho nhau."] },
  { id: "obvious", label: "Chắc chắn, rõ ràng", grammarIds: [112, 133, 135, 195], nuances: ["• (으)ㄹ 게 뻔하다: Dễ đoán trước, thường tiêu cực.", "• (으)ㄹ 것이 분명하다 / (으)ㄹ 게 틀림없다: Chắc chắn, không thể sai."] },
  { id: "dual", label: "Vừa là...vừa là", grammarIds: [43, 66], nuances: ["• 이자 / 인 동시에: 2 đặc điểm tồn tại song song (AND)."] },
  { id: "likely", label: "Dễ bị, dễ xảy ra", grammarIds: [44, 67], nuances: ["• 기 십상이다 / 기 쉽다: Khả năng cao sẽ xảy ra (dự đoán trong tương lai, thường là kết quả xấu)."] },
  { id: "prepared", label: "Làm sẵn", grammarIds: [45], nuances: ["• 아/어 놓다: Làm xong hành động và duy trì kết quả."] },
  { id: "sequence", label: "Thứ tự, sau đó", grammarIds: [74, 109, 131, 152, 199], nuances: ["• 고 나서 / (으)ㄴ 후에: Nhấn mạnh hoàn tất triệt để vế 1 rồi mới làm vế 2."] },
  { id: "while_time", label: "Trong lúc, trong khi", grammarIds: [101, 105, 106, 159], nuances: ["• -는 사이에: Trong khoảnh khắc/sơ hở. Vế sau là sự thay đổi bất ngờ. Chủ ngữ 2 vế bắt buộc khác nhau.", "• -는 동안: Trong suốt quá trình dài. Hai hành động song song liên tục. Chủ ngữ có thể giống hoặc khác.", "• -는 중에: Trong tiến trình thực hiện giữa chừng. Thường dùng với danh từ hành động (회의 중에).", "• -는 가운데: Trong bối cảnh/tình thế áp lực hoặc trang trọng. Dùng nhiều trong văn báo chí/nghi sự."] },
  { id: "since_time", label: "Kể từ khi...được bao lâu", grammarIds: [76], nuances: ["• (으)ㄴ 지 되다: Đã bao lâu kể từ khi..."] },
  { id: "change_result", label: "Trở nên, được (kết quả do ngoại cảnh)", grammarIds: [99], nuances: ["• 게 되다: Kết quả đạt được do yếu tố bên ngoài tác động, nhấn mạnh ĐIỂM ĐẾN."] },
  { id: "change_process", label: "Dần dần (quá trình tiếp diễn)", grammarIds: [77, 113], nuances: ["• 아/어 가다 / 아/어지다: Sự thay đổi đang diễn ra từ từ, hướng về tương lai. Nhấn mạnh QUÁ TRÌNH."] },
  { id: "completion", label: "Hoàn tất (mất rồi)", grammarIds: [78, 153], nuances: ["• 아/어 버리다 / 고 말다: Kết thúc triệt để (Nhẹ nhõm hoặc Tiếc nuối)."] },
  { id: "progression", label: "Càng...càng", grammarIds: [89], nuances: ["• (으)ㄹ수록: Thường đi kèm (으)면 ở trước."] },
  { id: "almost", label: "Suýt nữa thì", grammarIds: [93], nuances: ["• (으)ㄹ 뻔하다: Việc xấu suýt xảy ra nhưng CHƯA XẢY RA (Luôn dùng quá khứ)."] },
  { id: "experience", label: "Kinh nghiệm", grammarIds: [94], nuances: ["• (으)ㄴ 적이 있다: Từng làm gì đó trong quá khứ."] },
  { id: "habit", label: "Thói quen", grammarIds: [95, 155], nuances: ["• 곤 하다: Thường hay (thói quen, cả tốt/xấu).", "• 기 일쑤이다: Hay bị, thường xuyên (nhấn mạnh sự lặp lại của lỗi/việc tiêu cực)."] },
  { id: "tendency", label: "Khuynh hướng", grammarIds: [96], nuances: ["• 는 편이다: Đánh giá nghiêng về một phía (thuộc dạng...)."] },
  { id: "wish", label: "Mong ước (Ước gì)", grammarIds: [97, 146], nuances: ["• (으)면 좋겠다: Hay đi cùng quá khứ ở trước (았/었/였으면)."] },
  { id: "alternative", label: "Thay thế", grammarIds: [98], nuances: ["• 는 대신(에): Thay thế hoặc bù trừ."] },
  { id: "obligation", label: "Bắt buộc", grammarIds: [100], nuances: ["• 아/어야 하다: Nghĩa vụ phải làm."] },
  { id: "choice", label: "Lựa chọn (Hoặc)", grammarIds: [88], nuances: ["• 거나: Lựa chọn 1 trong 2 khả năng (OR)."] },
  { id: "opportune", label: "Nhân tiện (tiện thể đang làm)", grammarIds: [104, 136], nuances: ["• 는 김에: Nhân cơ hội đang làm A thì tiện làm thêm B. Dùng được với MỌI động từ."] },
  { id: "future_result", label: "Cứ làm liên tục thì sẽ (tương lai)", grammarIds: [107, 160], nuances: ["• 다가보면 / 다 보면: Lặp lại hành động liên tục → kết quả sẽ thay đổi ở TƯƠNG LAI."] },
  { id: "preference", label: "Thà...còn hơn", grammarIds: [108, 161], nuances: ["• (으)ㄹ 바에야: Thà làm B còn hơn phải làm A. Vế trước là điều không muốn; vế sau thường có 차라리."] },
  { id: "no_need_exemption", label: "Không cần phải (miễn trừ)", grammarIds: [143, 192], nuances: ["• (으)ㄹ 필요가 없다: Không cần thiết phải thực hiện hành động.", "• (으)ㄹ 것까지 없다: Không đến mức phải làm — ngụ ý hành động hơi thái quá trong hoàn cảnh đó."] },
  { id: "no_need_obvious", label: "Không cần phải nói / Hiển nhiên rồi", grammarIds: [110, 171], nuances: ["• (으)ㄹ 나위가 없다: Hoàn hảo / tốt đến mức không còn gì để nói thêm.", "• 말할 것도 없다: Hiển nhiên đến mức không cần đề cập vì ai cũng đã biết."] },
  { id: "guess_concern", label: "Phỏng đoán kèm cảm xúc (lo lắng / quan tâm)", grammarIds: [20], nuances: ["• (으)ㄹ 텐데: Phỏng đoán về tình huống + ngụ ý cảm xúc của người nói (lo lắng, tiếc nuối, quan tâm)."] },
  { id: "obvious_skip", label: "Thừa thãi vì quá hiển nhiên / Không cần làm", grammarIds: [116, 193, 194], nuances: ["• (으)ㄹ 것도 없이: Hành động V thừa thãi vì kết quả đã quá hiển nhiên.", "• 굳이 (~지 않아도 되다): Không cần phải cố sức làm điều đó. Nhấn mạnh sự không cần thiết VỀ MẶT NỖ LỰC."] }
];

const grammarData = [
  {
    id: 1, grammar: "(으)ㄴ/는 것 같다",
    senses: [{ meaning: "hình như, có vẻ như, chắc là", groupId: "guess_general" }],
    synonymPatterns: ["는 듯하다", "나 보다", "는 모양이다", "아/어 보이다", "(으)ㄹ지도 모르다", "(으)ㄹ 텐데", "(으)ㄹ 수도 있다"],
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
    senses: [{ meaning: "trông có vẻ", groupId: "guess_observe" }],
    synonymPatterns: ["(으)ㄴ/는 것 같다", "는 모양이다"],
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
    senses: [{ meaning: "để", groupId: "purpose_cause" }],
    synonymPatterns: ["도록", "(으)ㄹ 정도로", "(으)려고", "만큼"],
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
    senses: [{ meaning: "để", groupId: "purpose_general" }],
    synonymPatterns: ["(으)려고", "(으)려면", "(으)러", "도록"],
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
    senses: [{ meaning: "nếu muốn... thì (điều kiện mục tiêu)", groupId: "condition_intent" }],
    synonymPatterns: ["기 위해서", "고 싶으면", "려거든", "자면"],
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
    senses: [{ meaning: "nhưng", groupId: "contrast_action" }],
    synonymPatterns: ["고서도"],
    examples: [
      { sentence: "친구가 곤란할까 봐 그 사실을 <b>알면서</b> 모른 척했다.", translation: "Sợ bạn gặp khó, dù biết chuyện đó nhưng tôi giả vờ không biết." },
      { sentence: "친구가 곤란할까 봐 그 사실을 <b>알고서도</b> 모른 척했다.", translation: "Vì sợ bạn bị khó xử nên dù biết rõ sự thật tôi vẫn giả vờ không hay biết." }
    ], notes: "",
    ownExamples: [
      { sentence: "친구가 곤란할까 봐 그 사실을 <b>알면서</b> 모른 척했다.", translation: "Sợ bạn gặp khó, dù biết chuyện đó nhưng tôi giả vờ không biết." }
    ]
  },
  {
    id: 7, grammar: "(으)ㄹ지도 모르다",
    senses: [{ meaning: "có lẽ, ko biết chừng", groupId: "guess_doubt" }],
    synonymPatterns: ["(으)ㄴ/는 것 같다", "(으)ㄹ 수도 있다", "(으)ㄹ 텐데"],
    examples: [
      { sentence: "예상보다 손님이 많이 와서 준비한 음식이 <b>부족할지도 모른다</b>.", translation: "Khách đến nhiều hơn dự kiến nên không chừng thức ăn chuẩn bị sẽ không đủ." }
    ], notes: "mang sắc thái lo lắng, không chắc chắn (khác với (으)ㄹ 수도 있다 là khả năng trung tính)"
  },
  {
    id: 8, grammar: "(으)ㄹ 리가 없다",
    senses: [{ meaning: "không có lý gì mà, không thể nào", groupId: "impossible" }],
    synonymPatterns: ["(으)ㄹ 리 만무하다", "(으)ㄹ 턱이 없다", "지 않았을 것이다"],
    examples: [
      { sentence: "그는 정직하기 때문에 거짓말을 <b>했을 리가 없다</b>.", translation: "Vì anh ấy thành thật nên không có lý nào lại nói dối cả." },
      { sentence: "그는 정직하기 때문에 거짓말을 <b>했을 리 만무하다</b>.", translation: "Vì anh ấy thành thật nên tuyệt đối không thể nào nói dối." }
    ], notes: ""
  },
  {
    id: 9, grammar: "(으)ㄹ 만하다",
    senses: [{ meaning: "đáng để, xứng đáng để làm", groupId: "worthy" }],
    synonymPatterns: ["(으)ㄹ 가치가 있다", "(으)ㄹ 수 있다"],
    examples: [
      { sentence: "서울 근교에는 가족들과 함께 즐겁게 <b>놀 만한</b> 곳이 많이 있다.", translation: "Vùng ngoại ô Seoul có nhiều nơi đáng đến để vui chơi cùng gia đình." },
      { sentence: "서울 근교에는 가족들과 함께 즐겁게 <b>놀 가치가 있는</b> 곳이 많이 있다.", translation: "Vùng ngoại ô Seoul có nhiều nơi đáng để đến vui chơi cùng gia đình." }
    ], notes: ""
  },
  {
    id: 10, grammar: "(으)ㄴ/는 셈이다",
    senses: [{ meaning: "giống như, xem như, coi như", groupId: "consider_as" }],
    synonymPatterns: ["(으)ㄴ/는 거나 마찬가지이다", "(으)ㄴ/는 거나 다름없다", "(으)ㄴ/는 것과 같다"],
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
    synonymPatterns: ["(으)ㄹ 수도 있다"],
    examples: [
      { sentence: "나는 지난주에 모임이 있어서 이번 주 모임은 <b>있는 줄 몰랐다</b>.", translation: "Tuần trước tôi đã có cuộc họp nên không biết là tuần này vẫn còn có cuộc họp nữa." }
    ], notes: "⚠ Trái nghĩa: (으)ㄴ 줄 알았다 (cứ tưởng là - nhưng thực tế không phải). Hai cấu trúc này đối lập nhau về mặt ý nghĩa, thường xuất hiện trong đề TOPIK để phân biệt."
  },
  {
    id: 12, grammar: "는 바람에",
    senses: [{ meaning: "vì, tại vì", groupId: "reason_negative" }],
    synonymPatterns: ["는 통에", "느라고", "ㄴ/은 탓에"],
    examples: [
      { sentence: "사람들이 하도 <b>떠드는 바람에</b> 친구하고 대화를 할 수가 없었다.", translation: "Mọi người ồn ào quá nên không thể nói chuyện với bạn được." },
      { sentence: "사람들이 하도 <b>떠드는 통에</b> 친구하고 대화를 할 수가 없었다.", translation: "Mọi người ồn ào hỗn loạn khiến không thể nói chuyện với bạn." },
      { sentence: "서둘러 <b>나오는 바람에</b> 지갑을 안 가지고 나왔다.", translation: "Vì vội vàng ra ngoài nên đã không mang theo ví." },
      { sentence: "서둘러 <b>나오느라고</b> 지갑을 안 가지고 나왔다.", translation: "Vì bận vội ra ngoài nên đã không mang theo ví." },
      { sentence: "서둘러 <b>나온 탓에</b> 지갑을 안 가지고 나왔다.", translation: "Tại vì vội vàng ra ngoài nên đã quên mang ví." }
    ], notes: "chỉ dùng cho kết quả tiêu cực và sự kiện bất ngờ, đột xuất (không dùng cho tình trạng kéo dài). (Lưu ý: 아서/어서 cũng chỉ nguyên nhân nhưng không yêu cầu kết quả tiêu cực)"
  },
  {
    id: 13, grammar: "ㄴ/는다기에/길래",
    senses: [{ meaning: "vì nói là, vì bảo là", groupId: "reason_hearsay" }],
    synonymPatterns: ["다고 해서"],
    examples: [
      { sentence: "눈이 피곤할 때 먼 곳을 쳐다보면 효과가 <b>있다기에</b> 해 보는 중이다.", translation: "Nghe bảo khi mắt mỏi mà nhìn xa thì có tác dụng nên đang thử xem." },
      { sentence: "눈이 피곤할 때 먼 곳을 쳐다보면 효과가 <b>있다길래</b> 해 보는 중이다.", translation: "Nghe nói khi mắt mỏi nhìn ra xa thì có tác dụng nên đang thử xem." }
    ], notes: ""
  },
  {
    id: 14, grammar: "(으)ㄴ 나머지",
    senses: [{ meaning: "do...nên", groupId: "reason_negative" }],
    synonymPatterns: ["ㄴ/은 탓에", "(으)ㄴ 통에"],
    examples: [
      { sentence: "나는 그림 작업에 <b>집중한 나머지</b> 중요한 전화를 받지 못했다.", translation: "Vì tập trung vào công việc vẽ quá mức nên tôi đã bỏ lỡ cuộc gọi quan trọng." },
      { sentence: "나는 그림 작업에 <b>집중한 탓에</b> 중요한 전화를 받지 못했다.", translation: "Tại vì tập trung vào công việc vẽ nên đã bỏ lỡ cuộc gọi quan trọng." }
    ], notes: ""
  },
  {
    id: 15, grammar: "(으)ㄴ/는 반면에",
    senses: [{ meaning: "trái lại, ngược lại", groupId: "contrast_opposite" }],
    synonymPatterns: ["(으)ㄴ/는 데 반해", "(으)ㄴ/는가 하면", "기는 하지만"],
    examples: [
      { sentence: "이 제품은 열에 <b>강한 반면에</b> 습기에는 약하다.", translation: "Sản phẩm này chịu nhiệt tốt, ngược lại lại yếu với độ ẩm." },
      { sentence: "이 제품은 열에 <b>강한 데 반해</b> 습기에는 약하다.", translation: "Sản phẩm này chịu nhiệt tốt, trái lại lại yếu với độ ẩm." }
    ], notes: ""
  },
  {
    id: 16, grammar: "(으)ㄴ/는데도",
    senses: [{ meaning: "dù ...nhưng", groupId: "contrast_unexpected" }],
    synonymPatterns: ["지만", "고도", "았/었는데"],
    examples: [
      { sentence: "나는 공부를 열심히 <b>하는데도</b> 성적이 잘 오르지 않는다.", translation: "Dù tôi học chăm chỉ nhưng điểm vẫn không tăng." },
      { sentence: "나는 공부를 열심히 <b>하지만</b> 성적이 잘 오르지 않는다.", translation: "Tôi học chăm chỉ nhưng điểm vẫn không tăng." }
    ], notes: ""
  },
  {
    id: 17, grammar: "(으)ㄴ/는가 하면",
    senses: [{ meaning: "cũng ...nhưng", groupId: "contrast_opposite" }],
    synonymPatterns: ["(으)ㄴ/는 반면에", "기는 하지만"],
    examples: [
      { sentence: "이 영화는 재미있는 부분이 <b>있는가 하면</b> 지루한 부분도 꽤 있다.", translation: "Bộ phim này có những đoạn thú vị, đồng thời cũng có khá nhiều đoạn nhàm chán." },
      { sentence: "이 영화는 재미있는 부분이 <b>있지만</b> 지루한 부분도 꽤 있다.", translation: "Bộ phim này tuy có những đoạn thú vị nhưng cũng có khá nhiều đoạn nhàm chán." }
    ], notes: "dùng để trình bày hai mặt đối lập song song của cùng một chủ thể (mặt này/mặt kia). KHÔNG thay thế tự do cho 지만; mang sắc thái liệt kê hai khía cạnh, không chỉ đối lập đơn thuần"
  },
  {
    id: 18, grammar: "고도",
    senses: [{ meaning: "dù ...nhưng", groupId: "contrast_unexpected" }],
    synonymPatterns: ["(으)ㄴ/는데도", "는데도", "고서도"],
    examples: [
      { sentence: "스마트폰이 복잡해서 그런지 어머니가 설명을 <b>듣고도</b> 모르겠다고 하셨다.", translation: "Có lẽ vì điện thoại thông minh phức tạp nên mẹ bảo dù nghe giải thích vẫn không hiểu." },
      { sentence: "스마트폰이 복잡해서 그런지 어머니가 설명을 <b>들었는데도</b> 모르겠다고 하셨다.", translation: "Có lẽ vì điện thoại thông minh phức tạp, dù mẹ đã nghe giải thích rồi vẫn bảo không hiểu." }
    ], notes: ""
  },
  {
    id: 19, grammar: "도록",
    senses: [{ meaning: "đến tận", groupId: "extent_time" }],
    synonymPatterns: ["(으)ㄹ 때까지", "게"],
    examples: [
      { sentence: "아이는 날이 <b>어두워지도록</b> 아무 연락도 없었다.", translation: "Đứa bé cho đến tận khi trời tối vẫn không có tin tức gì." },
      { sentence: "아이는 날이 <b>어두워질 때까지</b> 아무 연락도 없었다.", translation: "Đứa bé cho đến khi trời tối cũng không có tin tức gì." }
    ], notes: "Có 3 nghĩa: (1) 'đến tận / đến mức' (VD: 밤새도록 - suốt đêm); (2) 'để' - mục đích (VD: 잊지 않도록 메모해요); (3) 'để cho' - sai khiến, khiến ai đó làm gì (VD: 학생들이 조용히 하도록 했다 - Tôi đã khiến học sinh giữ im lặng)"
  },
  {
    id: 197, grammar: "도록",
    senses: [{ meaning: "để (mục đích/sai khiến)", groupId: "purpose_cause" }],
    synonymPatterns: ["게", "고자", "도록 하다", "기 위해서"],
    examples: [
      { sentence: "잊지 않도록 메모하세요.", translation: "Hãy ghi chép để khỏi quên." },
      { sentence: "학생들이 조용히 하도록 했다.", translation: "Tôi đã khiến học sinh giữ im lặng." }
    ], notes: "Ngữ pháp chỉ mục đích hoặc sai khiến (để cho ai đó làm gì)."
  },
  {
    id: 20, grammar: "(으)ㄹ 텐데",
    senses: [{ meaning: "chắc sẽ... (phỏng đoán có cảm xúc)", groupId: "guess_concern" }],
    synonymPatterns: ["(으)ㄴ/는 것 같다", "(으)ㄹ지도 모르다"],
    examples: [
      { sentence: "지금쯤 많이 <b>피곤할 텐데</b> 좀 쉬세요.", translation: "Giờ này chắc mệt lắm rồi, hãy nghỉ ngơi đi." },
      { sentence: "길이 많이 <b>막힐 텐데</b> 일찍 출발하는 게 좋겠어요.", translation: "Chắc đường sẽ kẹt lắm, tốt hơn là xuất phát sớm đi." }
    ], notes: "phỏng đoán về tình huống kèm cảm xúc của người nói (lo lắng, quan tâm, tiếc nuối). ⚠ Khác 것 같다 (phỏng đoán trung tính thuần túy): 텐데 luôn ngụ ý người nói có phản ứng cảm xúc với tình huống. Cũng dùng để lịch sự nêu bối cảnh trước khi nhờ vả/cảm ơn (VD: 바쁘실 텐데 와 주셔서 감사합니다)"
  },
  {
    id: 21, grammar: "(으)ㄴ 채(로)",
    senses: [{ meaning: "giữ nguyên trạng thái mà, vẫn (trong trạng thái)", groupId: "state" }],
    synonymPatterns: ["고", "아/어 놓다", "어/아 놓은 채로"],
    examples: [
      { sentence: "저기 우산을 <b>쓴 채</b> 서 있는 사람이 오늘 소개할 사람이다.", translation: "Người đang đứng kia vẫn che ô chính là người tôi sẽ giới thiệu hôm nay." },
      { sentence: "저기 우산을 <b>쓰고</b> 서 있는 사람이 오늘 소개할 사람이다.", translation: "Người đang đứng kia đang cầm ô chính là người tôi sẽ giới thiệu hôm nay." }
    ], notes: "nghĩa cốt lõi: giữ nguyên trạng thái A mà làm thêm B (không thay đổi trạng thái). ⚠ 고 và 채(로) không phải lúc nào cũng thay thế được; 채(로) nhấn mạnh trạng thái được duy trì"
  },
  {
    id: 22, grammar: "(으)ㄹ 뿐만 아니라",
    senses: [{ meaning: "không những...mà còn", groupId: "addition" }],
    synonymPatterns: ["(으)ㄴ/는 데다가", "(으)ㄴ/는 것은 물론이고", "(으)려니와/거니와", "(으)ㄹ 뿐더러", "은/는 말할 것도 없고"],
    examples: [
      { sentence: "이 식당은 음식 값이 <b>쌀 뿐만 아니라</b> 종업원도 아주 친절하다.", translation: "Nhà hàng này không chỉ giá cả phải chăng mà nhân viên cũng rất thân thiện." },
      { sentence: "이 식당은 음식 값이 <b>싼 데다가</b> 종업원도 아주 친절하다.", translation: "Nhà hàng này giá rẻ mà nhân viên lại còn rất thân thiện." },
      { sentence: "이 식당은 음식 값이 <b>싼 것은 물론이고</b> 종업원도 아주 친절하다.", translation: "Nhà hàng này giá rẻ là đương nhiên rồi, nhân viên cũng rất thân thiện." }
    ], notes: ""
  },
  {
    id: 23, grammar: "은/는커녕",
    senses: [{ meaning: "chẳng những không...mà đến (cái cơ bản) cũng không (phủ định leo thang)", groupId: "neg_escalation" }],
    synonymPatterns: ["는 고사하고", "은/는 물론이고 (+ phủ định)", "은/는 말할 것도 없다"],
    examples: [
      { sentence: "목이 너무 아파서 <b>밥은커녕</b> 물조차 못 마신다.", translation: "Đau họng quá, cơm chẳng nói, đến nước cũng không uống được." },
      { sentence: "목이 너무 아파서 <b>밥은 물론이고</b> 물조차 못 마신다.", translation: "Đau họng quá, cơm đương nhiên rồi, đến nước cũng không uống được." },
      { sentence: "목이 너무 아파서 <b>밥은 말할 것도 없고</b> 물조차 못 마신다.", translation: "Đau họng quá, cơm khỏi nói, đến nước cũng không uống được." }
    ], notes: "⚠ Các ví dụ dùng '물론이고'와 '말할 것도 없고' ở trên chỉ tương đương trong ngữ cảnh tiêu cực. Bình thường 은/는커녕 chỉ dùng cho tiêu cực, còn 물론이고 thường dùng cho tích cực."
  },
  {
    id: 24, grammar: "(나) 마나",
    senses: [{ meaning: "làm gì cũng vô ích, dù...", groupId: "concession_useless" }],
    synonymPatterns: ["어/아 봤자", "아/어 봐야", "아/어 봐도", "본다고 해도"],
    examples: [
      { sentence: "<b>물어보나 마나</b> 동생은 집에 있다고 할 것이다.", translation: "Hỏi làm gì, chắc chắn em sẽ nói là đang ở nhà." },
      { sentence: "<b>물어봤자</b> 동생은 집에 있다고 할 것이다.", translation: "Dù có hỏi thì em cũng sẽ nói là đang ở nhà thôi." },
      { sentence: "<b>물어볼 것도 없이</b> 동생은 집에 있다고 할 것이다.", translation: "Chẳng cần hỏi, em chắc chắn sẽ nói là đang ở nhà." }
    ], notes: ""
  },
  {
    id: 25, grammar: "든지",
    senses: [{ meaning: "hoặc / bất kể... hay...", groupId: "concession_any" }],
    synonymPatterns: [],
    examples: [
      { sentence: "사과를 먹<b>든지</b> 배를 먹<b>든지</b> 마음대로 하세요.", translation: "Ăn táo hay ăn lê gì cũng được, cứ làm theo ý bạn đi." },
      { sentence: "저 사람과 같이 일한다면 뭘 <b>하든지</b> 열심히 하는 사람이면 좋겠다.", translation: "Nếu làm việc cùng người đó thì muốn họ là người bất kể làm gì cũng hết lòng." }
    ], notes: "Bản chất: Dùng để lựa chọn giữa nhiều phương án, không quan trọng chọn cái nào. KHÔNG mang tính giả định nhượng bộ. ⚠ Cực kỳ lưu ý: Tuyệt đối KHÔNG đồng nghĩa với 아/어도 (Nhượng bộ trung lập: Dù A xảy ra vẫn làm B) và KHÔNG đồng nghĩa với 아/어 봤자 (Nhượng bộ tiêu cực: Dù làm A cũng vô ích). Dùng sai logic trong văn viết TOPIK sẽ bị trừ điểm nặng."
  },
  {
    id: 26, grammar: "(으)ㄹ 정도로",
    senses: [{ meaning: "đến mức", groupId: "extent_degree" }],
    synonymPatterns: ["만큼", "게", "(으)ㄹ 지경이다"],
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
    synonymPatterns: ["지 않을 수 없다", "아/어야 하다", "아/어야 할 뿐이다"],
    examples: [
      { sentence: "열이 너무 심하게 나서 병원에 <b>가야만 했다</b>.", translation: "Sốt quá nặng nên đã phải đến bệnh viện." },
      { sentence: "열이 너무 심하게 나서 병원에 <b>가지 않을 수 없었다</b>.", translation: "Sốt quá nặng, không thể không đến bệnh viện." },
      { sentence: "열이 너무 심하게 나서 병원에 <b>갈 수밖에 없었다</b>.", translation: "Sốt quá nặng nên đành phải đến bệnh viện." }
    ], notes: "아/어야만 했다 và 지 않을 수 없었다 là các biến thể đồng nghĩa ở thì quá khứ."
  },
  {
    id: 29, grammar: "(으)ㄹ까 봐(서)",
    senses: [{ meaning: "e rằng, lo sợ rằng", groupId: "worry" }],
    synonymPatterns: ["(으)ㄹ지도 모르다", "(으)ㄹ세라"],
    examples: [
      { sentence: "처음 자전거를 배울 때 <b>넘어질까 봐</b> 걱정했는데 생각보다 쉬웠다.", translation: "Khi mới học đi xe đạp, lo sợ sẽ ngã nhưng thực ra dễ hơn tưởng tượng." },
      { sentence: "처음 자전거를 배울 때 <b>넘어질지도 몰라서</b> 걱정했는데 생각보다 쉬웠다.", translation: "Khi mới học đi xe đạp, vì không chừng sẽ ngã nên tôi đã lo lắng, nhưng thực ra dễ hơn tưởng tượng." }
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
    ], notes: "⚠ 는 대로 = 'ngay khi, vừa làm xong thì làm ngay' (chủ động, có kế hoạch), 자마자 = 'vừa xong thì xảy ra' (tức thì, tự nhiên hơn)."
  },
  {
    id: 31, grammar: "는 길에",
    senses: [{ meaning: "trên đường (đi/về), tiện thể", groupId: "on_way" }],
    synonymPatterns: ["다가", "는 김에"],
    examples: [
      { sentence: "집에 <b>들어오는 길에</b> 꽃이 예뻐서 한 다발을 샀다.", translation: "Trên đường về nhà, thấy hoa đẹp nên tiện mua một bó." },
      { sentence: "집에 <b>들어오다가</b> 꽃이 예뻐서 한 다발을 샀다.", translation: "Đang trên đường về nhà, thấy hoa đẹp nên mua một bó." }
    ], notes: ""
  },
  {
    id: 32, grammar: "아/어 봐야",
    senses: [{ meaning: "dù...thì cũng", groupId: "concession_useless" }],
    synonymPatterns: ["어/아 봤자", "아/어 봐도", "본다고 해도", "(나) 마나"],
    examples: [
      { sentence: "좀 비싼 것 같지만 다른 가게에 <b>가 봐야</b> 값이 다 비슷할 것 같다.", translation: "Tuy có vẻ hơi đắt nhưng có đi cửa hàng khác thì giá cũng tương tự thôi." },
      { sentence: "좀 비싼 것 같지만 다른 가게에 <b>가 봐도</b> 값이 다 비슷할 것 같다.", translation: "Tuy có vẻ hơi đắt nhưng dù thử đến cửa hàng khác thì giá cũng sẽ tương tự." },
      { sentence: "좀 비싼 것 같지만 다른 가게에 <b>가 본다고 해도</b> 값이 다 비슷할 것 같다.", translation: "Tuy có vẻ hơi đắt, nhưng dù có đến cửa hàng khác thì giá cũng đều giống nhau." }
    ], notes: ""
  },
  {
    id: 33, grammar: "(으)ㄹ 뿐이다",
    senses: [{ meaning: "chỉ", groupId: "only" }],
    synonymPatterns: ["(으)ㄹ 따름이다"],
    examples: [
      { sentence: "바빠서 일을 못 끝냈다는 말은 <b>변명일 뿐이다</b>.", translation: "Nói bận nên không làm xong việc chẳng qua chỉ là lời biện hộ." },
      { sentence: "바빠서 일을 못 끝냈다는 말은 <b>변명에 불과하다</b>.", translation: "Nói bận nên không làm xong việc chỉ không hơn gì lời biện hộ." },
      { sentence: "친구에게 항상 도움을 받기만 해서 <b>미안할 뿐이다</b>.", translation: "Chỉ toàn nhận sự giúp đỡ từ bạn nên tôi chỉ thấy áy náy." },
      { sentence: "친구에게 항상 도움을 받기만 해서 <b>미안할 따름이다</b>.", translation: "Chỉ toàn nhận sự giúp đỡ từ bạn nên tôi chỉ biết cảm thấy áy náy mà thôi." }
    ], notes: ""
  },
  {
    id: 34, grammar: "(으)ㄹ걸 그랬다",
    senses: [{ meaning: "\"Đáng lẽ ra mình nên làm...\", \"Biết vậy đã làm...\"", groupId: "regret" }],
    synonymPatterns: ["었어야 했는데"],
    examples: [
      { sentence: "졸업하고 보니 학교 다닐 때 좀 더 열심히 <b>공부할걸 그랬다</b> 생각이 든다.", translation: "Sau khi tốt nghiệp nhìn lại, ước gì hồi đi học đã học chăm hơn." },
      { sentence: "졸업하고 보니 학교 다닐 때 좀 더 열심히 <b>공부했어야 했는데</b> 생각이 든다.", translation: "Sau khi tốt nghiệp nhìn lại, đáng lẽ phải học chăm hơn khi còn đi học." }
    ],
    ownExamples: [
      { sentence: "공부를 더 열심히 <b>할걸 그랬어요</b>.", translation: "Đáng lẽ mình nên học hành chăm chỉ hơn." }
    ],
    notes: "Dùng khi bạn hối hận vì một việc mình đã bỏ lỡ/không làm. Đây là trái nghĩa (về mặt hành động) của -지 말 걸 그랬다."
  },
  {
    id: 35, grammar: "(으)려던 참이다",
    senses: [{ meaning: "định", groupId: "intention" }],
    synonymPatterns: ["(으)려고 하다", "(으)려던 참에"],
    examples: [
      { sentence: "사무실이 너무 더워서 안 그래도 막 에어컨을 <b>켜려던 참이었다</b>.", translation: "Văn phòng nóng quá, vừa đúng lúc đang định bật điều hòa rồi." },
      { sentence: "사무실이 너무 더워서 안 그래도 막 에어컨을 <b>켜려고 했다</b>.", translation: "Văn phòng nóng quá, tôi vừa định bật điều hòa." }
    ], notes: ""
  },
  {
    id: 36, grammar: "는 대로",
    senses: [{ meaning: "theo như, làm y hệt", groupId: "according" }],
    synonymPatterns: ["는 것처럼", "는 바와 같이", "자마자", "기가 무섭게"],
    examples: [
      { sentence: "요가를 배우는데 선생님이 <b>하는 대로</b> 따라 하기가 쉽지 않다.", translation: "Học yoga nhưng làm y hệt theo giáo viên không hề dễ." },
      { sentence: "요가를 배우는데 선생님이 <b>하는 것처럼</b> 따라 하기가 쉽지 않다.", translation: "Học yoga nhưng làm giống như giáo viên không hề dễ." }
    ], notes: "⚠ 는 대로 (Nghĩa 1): 'Theo như / y như' → đồng nghĩa với 는 것처럼, 는 바와 같이."
  },
  {
    id: 196, grammar: "는 대로",
    senses: [{ meaning: "ngay khi, vừa...liền", groupId: "immediate" }],
    synonymPatterns: ["자마자", "기가 무섭게", "면 바로"],
    examples: [
      { sentence: "집에 <b>도착하는 대로</b> 전화해 주세요.", translation: "Vừa về đến nhà thì hãy gọi điện cho tôi ngay nhé." },
      { sentence: "집에 <b>도착하자마자</b> 전화해 주세요.", translation: "Vừa về đến nhà thì gọi điện ngay nhé." }
    ], notes: "⚠ 는 대로 (Nghĩa 2): 'Ngay khi / vừa xong thì' → đồng nghĩa với 자마자. Thường dùng với các kế hoạch, dự định."
  },
  {
    id: 37, grammar: "에 달려 있다",
    senses: [{ meaning: "phụ thuộc vào", groupId: "depend" }],
    synonymPatterns: ["기 나름이다", "기에 달려 있다"],
    examples: [
      { sentence: "똑같은 재료인데도 음식 맛이 다른 건 요리하기<b>에 달려 있다</b>.", translation: "Dù nguyên liệu giống nhau nhưng hương vị khác nhau là phụ thuộc vào cách nấu." },
      { sentence: "똑같은 재료인데도 음식 맛이 다른 건 요리하기 <b>나름이다</b>.", translation: "Dù nguyên liệu giống nhau nhưng hương vị khác nhau là tùy thuộc vào cách nấu." }
    ], notes: "에 달려 있다: gắn sau Danh từ (N에 달려 있다). 기에 달려 있다: gắn sau Động từ (V기에 달려 있다). Hai dạng cùng nghĩa, chỉ khác cú pháp."
  },
  {
    id: 38, grammar: "(으)ㄴ/는 척하다",
    senses: [{ meaning: "giả vờ", groupId: "pretend" }],
    synonymPatterns: ["(으)ㄴ/는 것처럼 행동하다", "(으)ㄴ/는 체하다"],
    examples: [
      { sentence: "회사 동료가 바빠 보였지만 도와주고 싶지 않아서 <b>모르는 척했다</b>.", translation: "Đồng nghiệp có vẻ bận, nhưng vì không muốn giúp nên tôi đã giả vờ không biết." },
      { sentence: "회사 동료가 바빠 보였지만 도와주고 싶지 않아서 <b>모르는 것처럼 행동했다</b>.", translation: "Đồng nghiệp có vẻ bận, nhưng vì không muốn giúp nên tôi hành động như thể không biết." },
      { sentence: "회사 동료가 바빠 보였지만 도와주고 싶지 않아서 <b>모르는 체했다</b>.", translation: "Đồng nghiệp có vẻ bận, nhưng vì không muốn giúp nên tôi đã làm ra vẻ không biết." }
    ], notes: ""
  },
  {
    id: 39, grammar: "다 보니(까)",
    senses: [{ meaning: "cứ...thì", groupId: "result_of" }],
    synonymPatterns: ["ㄴ/은 탓에"],
    examples: [
      { sentence: "바빠서 식사를 제시간에 <b>못 하다가 보니까</b> 속이 쓰릴 때가 많아졌다.", translation: "Vì bận nên cứ ăn không đúng giờ, dần dần hay bị đau dạ dày." },
      { sentence: "바빠서 식사를 제시간에 <b>못 하다 보니까</b> 속이 쓰릴 때가 많아졌다.", translation: "Cứ vì bận mà ăn không đúng giờ, dần dần hay bị đau dạ dày." }
    ], notes: ""
  },
  {
    id: 40, grammar: "듯이",
    senses: [{ meaning: "như, như thể", groupId: "like_as" }],
    synonymPatterns: ["것처럼", "는 것처럼"],
    examples: [
      { sentence: "나라마다 언어가 <b>다르듯이</b> 문화도 다르다.", translation: "Cũng như mỗi quốc gia có ngôn ngữ khác nhau, văn hóa cũng khác nhau." },
      { sentence: "나라마다 언어가 <b>다른 것처럼</b> 문화도 다르다.", translation: "Giống như mỗi quốc gia có ngôn ngữ khác nhau, văn hóa cũng vậy." }
    ], notes: ""
  },
  {
    id: 41, grammar: "기도 하고",
    senses: [{ meaning: "vừa, cũng", groupId: "also" }],
    synonymPatterns: ["(으)며"],
    examples: [
      { sentence: "처음 보는 요리를 <b>배우기도 하고</b> 그걸 먹을 수도 있어서 좋아요.", translation: "Vừa được học những món chưa từng thấy vừa được ăn nên thích lắm." },
      { sentence: "처음 보는 요리를 <b>배우며</b> 그걸 먹을 수도 있어서 좋아요.", translation: "Vừa được học những món chưa từng thấy vừa có thể ăn nên rất thích." }
    ], notes: ""
  },
  {
    id: 42, grammar: "(으)ㄴ/는 셈 치다",
    senses: [{ meaning: "cứ coi như là, xem như là (dù thực tế không phải vậy)", groupId: "consider_as" }],
    synonymPatterns: [],
    ownExamples: [
      { sentence: "<b>버린 셈 치고</b> 친구에게 돈을 빌려줬다.", translation: "Tôi cho bạn mượn tiền mà cứ coi như là đã vứt đi rồi." },
      { sentence: "<b>속는 셈 치고</b> 이 화장품을 한 번 써 보세요.", translation: "Cứ coi như là bị lừa, bạn hãy dùng thử loại mỹ phẩm này một lần xem sao." }
    ],
    notes: "Dùng khi người nói tự huyễn hoặc, giả định hoặc chấp nhận một tình huống không có thực để thực hiện hành động ở vế sau. ⚠ Khác với (으)ㄴ/는 셈이다 (ID 10): 셈이다 là đánh giá/kết luận dựa trên thực tế (A gần bằng B); còn 셈 치다 là cố tình 'tự nhủ' (A hoàn toàn không phải B, nhưng giả vờ là B để làm C). Thường dùng dạng: ~는 셈 치고 (cứ coi như là... rồi làm gì đó)."
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
    synonymPatterns: ["기 쉽다"],
    examples: [
      { sentence: "갑자기 운동을 많이 하면 몸에 이상이 <b>생기기 십상이다</b>.", translation: "Nếu tập thể dục quá nhiều đột ngột thì rất dễ xảy ra vấn đề sức khỏe." },
      { sentence: "갑자기 운동을 많이 하면 몸에 이상이 <b>생기기 쉽다</b>.", translation: "Nếu tập thể dục quá nhiều đột ngột thì dễ xảy ra vấn đề sức khỏe." }
    ], notes: "기 십상이다 = dễ xảy ra (xác suất cao trong tương lai); Khác với 기 일쑤이다 = thói quen lặp đi lặp lại đã xảy ra nhiều lần rồi."
  },
  {
    id: 45, grammar: "아/어 놓다",
    senses: [{ meaning: "sẵn", groupId: "prepared" }],
    synonymPatterns: ["(으)ㄴ 채(로)", "어/아 놓은 채로"],
    examples: [
      { sentence: "내일 일찍 출발해야 해서 짐을 미리 <b>싸 놓았다</b>.", translation: "Vì mai phải đi sớm nên tôi đã đóng hành lý sẵn từ trước." },
      { sentence: "손님이 올 것 같아서 음식을 미리 <b>만들어 놓았다</b>.", translation: "Nghĩ khách sẽ đến nên tôi đã nấu sẵn thức ăn từ trước." }
    ], notes: "nhấn mạnh hành động chuẩn bị sẵn để dùng sau (VD: 미리 예약해 놓다). Khác với 놓은 채로 nhấn mạnh trạng thái duy trì. Hai cái chỉ tương đương trong một số ngữ cảnh cụ thể."
  },
  {
    id: 46, grammar: "더니",
    senses: [{ meaning: "nhưng (tương phản)", groupId: "contrast_general" }],
    synonymPatterns: ["았/었는데"],
    examples: [
      { sentence: "아침에는 비가 오<b>더니</b> 지금은 눈이 와요.", translation: "Sáng trời mưa, vậy mà bây giờ lại có tuyết." },
      { sentence: "아침에는 비가 <b>왔는데</b> 지금은 눈 와요.", translation: "Sáng trời mưa nhưng bây giờ lại có tuyết." }
    ], notes: "Chỉ dùng khi người nói đã TRỰC TIẾP quan sát/trải nghiệm ở quá khứ. Nghĩa tương phản đồng nghĩa với 았/었는데."
  },
  {
    id: 198, grammar: "더니",
    senses: [{ meaning: "nguyên nhân", groupId: "reason_observe" }],
    synonymPatterns: ["아서/어서"],
    examples: [
      { sentence: "매일 운동하<b>더니</b> 건강해졌어요.", translation: "Ngày nào cũng tập thể dục nên giờ đã khỏe ra." }
    ], notes: "Chỉ dùng khi người nói đã TRỰC TIẾP quan sát/trải nghiệm ở quá khứ. Nghĩa nguyên nhân đồng nghĩa với 아서/어서 trong ngữ cảnh quan sát."
  },
  {
    id: 199, grammar: "더니",
    senses: [{ meaning: "thứ tự", groupId: "sequence" }],
    synonymPatterns: ["고 나서"],
    examples: [
      { sentence: "노래를 부르<b>더니</b> 춤도 추기 시작했어요.", translation: "Hát xong rồi bắt đầu nhảy luôn." }
    ], notes: "Chỉ dùng khi người nói đã TRỰC TIẾP quan sát/trải nghiệm ở quá khứ. Nghĩa thứ tự đồng nghĩa với 고 나서."
  },
  {
    id: 47, grammar: "는 듯하다",
    senses: [{ meaning: "hình như, có vẻ như", groupId: "guess_general" }],
    synonymPatterns: ["(으)ㄴ/는 것 같다", "나 보다", "는 모양이다"],
    ownExamples: [
      { sentence: "그는 말이 없는 걸 보니 기분이 <b>안 좋은 듯하다</b>.", translation: "Nhìn anh ấy không nói gì, hình như tâm trạng không tốt." }
    ], notes: "tương đương 것 같다, mang sắc thái văn viết hơn"
  },
  {
    id: 48, grammar: "나 보다",
    senses: [{ meaning: "chắc là (suy đoán từ bằng chứng)", groupId: "guess_observe" }],
    synonymPatterns: ["(으)ㄴ/는 것 같다", "는 듯하다", "는 모양이다"],
    ownExamples: [
      { sentence: "불이 꺼진 걸 보니 다들 집에 <b>갔나 봐요</b>.", translation: "Nhìn đèn tắt hết, chắc mọi người đã về nhà cả rồi." }
    ], notes: "Dùng khi người nói suy đoán từ bằng chứng quan sát được (nghe/thấy kết quả). ⚠ KHÔNG dùng cho chủ ngữ ngôi thứ nhất về chính mình: '친구가 피곤한가 봐요' ✅ (quan sát người khác) / '내가 피곤한가 봐요' ❌ (bản thân mình phải tự biết). Đây là điểm phân biệt hay xuất hiện trong đề TOPIK II"
  },
  {
    id: 49, grammar: "는 모양이다",
    senses: [{ meaning: "có vẻ như, trông có vẻ", groupId: "guess_observe" }],
    synonymPatterns: ["(으)ㄴ/는 것 같다", "나 보다", "는 듯하다", "아/어 보이다"],
    ownExamples: [
      { sentence: "옆집에서 음악 소리가 나는 걸 보니 파티를 <b>하는 모양이다</b>.", translation: "Nghe tiếng nhạc từ nhà hàng xóm, có vẻ họ đang tiệc tùng." }
    ], notes: "suy đoán dựa trên quan sát gián tiếp"
  },
  {
    id: 50, grammar: "(으)려고",
    senses: [{ meaning: "định, để (ý định)", groupId: "purpose_general" }],
    synonymPatterns: ["기 위해서", "게", "고자", "(으)러"],
    ownExamples: [
      { sentence: "건강해지<b>려고</b> 매일 아침 운동을 시작했다.", translation: "Để trở nên khỏe mạnh, tôi bắt đầu tập thể dục mỗi sáng." }
    ], notes: "chủ ngữ câu trước và sau phải giống nhau"
  },
  {
    id: 51, grammar: "지만",
    senses: [{ meaning: "nhưng, tuy nhiên", groupId: "contrast_general" }],
    synonymPatterns: ["(으)ㄴ/는데", "(으)나", "(으)ㄴ/는데도"],
    ownExamples: [
      { sentence: "이 영화는 좀 길<b>지만</b> 내용이 너무 재미있어서 지루하지 않다.", translation: "Bộ phim này hơi dài nhưng nội dung rất thú vị nên không chán." }
    ], notes: "cấu trúc cơ bản nhất để diễn đạt 'nhưng'"
  },
  {
    id: 52, grammar: "(으)ㄴ/는 한",
    senses: [{ meaning: "chừng nào còn, miễn là (điều kiện giới hạn)", groupId: "condition_restrict" }],
    synonymPatterns: ["(으)ㄴ/는 이상", "(으)면"],
    ownExamples: [
      { sentence: "내가 살아있<b>는 한</b> 너를 지킬 거야.", translation: "Chừng nào tôi còn sống, tôi sẽ bảo vệ cậu." },
      { sentence: "열심히 노력하<b>는 한</b> 반드시 좋은 결과가 있을 거예요.", translation: "Miễn là cố gắng hết mình, nhất định sẽ có kết quả tốt." }
    ], notes: "diễn đạt điều kiện giới hạn (trong phạm vi A thì B). ⚠ Khác (으)면 thông thường: (으)ㄴ/는 한 nhấn mạnh giới hạn/phạm vi, còn (으)면 chỉ giả định đơn thuần. Cùng nhóm với (으)ㄴ/는 이상 (mang sắc thái khẳng định mạnh hơn)"
  },
  {
    id: 53, grammar: "는 통에",
    senses: [{ meaning: "vì, tại vì (hỗn loạn)", groupId: "reason_negative" }],
    synonymPatterns: ["는 바람에", "ㄴ/은 탓에", "느라고"],
    ownExamples: [
      { sentence: "아이들이 <b>떠드는 통에</b> 집중해서 일을 할 수가 없었다.", translation: "Vì bọn trẻ ồn ào nên tôi không thể tập trung làm việc." }
    ], notes: "mang ý nghĩa hỗn loạn, náo loạn; kết quả thường tiêu cực"
  },
  {
    id: 54, grammar: "ㄴ/은 탓에",
    senses: [{ meaning: "vì, do (đổ lỗi)", groupId: "reason_negative" }],
    synonymPatterns: ["는 바람에", "는 통에", "느라고", "(으)ㄴ 나머지"],
    ownExamples: [
      { sentence: "늦잠을 <b>잔 탓에</b> 중요한 회의에 늦어 버렸다.", translation: "Do ngủ quên nên tôi đã đến trễ cuộc họp quan trọng." }
    ], notes: "mang sắc thái đổ lỗi; nguyên nhân dẫn đến kết quả xấu"
  },
  {
    id: 55, grammar: "느라고",
    senses: [{ meaning: "vì bận làm gì đó", groupId: "reason_negative" }],
    synonymPatterns: ["는 바람에", "ㄴ/은 탓에", "는 통에"],
    ownExamples: [
      { sentence: "친구를 기다리<b>느라고</b> 밥을 못 먹었다.", translation: "Vì bận chờ bạn nên tôi không ăn cơm được." }
    ], notes: "chủ ngữ trước và sau phải giống nhau; hành động trước gây cản trở hành động sau"
  },
  {
    id: 56, grammar: "만큼",
    senses: [{ meaning: "bằng, nhiều như, đến mức", groupId: "extent_degree" }],
    synonymPatterns: ["(으)ㄹ 정도로", "게", "(으)ㄹ 지경이다", "(으)ㄹ 정도이다"],
    ownExamples: [
      { sentence: "그 가수는 모르는 사람이 없을 <b>만큼</b> 유명하다.", translation: "Ca sĩ đó nổi tiếng đến mức không ai không biết." }
    ], notes: "diễn đạt mức độ tương đương hoặc đạt đến"
  },
  {
    id: 57, grammar: "(으)ㄴ/는 데다가",
    senses: [{ meaning: "không những...mà còn", groupId: "addition" }],
    synonymPatterns: ["(으)ㄹ 뿐만 아니라", "(으)ㄴ/는 것은 물론이고", "(으)려니와/거니와", "(으)ㄹ 뿐더러"],
    ownExamples: [
      { sentence: "그 식당은 음식이 맛있는 <b>데다가</b> 가격도 저렴해서 자주 간다.", translation: "Nhà hàng đó không những ngon mà giá còn rẻ nữa nên tôi hay đến." }
    ], notes: "thường dùng khi bổ sung thêm đặc điểm cùng chiều"
  },
  {
    id: 58, grammar: "(으)ㄹ지라도",
    senses: [{ meaning: "dù, cho dù (nhượng bộ giả thiết)", groupId: "concession_general" }],
    synonymPatterns: ["더라도", "아/어/여도", "든지"],
    ownExamples: [
      { sentence: "아무리 힘<b>들지라도</b> 포기하지 않겠다.", translation: "Dù khó khăn đến đâu tôi cũng sẽ không bỏ cuộc." }
    ], notes: "mạnh hơn 더라도, thường dùng trong văn viết"
  },
  {
    id: 59, grammar: "는 법이다",
    senses: [{ meaning: "đương nhiên là, vốn dĩ là", groupId: "inevitable" }],
    synonymPatterns: ["기 마련이다", "게 돼 있다"],
    ownExamples: [
      { sentence: "열심히 노력하면 좋은 결과가 나오<b>는 법이다</b>.", translation: "Nếu cố gắng hết sức thì đương nhiên sẽ có kết quả tốt." }
    ], notes: "mang tính quy luật tự nhiên, chân lý"
  },
  {
    id: 60, grammar: "게 돼 있다",
    senses: [{ meaning: "tất nhiên sẽ, đã được sắp xếp như vậy", groupId: "inevitable" }],
    synonymPatterns: ["기 마련이다", "는 법이다"],
    ownExamples: [
      { sentence: "거짓말을 하면 언젠가는 들키<b>게 돼 있다</b>.", translation: "Nói dối thì tất nhiên sẽ bị phát hiện vào lúc nào đó thôi." }
    ], notes: "nhấn mạnh kết quả tất yếu theo quy luật"
  },
  {
    id: 61, grammar: "지 않을 수 없다",
    senses: [{ meaning: "không thể không, buộc phải", groupId: "no_choice" }],
    synonymPatterns: ["(으)ㄹ 수밖에 없다", "아/어야 하다", "아/어야 할 뿐이다"],
    ownExamples: [
      { sentence: "그 소식을 듣고 울<b>지 않을 수 없었다</b>.", translation: "Nghe tin đó, tôi không thể không khóc." }
    ], notes: "phủ định kép → nghĩa khẳng định mạnh; tương đương 수밖에 없다"
  },
  {
    id: 62, grammar: "기가 무섭게",
    senses: [{ meaning: "ngay tức khắc, vừa...đã ngay", groupId: "immediate" }],
    synonymPatterns: ["자마자", "는 대로", "면 바로", "기가 바쁘게"],
    ownExamples: [
      { sentence: "문이 열리<b>기가 무섭게</b> 사람들이 쏟아져 들어왔다.", translation: "Cửa vừa mở ra là người ta ùa vào ngay lập tức." }
    ], notes: "nhấn mạnh tốc độ cực nhanh, ngay tức thì; thường dùng cho sự kiện bất ngờ"
  },
  {
    id: 63, grammar: "에 불과하다",
    senses: [{ meaning: "chỉ là, chẳng qua là", groupId: "only" }],
    synonymPatterns: ["일 뿐이다", "에 다름 아니다", "에 지나지 않다"],
    ownExamples: [
      { sentence: "그건 그냥 핑계<b>에 불과하다</b>.", translation: "Đó chẳng qua chỉ là lý do bao biện mà thôi." }
    ], notes: "nhấn mạnh sự hạn chế, tầm thường; thường hàm ý phê phán"
  },
  {
    id: 64, grammar: "었어야 했는데",
    senses: [{ meaning: "\"Đáng lẽ ra phải... (nhưng thực tế là đã không làm)\"", groupId: "regret" }],
    synonymPatterns: ["(으)ㄹ걸 그랬다", "았/었을 텐데"],
    ownExamples: [
      { sentence: "그때 더 열심히 공부<b>했어야 했는데</b> 후회가 된다.", translation: "Đáng lẽ hồi đó phải học chăm chỉ hơn, giờ hối hận quá." },
      { sentence: "일찍 일어<b>났어야 했는데</b>.", translation: "Đáng lẽ ra mình phải dậy sớm [nhưng mình đã dậy muộn]." }
    ], notes: "Nhấn mạnh vào một nghĩa vụ hoặc một việc cần thiết trong quá khứ nhưng bạn đã không thực hiện được. Gần nghĩa với -(으)ㄹ걸 그랬다 hơn là -지 말 걸 그랬다."
  },
  {
    id: 65, grammar: "것처럼",
    senses: [{ meaning: "như, giống như, như thể", groupId: "like_as" }],
    synonymPatterns: ["듯이", "는 것과 같이", "는 것처럼", "는 바와 같이"],
    ownExamples: [
      { sentence: "그는 아무 일도 없었던 <b>것처럼</b> 태연하게 웃고 있었다.", translation: "Anh ấy mỉm cười thản nhiên như thể không có chuyện gì xảy ra vậy." }
    ], notes: "diễn đạt sự so sánh, giống như"
  },
  {
    id: 66, grammar: "인 동시에",
    senses: [{ meaning: "vừa là...vừa là, đồng thời", groupId: "dual" }],
    synonymPatterns: ["이자"],
    ownExamples: [
      { sentence: "그녀는 훌륭한 어머니<b>인 동시에</b> 성공한 사업가이다.", translation: "Cô ấy vừa là người mẹ tuyệt vời vừa là doanh nhân thành đạt." }
    ], notes: "nhấn mạnh hai vai trò/tính chất song song cùng tồn tại"
  },
  {
    id: 67, grammar: "기 쉽다",
    senses: [{ meaning: "dễ, dễ bị", groupId: "likely" }],
    synonymPatterns: ["기 십상이다"],
    ownExamples: [
      { sentence: "피곤하면 실수를 하<b>기 쉽다</b>.", translation: "Khi mệt mỏi thì dễ mắc sai lầm." }
    ], notes: "diễn đạt khả năng dễ xảy ra; bình thường hơn 기 십상이다"
  },
  {
    id: 68, grammar: "(이)나 마찬가지이다",
    senses: [{ meaning: "cũng như, không khác gì, xem như", groupId: "consider_as" }],
    synonymPatterns: ["(이)나 같다"],
    ownExamples: [
      { sentence: "그 사람은 가족<b>이나 마찬가지이다</b>.", translation: "Người đó cũng chẳng khác gì người trong gia đình vậy." }
    ], notes: "diễn đạt sự tương đương về bản chất dù không hoàn toàn giống. ⚠ 거나 마찬가지이다 và (으)ㄴ 거나 마찬가지다 (ID 130) là cùng một ngữ pháp, chỉ khác 이다 vs 다 ở cuối — hai dạng hoàn toàn tương đương."
  },
  {
    id: 69, grammar: "(으)ㄴ/는 체하다",
    senses: [{ meaning: "giả vờ, làm bộ", groupId: "pretend" }],
    synonymPatterns: ["(으)ㄴ/는 척하다", "(으)ㄴ/는 것처럼 행동하다"],
    ownExamples: [
      { sentence: "그는 나를 봤으면서도 못 본 <b>체했다</b>.", translation: "Anh ta trông thấy tôi rồi mà còn làm bộ không thấy." }
    ], notes: "tương đương 척하다; hơi cổ điển hơn một chút"
  },
  {
    id: 70, grammar: "고자",
    senses: [{ meaning: "để (mục đích, văn viết)", groupId: "purpose_general" }],
    synonymPatterns: ["기 위해(서)", "도록", "(으)려고"],
    ownExamples: [{ sentence: "이 문제를 해결하<b>고자</b> 회의를 열었습니다.", translation: "Chúng tôi đã mở cuộc họp để giải quyết vấn đề này." }],
    notes: "thực hiện hành động để đạt mục đích phía trước, thường tốn công sức, văn viết/vĩ mô"
  },
  {
    id: 71, grammar: "(으)러",
    senses: [{ meaning: "đi/đến để", groupId: "purpose_move" }],
    synonymPatterns: ["(으)려고", "기 위해서"],
    ownExamples: [{ sentence: "친구를 만나<b>러</b> 카페에 가고 있어요.", translation: "Tôi đang đến quán cà phê để gặp bạn." }],
    notes: "chỉ kết hợp với động từ di chuyển (가다, 오다, 다니다...)"
  },
  {
    id: 72, grammar: "(으)려고 하다",
    senses: [{ meaning: "định làm gì", groupId: "intention" }],
    synonymPatterns: ["(으)려던 참이다", "(으)려던 참에"],
    ownExamples: [{ sentence: "내년에는 한국어 능력 시험을 보<b>려고 합니다</b>.", translation: "Năm sau tôi định thi năng lực tiếng Hàn." }],
    notes: "kế hoạch mơ hồ, chưa chắc chắn trong tương lai. Khác (으)려던 참이다 (dùng khi vừa nảy sinh ý định thì đúng lúc có tác động trùng hợp xảy ra)"
  },
  {
    id: 73, grammar: "(으)ㄴ/는 것과 같다",
    senses: [{ meaning: "gần như là, giống hệt như", groupId: "consider_as" }],
    synonymPatterns: ["(으)ㄴ/는 셈이다", "(으)ㄴ/는 거나 마찬가지이다", "(으)ㄴ/는 거나 다름없다"],
    ownExamples: [{ sentence: "이 정도면 사실상 합격한 <b>것과 같다</b>.", translation: "Cỡ này thì trên thực tế cũng giống như là đã đậu rồi." }],
    notes: "so sánh trạng thái gần như tương đương"
  },
  {
    id: 74, grammar: "고 나서",
    senses: [{ meaning: "sau khi", groupId: "sequence" }],
    synonymPatterns: ["(으)ㄴ 후에", "더니", "(으)ㄴ 다음에", "고 나서야"],
    ownExamples: [{ sentence: "밥을 먹<b>고 나서</b> 양치를 했다.", translation: "Sau khi ăn cơm xong, tôi đã đánh răng." }],
    notes: "kết thúc hoàn toàn hành động trước rồi mới đến hành động sau"
  },
  {
    id: 75, grammar: "다가",
    senses: [{ meaning: "đang làm gì thì (bị gián đoạn)", groupId: "interrupted" }],
    synonymPatterns: ["는 길에"],
    ownExamples: [{ sentence: "책을 읽<b>다가</b> 잠이 들었어요.", translation: "Tôi đang đọc sách thì ngủ thiếp đi." }],
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
    synonymPatterns: ["아/어지다"],
    ownExamples: [{ sentence: "일이 거의 다 끝나<b>갑니다</b>.", translation: "Công việc gần như đang dần hoàn tất rồi." }],
    notes: "Quá trình đang diễn ra từ hiện tại hướng về tương lai. ⚠ 아/어 오다 là cặp ĐỐI XỨNG (không phải synonym): 아/어 가다 = hiện tại→tương lai; 아/어 오다 = quá khứ→hiện tại. (VD: 한국어를 3년간 공부해 왔어요 - Tôi đã học tiếng Hàn 3 năm đến giờ)"
  },
  {
    id: 78, grammar: "아/어 버리다",
    senses: [{ meaning: "mất rồi (kết thúc)", groupId: "completion" }],
    synonymPatterns: ["고 말다"],
    ownExamples: [{ sentence: "너무 배가 고파서 피자를 다 먹<b>어 버렸다</b>.", translation: "Đói quá nên tôi đã ăn sạch cái pizza mất rồi." }],
    notes: "kết thúc nhanh hơn dự kiến, mang sắc thái tiếc nuối hoặc nhẹ nhõm"
  },
  {
    id: 79, grammar: "(으)ㄴ/는지 (모르다)",
    senses: [{ meaning: "không biết có phải vì... hay không", groupId: "reason_guess" }],
    synonymPatterns: ["아서/어서 그런지"],
    ownExamples: [{ sentence: "피곤한<b>지</b> 동생이 일찍 자네요.", translation: "Không biết có phải vì mệt không mà em tôi ngủ sớm thế." }],
    notes: "phỏng đoán một lý do"
  },
  {
    id: 80, grammar: "(으)니까",
    senses: [{ meaning: "bởi vì (lý do) / sau khi (nhận ra)", groupId: "reason_command" }],
    synonymPatterns: ["아서/어서", "(으)ㄹ 테니까", "(으)ㄴ/는 이상", "아서/어서 그런지", "기 때문에", "아/어서"],
    ownExamples: [{ sentence: "날씨가 추우<b>니까</b> 따뜻하게 입으세요.", translation: "Vì thời tiết lạnh nên hãy mặc ấm nhé." }],
    notes: "vế sau thường là câu mệnh lệnh, rủ rê. Hoặc sau khi làm gì thì nhận ra điều gì"
  },
  {
    id: 81, grammar: "(으)ㄹ 테니까",
    senses: [{ meaning: "vì sẽ/chắc sẽ... nên", groupId: "reason_command" }],
    synonymPatterns: ["(으)니까"],
    ownExamples: [{ sentence: "내가 청소를 할 <b>테니까</b> 너는 설거지를 해라.", translation: "Tôi sẽ dọn dẹp nên bạn hãy rửa bát đi." }],
    notes: "người nói thể hiện ý chí hoặc phỏng đoán để làm lý do cho vế sau (mệnh lệnh)"
  },
  {
    id: 82, grammar: "고 싶으면",
    senses: [{ meaning: "nếu muốn", groupId: "condition_intent" }],
    synonymPatterns: ["(으)려면", "려거든"],
    ownExamples: [{ sentence: "시험에 합격하<b>고 싶으면</b> 열심히 공부해라.", translation: "Nếu muốn thi đậu thì hãy học chăm chỉ vào." }],
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
    senses: [{ meaning: "nếu (giả định khó xảy ra)", groupId: "condition_general" }],
    synonymPatterns: ["(으)면"],
    ownExamples: [
      {
        sentence: "타임머신이 <b>있다면</b> 과거로 돌아갈 텐데.",
        translation: "Nếu có cỗ máy thời gian thì tôi đã quay về quá khứ rồi."
      }
    ],
    notes: "giả định điều khó hoặc không thể xảy ra trong thực tế (Lưu ý: Tính từ dùng -다면, Động từ dùng -ㄴ/는다면)"
  },
  {
    id: 85, grammar: "(으)면",
    senses: [{ meaning: "nếu (giả định thông thường)", groupId: "condition_general" }],
    synonymPatterns: ["다면"],
    ownExamples: [{ sentence: "비가 오<b>면</b> 집에 있을 거예요.", translation: "Nếu trời mưa thì tôi sẽ ở nhà." }],
    notes: "giả định thông thường, dễ xảy ra"
  },
  {
    id: 86, grammar: "아/어/여도",
    senses: [{ meaning: "cho dù", groupId: "concession_general" }],
    synonymPatterns: ["더라도", "(으)ㄹ지라도"],
    ownExamples: [{ sentence: "비가 와<b>도</b> 축구 경기는 계속됩니다.", translation: "Cho dù trời mưa, trận đấu bóng đá vẫn tiếp tục." }],
    notes: "cho dù... đi chăng nữa thì kết quả vẫn không đổi"
  },
  {
    id: 87, grammar: "더라도",
    senses: [{ meaning: "cho dù (giả định)", groupId: "concession_general" }],
    synonymPatterns: ["아/어/여도", "(으)ㄹ지라도"],
    ownExamples: [{ sentence: "바쁘<b>더라도</b> 식사는 꼭 챙겨 드세요.", translation: "Dù có bận rộn thì cũng nhất định phải ăn uống đàng hoàng nhé." }],
    notes: "mang tính giả định mạnh hơn 아/어/여도"
  },
  {
    id: 88, grammar: "거나",
    senses: [{ meaning: "hoặc", groupId: "choice" }],
    synonymPatterns: [],
    ownExamples: [{ sentence: "주말에는 영화를 보<b>거나</b> 책을 읽어요.", translation: "Cuối tuần tôi thường xem phim hoặc đọc sách." }],
    notes: "lựa chọn cụ thể 1 trong 2. Khác 든지 (bất kể là gì, không quan tâm)"
  },
  {
    id: 89, grammar: "(으)ㄹ수록",
    senses: [{ meaning: "càng... càng", groupId: "progression" }],
    synonymPatterns: [],
    ownExamples: [{ sentence: "한국어는 배우면 배울<b>수록</b> 재미있어요.", translation: "Tiếng Hàn càng học càng thấy thú vị." }],
    notes: "mức độ tăng tiến"
  },
  {
    id: 90, grammar: "기 나름이다",
    senses: [{ meaning: "phụ thuộc vào", groupId: "depend" }],
    synonymPatterns: ["기에 달려 있다", "에 달려 있다"],
    ownExamples: [{ sentence: "행복은 마음먹<b>기 나름이다</b>.", translation: "Hạnh phúc là phụ thuộc vào cách ta suy nghĩ." }],
    notes: "phụ thuộc vào cách thực hiện mà kết quả sẽ thay đổi"
  },
  {
    id: 91, grammar: "(으)ㄹ 수 있다",
    senses: [{ meaning: "có thể (khả năng / năng lực)", groupId: "ability" }],
    synonymPatterns: ["(으)ㄹ 능력이 있다", "(으)ㄹ 줄 알다/모르다"],
    ownExamples: [{ sentence: "저는 한국어를 할 <b>수 있어요</b>.", translation: "Tôi có thể nói tiếng Hàn." }],
    notes: "Chỉ năng lực hoặc khả năng tồn tại. Khi thêm 도 (수도 있다) mới mang nghĩa phỏng đoán mờ nhạt. KHÔNG phải ngữ pháp phỏng đoán như 것 같다 / 나 보다."
  },
  {
    id: 92, grammar: "지 말 걸 그랬다",
    senses: [{ meaning: "\"Biết vậy đã không làm...\", \"Giá mà mình đã không...\"", groupId: "regret" }],
    synonymPatterns: [],
    ownExamples: [
      { sentence: "그 영화는 너무 재미없어서 보<b>지 말 걸 그랬다</b>.", translation: "Bộ phim đó chán quá, biết thế tôi đã không xem." },
      { sentence: "술을 많이 마시<b>지 말 걸 그랬어요</b>.", translation: "Biết vậy mình đã không uống nhiều rượu như thế." }
    ],
    notes: "Diễn tả sự hối hận vì một việc mình đã thực hiện trong quá khứ. ⚠ Trái nghĩa: (으)ㄹ걸 그랬다 (hối tiếc vì KHÔNG làm). Hai cấu trúc này đối lập nhau, thường xuất hiện trong đề TOPIK để phân biệt."
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
    ownExamples: [{ sentence: "어릴 때 이 공원에서 놀<b>곤 했어요</b>.", translation: "Hồi nhỏ tôi thường hay chơi ở công viên này." }],
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
    ownExamples: [{ sentence: "내일은 날씨가 맑았으<b>면 좋겠어요</b>.", translation: "Mong rằng ngày mai thời tiết sẽ đẹp." }],
    notes: "thường kết hợp với 았/었/였 ở trước để nhấn mạnh mong ước"
  },
  {
    id: 98, grammar: "는 대신(에)",
    senses: [{ meaning: "thay vì, bù lại", groupId: "alternative" }],
    synonymPatterns: [],
    ownExamples: [{ sentence: "영화를 보<b>는 대신에</b> 집에서 쉬기로 했어요.", translation: "Thay vì xem phim, tôi quyết định nghỉ ngơi ở nhà." }],
    notes: "hành động sau thay thế cho hành động trước"
  },
  {
    id: 99, grammar: "게 되다",
    senses: [{ meaning: "được, bị, trở nên (kết quả do ngoại cảnh)", groupId: "change_result" }],
    synonymPatterns: [],
    ownExamples: [{ sentence: "한국 회사에 취직하<b>게 되었어요</b>.", translation: "Tôi đã được nhận vào làm ở một công ty Hàn Quốc." }],
    notes: "kết quả có được do yếu tố bên ngoài tác động vào"
  },
  {
    id: 100, grammar: "아/어야 하다",
    senses: [{ meaning: "phải", groupId: "obligation" }],
    synonymPatterns: ["아/어야 하다", "지 않을 수 없다"],
    ownExamples: [{ sentence: "내일 시험이 있어서 공부를 <b>해야 합니다</b>.", translation: "Ngày mai có bài thi nên tôi phải học bài." }],
    notes: "diễn tả nghĩa vụ, sự bắt buộc"
  },
  {
    id: 101, grammar: "는 동안",
    senses: [{ meaning: "trong khi/trong lúc", groupId: "while_time" }],
    synonymPatterns: ["는 가운데", "는 중에", "는 사이에"],
    ownExamples: [{ sentence: "제가 청소를 하<b>는 동안</b> 동생은 음악을 들었어요.", translation: "Trong lúc tôi dọn dẹp thì em tôi nghe nhạc." }],
    notes: "Diễn tả hành động diễn ra song song suốt một quá trình dài. Nhấn mạnh tính liên tục. Chủ ngữ 2 vế có thể giống hoặc khác nhau."
  },
  {
    id: 102, grammar: "마다",
    senses: [{ meaning: "mỗi, cứ hễ", groupId: "whenever" }],
    synonymPatterns: [],
    ownExamples: [{ sentence: "주말<b>마다</b> 등산을 가요.", translation: "Mỗi dịp cuối tuần tôi đều đi leo núi." }],
    notes: "gắn sau danh từ; nếu kết hợp với động từ thì dùng (으)ㄹ 때마다"
  },
  {
    id: 103, grammar: "(으)ㄹ 따름이다",
    senses: [{ meaning: "chỉ là, chỉ có vậy thôi", groupId: "only" }],
    synonymPatterns: ["(으)ㄹ 뿐이다"],
    ownExamples: [{ sentence: "저는 맡은 일을 열심히 했을 <b>따름이에요</b>.", translation: "Tôi chỉ làm hết sức việc được giao mà thôi." }],
    notes: "tương đương 뿐이다, nhưng mang sắc thái khiêm tốn hơn; thường dùng trong văn viết hoặc lời nói trang trọng. ⚠ Khác 에 불과하다: 따름이다 gắn sau vị ngữ/động từ; 에 불과하다 gắn sau danh từ + 에 — cú pháp khác nhau, không thay thế trực tiếp."
  },
  {
    id: 104, grammar: "는 김에",
    senses: [{ meaning: "nhân tiện, tiện thể đang làm gì thì làm luôn", groupId: "opportune" }],
    synonymPatterns: ["(으)ㄹ 겸", "는 길에"],
    ownExamples: [{ sentence: "마트에 가<b>는 김에</b> 세제도 좀 사 와요.", translation: "Nhân tiện đang đi siêu thị thì mua luôn nước giặt về nhé." }],
    notes: "nhân cơ hội đang thực hiện hành động A thì làm thêm B. Khác 는 길에 (tiện đường di chuyển): 는 김에 dùng với mọi hành động, không chỉ di chuyển"
  },
  {
    id: 105, grammar: "는 가운데",
    senses: [{ meaning: "trong lúc, giữa lúc (bối cảnh)", groupId: "while_time" }],
    synonymPatterns: ["는 중에", "는 동안"],
    ownExamples: [{ sentence: "어려운 상황 <b>가운데</b>서도 희망을 잃지 않았어요.", translation: "Ngay giữa hoàn cảnh khó khăn vẫn không mất đi hy vọng." }],
    notes: "Mang sắc thái trang trọng (văn viết). Diễn tả sự việc diễn ra trong một bối cảnh, hoàn cảnh hoặc tình thế (thường là áp lực/khó khăn)."
  },
  {
    id: 106, grammar: "는 중에",
    senses: [{ meaning: "trong khi đang làm gì đó", groupId: "while_time" }],
    synonymPatterns: ["는 가운데", "는 동안"],
    ownExamples: [{ sentence: "수업 <b>중에</b> 전화가 울렸어요.", translation: "Trong khi đang học thì điện thoại reo." }],
    notes: "Nhấn mạnh hành động đang thực hiện giữa chừng (tiến trình đang diễn ra). Thường đi sau danh từ hành động. Vế sau thường là hành động bất chợt xen ngang."
  },
  {
    id: 107, grammar: "다(가) 보면",
    senses: [{ meaning: "cứ làm liên tục thì sẽ (kết quả thay đổi trong tương lai)", groupId: "future_result" }],
    synonymPatterns: ["노라면", "다(가) 보면"],
    ownExamples: [{ sentence: "포기하지 않고 계속 연습하<b>다 보면</b> 언젠가는 잘하게 될 거예요.", translation: "Cứ không bỏ cuộc mà tiếp tục luyện tập thì rồi sẽ có lúc làm giỏi thôi." }],
    notes: "hành động lặp lại/liên tục → kết quả thay đổi trong tương lai. Khác 다가 보니까 (ID 39): 다가 보니까 là kết quả đã nhận ra ở hiện tại/quá khứ; 다가보면 là kết quả sẽ xảy ra ở tương lai"
  },
  {
    id: 108, grammar: "(으)ㄹ 바에야",
    senses: [{ meaning: "thà... còn hơn (nếu phải làm vế trước thà làm vế sau hơn)", groupId: "preference" }],
    synonymPatterns: ["느니 (차라리)", "(으)ㄹ 바에야"],
    ownExamples: [{ sentence: "그 사람에게 부탁할 <b>바에야</b> 차라리 혼자 하는 게 낫겠어요.", translation: "Thà tự làm một mình còn hơn là nhờ người đó." }],
    notes: "biểu thị sự lựa chọn: thà B còn hơn A. Vế trước là điều không muốn; vế sau thường có 차라리 (thà rằng). 느니도 tương tự nhưng mang cảm giác chán nản hơn"
  },
  {
    id: 109, grammar: "(으)ㄴ 후에",
    senses: [{ meaning: "sau khi (làm xong)", groupId: "sequence" }],
    synonymPatterns: ["고 나서", "(으)ㄴ 다음에", "고서야", "고 나서야"],
    ownExamples: [{ sentence: "식사를 한 <b>후에</b> 약을 드세요.", translation: "Hãy uống thuốc sau khi ăn xong." }],
    notes: "sau khi hoàn thành A thì mới B. Tương đương 고 나서 (ID 74) nhưng 후에 dùng được sau cả danh từ (졸업 후에); 고 나서 chỉ sau động từ"
  },
  {
    id: 110, grammar: "(으)ㄹ 나위가 없다",
    senses: [{ meaning: "không thể tốt hơn / không cần phải nói (tuyệt đỉnh đến vô ngôn)", groupId: "no_need_obvious" }],
    synonymPatterns: ["말할 것도 없다", "(으)ㄹ 필요가 없다"],
    ownExamples: [{ sentence: "이번 여행은 더할 <b>나위가 없이</b> 즐거웠어요.", translation: "Chuyến đi lần này vui không thể tả, không còn gì để nói thêm." }],
    notes: "thường xuất hiện dưới dạng cố định: 더할 나위가 없다 (không thể tốt hơn nữa) và 말할 나위가 없다 (khỏi cần phải nói). Nhấn mạnh tính TUYỆT ĐỈNH — không còn chỗ nào để cải thiện. ⚠ Khác 말할 것도 없다 (hiển nhiên vì ai cũng biết): 나위가 없다 thiên về mức độ hoàn hảo, 말할 것도 없다 thiên về tính hiển nhiên phổ quát."
  },
  {
    id: 111, grammar: "V-다시피",
    senses: [
      { meaning: "như, theo như (đi với 알다, 보다, 듣다...)", groupId: "like_as" },
      { meaning: "gần như là, hầu như là (thực ra không hẳn vậy)", groupId: "like_as" }
    ],
    synonymPatterns: ["는 것처럼", "는 바와 같이", "는 것과 같이"],
    ownExamples: [
      { sentence: "<b>알다시피</b> 이 문제는 쉽게 해결되지 않아요.", translation: "Như bạn đã biết, vấn đề này không dễ giải quyết." },
      { sentence: "그는 밥을 <b>삼키다시피</b> 하며 급하게 나갔어요.", translation: "Anh ấy gần như nuốt chửng cơm rồi vội vàng đi ra." }
    ],
    notes: "kết hợp với một số động từ thông dụng tạo thành cụm cố định: 알다시피 (như bạn đã biết), 보다시피 (như bạn đã thấy). Với các động từ hành động khác mang nghĩa 'gần như, hầu như' — thực tế không hoàn toàn là hành động đó (VD: 삼키다시피 - gần như nuốt chửng). ⚠ Tránh dùng cùng động từ ở cả hai vế (먹다시피 + 먹다) vì sẽ tạo nghĩa vô lý."
  },
  {
    id: 112, grammar: "(으)ㄹ 게 뻔하다",
    senses: [{ meaning: "chắc chắn sẽ (điều hiển nhiên, thường tiêu cực)", groupId: "obvious" }],
    synonymPatterns: ["(으)ㄹ 것이 분명하다", "(으)ㄹ 게 틀림없다"],
    ownExamples: [{ sentence: "지금 전화해 봤자 안 받을 게 <b>뻔해요</b>.", translation: "Gọi điện lúc này thì chắc chắn là không nghe đâu." }],
    notes: "chỉ kết quả có thể đoán trước rất rõ ràng, thường mang sắc thái tiêu cực hoặc thất vọng; thông dụng trong văn nói; mạnh hơn 것 같다. Khác 것이 분명하다 (trung lập/trang trọng hơn)"
  },
  {
    id: 113, grammar: "아/어지다",
    senses: [{ meaning: "trở nên, trở thành (thay đổi tự nhiên)", groupId: "change_process" }],
    synonymPatterns: ["아/어 가다"],
    ownExamples: [{ sentence: "날씨가 점점 따뜻해<b>지고</b> 있어요.", translation: "Thời tiết đang dần trở nên ấm áp hơn." }],
    notes: "thay đổi trạng thái một cách tự nhiên (thường dùng với tính từ). Khác 게 되다 (ID 100): 아/어지다 = quá trình tự nhiên; 게 되다 = kết quả do tác động bên ngoài"
  },
  {
    id: 114, grammar: "(으)ㄹ 지경이다",
    senses: [{ meaning: "đến mức/nỗi (mức độ cực đoan, thường tiêu cực)", groupId: "extent_degree" }],
    synonymPatterns: ["(으)ㄹ 정도이다", "만큼", "(으)ㄹ 정도로"],
    ownExamples: [{ sentence: "너무 바빠서 밥도 못 먹을 <b>지경이에요</b>.", translation: "Bận đến mức không có thời gian ăn cơm luôn." }],
    notes: "mức độ cực đoan hơn 정도, thường diễn đạt tình huống tiêu cực/khó khăn. (으)ㄹ 지경으로 là dạng trạng từ (làm bổ ngữ cho động từ sau)"
  },
  {
    id: 115, grammar: "어/아 봤자",
    senses: [{ meaning: "dù có làm thì cũng vô ích", groupId: "concession_useless" }],
    synonymPatterns: ["아/어 봐야", "(나) 마나", "아/어 봐도", "본다고 해도"],
    ownExamples: [
      { sentence: "지금 서둘러 <b>봤자</b> 이미 늦어서 소용이 없다.", translation: "Dù có vội bây giờ thì cũng đã trễ rồi, chẳng ích gì." }
    ],
    notes: "diễn đạt sự vô nghĩa của hành động. Khác với (나) 마나 (biết trước kết quả 100%), 어/아 봤자 mang ý nghĩa kết quả vô ích nhưng chưa chắc đã biết trước hoàn toàn."
  },
  {
    id: 116, grammar: "(으)ㄹ 것도 없이",
    senses: [{ meaning: "chẳng cần phải làm (vì kết quả đã quá hiển nhiên)", groupId: "obvious_skip" }],
    synonymPatterns: ["두말할 것도 없이"],
    ownExamples: [
      { sentence: "물어볼 <b>것도 없이</b> 그 사람이 이길 거라는 걸 다들 알고 있었다.", translation: "Chẳng cần phải hỏi, ai cũng biết người đó sẽ thắng." }
    ],
    notes: "Hành động V thừa thãi vì kết quả đã quá hiển nhiên/chắc chắn. Là CONNECTOR — phải có mệnh đề sau. Dạng cố định hay gặp: 물어볼 것도 없이 (chẳng cần hỏi), 볼 것도 없이 (chẳng cần xem xét). ⚠ Khác (나) 마나 / 봤자 (concession — dù làm vẫn vô ích): 것도 없이 = hành động thừa thãi vì kết quả đã rõ; concession = dù làm vẫn không thay đổi được kết quả."
  },
  {
    id: 117, grammar: "아/어 봐도",
    senses: [{ meaning: "dù có thử thì cũng", groupId: "concession_useless" }],
    synonymPatterns: ["아/어 봐야", "본다고 해도", "(나) 마나", "어/아 봤자"],
    ownExamples: [
      { sentence: "다른 병원에 가 <b>봐도</b> 결과는 똑같을 거예요.", translation: "Dù có thử đến bệnh viện khác thì kết quả cũng sẽ như nhau thôi." }
    ],
    notes: "nhẹ hơn 봐야 một chút; gần nghĩa 봐야 nhưng ít nhấn mạnh tính vô ích hơn"
  },
  {
    id: 118, grammar: "본다고 해도",
    senses: [{ meaning: "dù có thử xem/làm thì cũng", groupId: "concession_useless" }],
    synonymPatterns: ["아/어 봐야", "아/어 봐도", "(나) 마나", "어/아 봤자"],
    ownExamples: [
      { sentence: "전문가한테 물어<b>본다고 해도</b> 명확한 답을 얻기는 어려울 거예요.", translation: "Dù có hỏi chuyên gia thì cũng khó mà nhận được câu trả lời rõ ràng." }
    ],
    notes: "cấu trúc dài hơn, thường dùng trong văn viết hoặc văn nói trang trọng"
  },
  {
    id: 119, grammar: "(으)ㄴ/는 이상",
    senses: [{ meaning: "một khi đã... thì (điều kiện tất yếu)", groupId: "condition_restrict" }],
    synonymPatterns: ["(으)ㄴ/는 한", "(으)니까"],
    ownExamples: [
      { sentence: "이미 시작을 <b>한 이상</b> 끝을 봐야 한다.", translation: "Một khi đã bắt đầu thì phải làm cho đến cùng." },
      { sentence: "학생인 <b>이상</b> 공부를 열심히 하는 것은 당연하다.", translation: "Đã là học sinh thì việc học hành chăm chỉ là điều đương nhiên." }
    ],
    notes: "Dùng khi vế trước là một sự thật đã định/đã xảy ra, làm tiền đề khiến vế sau đương nhiên phải thế (thường là mệnh lệnh, ý chí, sự đương nhiên). ⚠ Khác với (으)ㄴ/는 한: '한' chỉ giới hạn thời gian/tình thế (chừng nào còn); '이상' mang tính khẳng định mạnh hơn về một sự thật không thể chối cãi."
  },
  {
    id: 121, grammar: "고서도",
    senses: [{ meaning: "dù ... vẫn", groupId: "contrast_action" }],
    synonymPatterns: ["(으)면서(도)", "고도"],
    ownExamples: [
      { sentence: "위험한 줄 <b>알고서도</b> 그는 뛰어들었다.", translation: "Dù biết là nguy hiểm nhưng anh ta vẫn lao vào." }
    ],
    notes: "nhấn mạnh sự cố ý bất chấp: đã nhận thức rõ ràng (알고) mà vẫn làm; sắc thái mạnh hơn (으)면서도; thứ tự nhấn mạnh: 고서도 > (으)면서도 > 고도 — ba cái này KHÔNG thay thế tự do trong mọi ngữ cảnh"
  },
  {
    id: 122, grammar: "(으)ㄹ 수도 있다",
    senses: [{ meaning: "có thể (phỏng đoán nhẹ)", groupId: "guess_doubt" }],
    synonymPatterns: ["(으)ㄹ지도 모르다", "(으)ㄴ/는 것 같다"],
    ownExamples: [
      { sentence: "내일 비가 올 <b>수도 있으니까</b> 우산을 챙기세요.", translation: "Ngày mai có thể trời mưa nên hãy mang theo ô nhé." }
    ],
    notes: "수 있다 + 도 → mang sắc thái phỏng đoán; nhẹ hơn (으)ㄹ지도 모르다. Phân biệt: (으)ㄹ 수 있다 (ID 91) = năng lực; (으)ㄹ 수도 있다 = khả năng có thể xảy ra"
  },
  {
    id: 123, grammar: "지 않았을 것이다",
    senses: [{ meaning: "chắc đã không..., không thể đã...", groupId: "guess_past_neg" }],
    synonymPatterns: ["지 않았을 텐데", "(으)ㄹ 리가 없다"],
    ownExamples: [
      { sentence: "그 사람이라면 그런 말을 함부로 하<b>지 않았을 것이다</b>.", translation: "Nếu là người đó thì chắc đã không buông ra những lời như vậy đâu." }
    ],
    notes: "phủ định trong quá khứ mang tính phỏng đoán; thường dùng trong lý luận hoặc biện hộ cho ai đó"
  },
  {
    id: 124, grammar: "(으)ㄹ 리 만무하다",
    senses: [{ meaning: "không có chuyện đó xảy ra, tuyệt đối không thể", groupId: "impossible" }],
    synonymPatterns: ["(으)ㄹ 리가 없다", "(으)ㄹ 턱이 없다"],
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
    id: 127, grammar: "(이)나 같다",
    senses: [{ meaning: "cũng như, giống như là (về bản chất)", groupId: "consider_as" }],
    synonymPatterns: ["(이)나 마찬가지이다"],
    ownExamples: [
      { sentence: "이런 날씨에 나가는 건 죽으러 가는 것<b>이나 같다</b>.", translation: "Đi ra ngoài trong thời tiết này cũng như đi tìm cái chết vậy." }
    ],
    notes: "dạng chuẩn là (이)나 같다 — gắn sau danh từ/대명사; nhấn mạnh sự tương đương bản chất dù hình thức khác nhau. ⚠ Cách viết cũ 거나 같다 không chuẩn, nên dùng (이)나 같다 hoặc 것이나 같다"
  },
  {
    id: 128, grammar: "(으)ㄴ/는 거나 다름없다",
    senses: [{ meaning: "không khác gì, cũng như là", groupId: "consider_as" }],
    synonymPatterns: ["(으)ㄴ/는 셈이다", "(으)ㄴ/는 거나 마찬가지이다", "(으)ㄴ/는 것과 같다"],
    ownExamples: [
      { sentence: "이 일은 90% 이상 했으니 다 <b>끝난 거나 다름없어요</b>.", translation: "Công việc này đã làm được hơn 90% rồi nên không khác gì là đã xong." }
    ],
    notes: "nhấn mạnh sự tương đương hoàn toàn về bản chất; mạnh hơn 셈이다 một chút"
  },
  {
    id: 129, grammar: "(으)ㄴ 줄 알았다",
    senses: [{ meaning: "đã tưởng là, đã nghĩ là", groupId: "unexpected" }],
    synonymPatterns: [],
    ownExamples: [
      { sentence: "그 식당이 문을 닫은 <b>줄 알았는데</b> 가 봤더니 아직 열더라.", translation: "Tôi tưởng quán đó đóng cửa rồi, nhưng đến nơi thấy vẫn còn mở." }
    ],
    notes: "diễn đạt nhận thức sai trong quá khứ; thường dùng ở dạng rút gọn '줄 알았다'. Khác (으)ㄴ 줄 몰랐다: 줄 알았다 = tưởng đúng nhưng sai; 줄 몰랐다 = không biết là có chuyện đó"
  },
  {
    id: 130, grammar: "(으)ㄴ/는 거나 마찬가지이다",
    senses: [{ meaning: "cũng như là, coi như là", groupId: "consider_as" }],
    synonymPatterns: ["(으)ㄴ/는 셈이다", "(으)ㄴ/는 거나 다름없다", "(으)ㄴ/는 것과 같다"],
    ownExamples: [{ sentence: "그렇게 오래 연락이 없으면 헤어진 <b>거나 마찬가지다</b>.", translation: "Mà lâu không liên lạc như vậy thì cũng như là chia tay rồi vậy." }],
    notes: "biến thể rút gọn của 거나 마찬가지이다 (ID 68) — hai dạng hoàn toàn tương đương, chỉ khác 다 vs 이다 ở cuối. ⚠ Không phải 2 ngữ pháp khác nhau — đã thêm cross-reference lẫn nhau để tránh nhầm lẫn."
  },
  {
    id: 131, grammar: "(으)ㄴ 다음에",
    senses: [{ meaning: "sau khi (làm xong)", groupId: "sequence" }],
    synonymPatterns: ["(으)ㄴ 후에", "고 나서"],
    ownExamples: [{ sentence: "밥을 먹은 <b>다음에</b> 산책을 해요.", translation: "Sau khi ăn cơm xong thì đi dạo." }],
    notes: "tương đương (으)ㄴ 후에; nhấn mạnh thứ tự trước-sau; dùng phổ biến trong văn nói"
  },
  {
    id: 133, grammar: "(으)ㄹ 것이 분명하다",
    senses: [{ meaning: "chắc chắn là, rõ ràng là", groupId: "obvious" }],
    synonymPatterns: ["(으)ㄹ 게 뻔하다", "(으)ㄹ 게 틀림없다", "(으)ㄹ 것이 틀림없다"],
    ownExamples: [{ sentence: "그가 거짓말을 하고 있는 <b>것이 분명하다</b>.", translation: "Rõ ràng là anh ta đang nói dối." }],
    notes: "khẳng định mạnh; trang trọng hơn 게 뻔하다; thường dùng trong văn viết hoặc lập luận"
  },
  {
    id: 135, grammar: "(으)ㄹ 게 틀림없다",
    senses: [{ meaning: "chắc chắn là, nhất định là (không thể sai)", groupId: "obvious" }],
    synonymPatterns: ["(으)ㄹ 게 뻔하다", "(으)ㄹ 것이 분명하다", "(으)ㄹ 것이 틀림없다"],
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
    synonymPatterns: ["(으)ㄹ 수 있다", "(으)ㄹ 줄 알다/모르다"],
    ownExamples: [{ sentence: "그는 어떤 문제든 해결할 <b>능력이 있다</b>.", translation: "Anh ấy có năng lực giải quyết bất kỳ vấn đề nào." }],
    notes: "trang trọng hơn (으)ㄹ 수 있다; nhấn mạnh năng lực/tài năng của chủ thể"
  },
  {
    id: 138, grammar: "(으)ㄹ 때까지",
    senses: [{ meaning: "cho đến khi, đến tận lúc", groupId: "extent_time" }],
    synonymPatterns: ["도록"],
    ownExamples: [{ sentence: "네가 올 <b>때까지</b> 기다릴게.", translation: "Tôi sẽ đợi cho đến khi bạn đến." }],
    notes: "giới hạn thời điểm kết thúc; khác 도록 (mục đích/mức độ)"
  },
  {
    id: 139, grammar: "(으)ㄹ 때마다",
    senses: [{ meaning: "mỗi khi, hễ khi nào", groupId: "whenever" }],
    synonymPatterns: ["기만 하면"],
    ownExamples: [{ sentence: "그 노래를 들을 <b>때마다</b> 눈물이 나요.", translation: "Mỗi khi nghe bài hát đó là tôi lại rơi nước mắt." }],
    notes: "gắn sau động từ; tương đương 기만 하면 về nghĩa nhưng cú pháp khác"
  },
  {
    id: 141, grammar: "(으)ㄹ 정도이다",
    senses: [{ meaning: "đến mức, đến nỗi", groupId: "extent_degree" }],
    synonymPatterns: ["(으)ㄹ 지경이다", "만큼"],
    ownExamples: [{ sentence: "너무 바빠서 밥 먹을 시간도 없을 <b>정도예요</b>.", translation: "Bận đến mức không có thời gian ăn cơm luôn." }],
    notes: "dùng phổ biến hơn 지경이다; ít tiêu cực hơn; dùng được cả tình huống tốt lẫn xấu"
  },
  {
    id: 142, grammar: "도록 하다",
    senses: [{ meaning: "hãy, nên (khuyên bảo/mệnh lệnh nhẹ nhàng); sẽ (quyết tâm)", groupId: "purpose_cause" }],
    synonymPatterns: ["도록", "게 하다"],
    examples: [
      { sentence: "내일까지 서류를 <b>제출하도록 하세요</b>.", translation: "Hãy nộp hồ sơ trước ngày mai nhé." },
      { sentence: "앞으로는 지각하지 <b>않도록 하겠습니다</b>.", translation: "Từ nay tôi sẽ cố gắng không đi muộn nữa." }
    ],
    notes: "1. Khuyên bảo, yêu cầu nhẹ nhàng (mệnh lệnh gián tiếp). 2. Thể hiện sự quyết tâm, hứa hẹn của người nói."
  },
  {
    id: 143, grammar: "(으)ㄹ 필요가 없다",
    senses: [{ meaning: "không cần phải, chẳng cần", groupId: "no_need_exemption" }],
    synonymPatterns: ["(으)ㄹ 것까지 없다", "굳이 (~지 않아도 되다)"],
    ownExamples: [{ sentence: "지금 당장 결정할 <b>필요가 없어요</b>. 천천히 생각해 보세요.", translation: "Không cần phải quyết định ngay bây giờ. Hãy suy nghĩ từ từ nhé." }],
    notes: "miễn trừ hành động một cách trung tính — không mang sắc thái tuyệt đỉnh hay hiển nhiên. ⚠ Khác 것까지 없다: 필요가 없다 = đơn thuần không cần; 것까지 없다 = không cần thiết phải đến mức đó (phản bác nhẹ về mức độ)."
  },
  {
    id: 144, grammar: "(으)ㄹ세라",
    senses: [{ meaning: "vì sợ rằng... (e ngại lo lắng)", groupId: "worry" }],
    synonymPatterns: ["(으)ㄹ까 봐(서)"],
    ownExamples: [{ sentence: "아이가 다칠<b>세라</b> 항상 손을 꼭 잡았다.", translation: "Luôn nắm chặt tay vì sợ con bị thương." }],
    notes: "văn viết/cổ điển hơn (으)ㄹ까 봐; thường xuất hiện trong văn học, bài thi"
  },
  {
    id: 146, grammar: "(으)면 하다",
    senses: [{ meaning: "mong rằng, ước rằng", groupId: "wish" }],
    synonymPatterns: ["(으)면 좋겠다"],
    ownExamples: [{ sentence: "빨리 나았으면 해요.", translation: "Tôi mong bạn mau hồi phục." }],
    notes: "tương đương (으)면 좋겠다; ngắn gọn hơn trong văn nói; thường dùng kèm 았/었으면"
  },
  {
    id: 147, grammar: "(으)ㄴ/는 데 반해",
    senses: [{ meaning: "trong khi đó, trái lại (so sánh đối lập)", groupId: "contrast_opposite" }],
    synonymPatterns: ["(으)ㄴ/는 반면에"],
    ownExamples: [{ sentence: "언니는 키가 큰 <b>데 반해</b> 동생은 작아요.", translation: "Chị thì cao, trong khi đó em thì lại thấp." }],
    notes: "tương đương (으)ㄴ/는 반면에; nhấn mạnh sự tương phản rõ nét giữa hai vế"
  },
  {
    id: 148, grammar: "것 같아서",
    senses: [{ meaning: "vì cảm thấy/có vẻ như... nên (dùng làm lý do)", groupId: "reason_guess" }],
    synonymPatterns: ["기 때문에", "(으)니까"],
    ownExamples: [{ sentence: "늦을 <b>것 같아서</b> 일찍 출발했어요.", translation: "Vì sợ trễ nên tôi xuất phát sớm." }],
    notes: "dùng khi không chắc chắn về nguyên nhân; phỏng đoán nhẹ; thường đi kèm '그런지'"
  },
  {
    id: 149, grammar: "(으)ㄴ/는 것은 물론이고",
    senses: [{ meaning: "không những...mà còn, ...là đương nhiên, còn thêm...", groupId: "addition" }],
    synonymPatterns: ["(으)ㄹ 뿐만 아니라", "(으)ㄴ/는 데다가", "(으)려니와/거니와", "은/는 말할 것도 없고"],
    ownExamples: [
      { sentence: "한국어는 <b>물론이고</b> 일본어도 잘해요.", translation: "Không chỉ tiếng Hàn, tiếng Nhật cũng giỏi luôn." },
      { sentence: "시간은 <b>물론이고</b> 돈도 없어요.", translation: "Thời gian là đương nhiên rồi, tiền cũng không có nốt." }
    ],
    notes: "A는 물론이고 B: A đã là đương nhiên, B còn thêm vào; mạnh hơn 뿐만 아니라. Với danh từ thì dùng 은/는 물론이고."
  },
  {
    id: 150, grammar: "(으)ㄴ/는 것처럼 행동하다",
    senses: [{ meaning: "hành động như thể là, làm như là", groupId: "pretend" }],
    synonymPatterns: ["(으)ㄴ/는 척하다", "(으)ㄴ/는 체하다"],
    ownExamples: [{ sentence: "그는 모든 것을 다 아는 <b>것처럼 행동했다</b>.", translation: "Anh ta hành động như thể biết tất cả mọi thứ." }],
    notes: "diễn đạt hành vi giả vờ; ít cố định hơn 척하다; thường dùng trong mô tả văn học"
  },
  {
    id: 151, grammar: "고",
    senses: [{ meaning: "trong khi, với trạng thái (giữ nguyên)", groupId: "state" }],
    synonymPatterns: ["(으)ㄴ 채(로)", "(으)며"],
    ownExamples: [{ sentence: "신발을 <b>신고</b> 들어왔어요.", translation: "Bước vào trong khi vẫn còn đi giày." }],
    notes: "고 có 3 nghĩa chính: (1) Thứ tự: A rồi B — 밥을 먹고 이를 닦아요 (Ăn cơm rồi đánh răng); (2) Đồng thời: làm 2 việc cùng lúc — 음악을 듣고 공부해요 (Vừa nghe nhạc vừa học); (3) Trạng thái: giữ nguyên trạng thái A trong khi B — 신발을 신고 들어왔어요 (Vào nhà mà vẫn đi giày). ⚠ 고 (nghĩa trạng thái) và 채(로) không phải lúc nào cũng thay thế được nhau: 채(로) nhấn mạnh trạng thái được duy trì có chủ ý hoặc bất thường; 고 trung tính hơn. Trong thi cử cần xác định nghĩa đang dùng trước khi chọn cấu trúc thay thế."
  },
  {
    id: 152, grammar: "고 나서야",
    senses: [{ meaning: "mãi đến sau khi... mới, chỉ sau khi... mới", groupId: "sequence" }],
    synonymPatterns: ["(으)ㄴ 후에", "고 나서"],
    ownExamples: [{ sentence: "설명을 <b>듣고 나서야</b> 이해할 수 있었어요.", translation: "Mãi đến sau khi nghe giải thích mới hiểu được." }],
    notes: "nhấn mạnh việc kết quả chỉ xảy ra SAU KHI hoàn tất hành động; 야 tạo sắc thái 'mãi mới'"
  },
  {
    id: 153, grammar: "고 말다",
    senses: [{ meaning: "cuối cùng đã lỡ làm, rốt cuộc đã (tiêu cực)", groupId: "completion" }],
    synonymPatterns: ["아/어 버리다"],
    ownExamples: [{ sentence: "참으려고 했는데 결국 울<b>고 말았다</b>.", translation: "Định nhịn nhưng cuối cùng vẫn cứ khóc." }],
    notes: "diễn đạt kết cục không mong muốn dù đã cố gắng tránh; mang sắc thái tiếc nuối/bất lực"
  },
  {
    id: 154, grammar: "(으)려던 참에",
    senses: [{ meaning: "đúng lúc đang định (làm gì đó) thì", groupId: "intention" }],
    synonymPatterns: ["(으)려던 참이다", "(으)려고 하다"],
    ownExamples: [{ sentence: "전화하<b>려던 참에</b> 마침 문자가 왔어요.", translation: "Đúng lúc đang định gọi điện thì tin nhắn tới luôn." }],
    notes: "결합 (으)려고 하던 참이다 + 에; nhấn mạnh sự trùng hợp thời điểm; vế sau thường là điều xảy ra đúng lúc. Khác 려던 참이다 (đứng cuối câu): 려던 참에 nối sang vế sau"
  },
  {
    id: 155, grammar: "기 일쑤이다",
    senses: [{ meaning: "hay bị, thường xuyên (xảy ra điều xấu)", groupId: "habit" }],
    synonymPatterns: ["곤 하다"],
    ownExamples: [{ sentence: "그는 약속을 잊어버리<b>기 일쑤예요</b>.", translation: "Anh ấy hay quên hẹn lắm." }],
    notes: "thường kết quả tiêu cực; nhấn mạnh sự lặp đi lặp lại của lỗi/thói quen xấu. ⚠ Khác 기 십상이다: 기 십상이다 (dễ bị) là nói về XÁC SUẤT xảy ra trong tương lai; 기 일쑤이다 (hay bị) là nói về TẦN SUẤT lặp lại."
  },
  {
    id: 156, grammar: "기가 바쁘게",
    senses: [{ meaning: "vừa mới... đã ngay lập tức", groupId: "immediate" }],
    synonymPatterns: ["자마자", "기가 무섭게"],
    ownExamples: [{ sentence: "집에 들어오<b>기가 바쁘게</b> 쓰러졌어요.", translation: "Vừa mới bước vào nhà đã ngã xuống luôn." }],
    notes: "tương đương 기가 무섭게; gần nghĩa 자마자; nhấn mạnh tốc độ cực nhanh ngay tức thì"
  },
  {
    id: 157, grammar: "기만 하면",
    senses: [{ meaning: "hễ, chỉ cần (làm gì thì kết quả luôn xảy ra)", groupId: "whenever" }],
    synonymPatterns: ["(으)ㄹ 때마다"],
    ownExamples: [{ sentence: "그 사람 생각을 하<b>기만 하면</b> 눈물이 나요.", translation: "Hễ cứ nghĩ đến người đó là nước mắt lại rơi." }],
    notes: "vế sau diễn đạt kết quả tất yếu; gắn sau động từ; mạnh hơn 때마다 về tính tất yếu"
  },
  {
    id: 159, grammar: "는 사이에",
    senses: [{ meaning: "trong khi/trong lúc (một sự thay đổi xảy ra bất ngờ)", groupId: "while_time" }],
    synonymPatterns: ["는 동안"],
    ownExamples: [{ sentence: "내가 잠을 자<b>는 사이에</b> 비가 왔어요.", translation: "Trong lúc tôi đang ngủ thì trời đã mưa (không hay biết)." }],
    notes: "Diễn tả hành động xảy ra trong khoảnh khắc ngắn hoặc sơ hở. Bắt buộc chủ ngữ 2 vế phải khác nhau. Thường vế sau là sự thay đổi đột ngột ngoài ý muốn."
  },
  {
    id: 160, grammar: "노라면",
    senses: [{ meaning: "cứ làm mãi thì (sẽ có kết quả tương lai)", groupId: "future_result" }],
    synonymPatterns: ["다(가) 보면", "다가보면"],
    ownExamples: [{ sentence: "계속 <b>연습하노라면</b> 언젠가는 잘하게 될 거예요.", translation: "Cứ kiên trì luyện tập thì rồi sẽ giỏi thôi." }],
    notes: "văn viết hơn 다 보면; nhấn mạnh quá trình liên tục → kết quả tương lai"
  },
  {
    id: 161, grammar: "느니 (차라리)",
    senses: [{ meaning: "thà... còn hơn (bất mãn, không muốn)", groupId: "preference" }],
    synonymPatterns: ["(으)ㄹ 바에야"],
    ownExamples: [{ sentence: "이렇게 사느니 차라리 포기하겠어요.", translation: "Thà từ bỏ còn hơn sống như thế này." }],
    notes: "mang sắc thái chán nản/bất mãn mạnh hơn (으)ㄹ 바에야; vế sau thường có 차라리"
  },
  {
    id: 162, grammar: "는 것과 같이",
    senses: [{ meaning: "giống như, theo như (so sánh tương đồng)", groupId: "like_as" }],
    synonymPatterns: ["것처럼", "V-다시피"],
    ownExamples: [{ sentence: "선생님이 말씀하신 <b>것과 같이</b> 연습이 중요합니다.", translation: "Như thầy đã nói, luyện tập là điều quan trọng." }],
    notes: "dùng khi so sánh hoặc trích dẫn; trang trọng; thường trong văn viết học thuật"
  },
  {
    id: 163, grammar: "는 것처럼",
    senses: [{ meaning: "như là, giống như đang", groupId: "like_as" }],
    synonymPatterns: ["것처럼", "듯이", "는 대로", "V-다시피"],
    ownExamples: [{ sentence: "그는 아무 일도 없었던 <b>것처럼</b> 행동했다.", translation: "Anh ta hành động như thể không có chuyện gì xảy ra." }],
    notes: "so sánh trạng thái hoặc cách thức; kết hợp phổ biến với 마치 để nhấn mạnh"
  },
  {
    id: 164, grammar: "는 바와 같이",
    senses: [{ meaning: "như đã (trình bày/nêu), theo như đã", groupId: "like_as" }],
    synonymPatterns: ["것처럼", "V-다시피", "는 대로"],
    ownExamples: [{ sentence: "위에서 설명한 <b>바와 같이</b> 이 방법은 효과적이에요.", translation: "Như đã giải thích ở trên, phương pháp này rất hiệu quả." }],
    notes: "văn viết trang trọng; dùng khi trích dẫn lại nội dung đã đề cập; phổ biến trong báo cáo, luận văn"
  },
  {
    id: 169, grammar: "다름 아니라",
    senses: [{ meaning: "không gì khác ngoài, chính là (giới thiệu/giải thích lý do)", groupId: "only" }],
    synonymPatterns: [],
    ownExamples: [
      { sentence: "연락드린 이유는 <b>다름 아니라</b> 일정을 확인하고 싶어서예요.", translation: "Lý do liên lạc không gì khác chính là muốn xác nhận lịch trình." }
    ],
    notes: "cấu trúc cố định '다름 아니라': đứng giữa câu, dùng để giới thiệu hoặc nêu lý do ('chính là / không gì khác ngoài'). ⚠ Khác 에 불과하다 / 뿐이다 (hạ thấp, giới hạn): 다름 아니라 không mang sắc thái hạ thấp — chỉ đơn thuần xác định/giải thích. Không nhầm với 거나 다름없다 (không khác gì = tương đương về bản chất)."
  },
  {
    id: 171, grammar: "말할 것도 없다",
    senses: [{ meaning: "không cần phải nói, đương nhiên rồi (hiển nhiên vì ai cũng biết)", groupId: "no_need_obvious" }],
    synonymPatterns: ["(으)ㄹ 나위가 없다", "은/는 물론이고"],
    ownExamples: [{ sentence: "건강이 중요하다는 것은 <b>말할 것도 없어요</b>.", translation: "Việc sức khỏe là quan trọng thì đương nhiên khỏi phải nói rồi." }],
    notes: "diễn đạt điều hiển nhiên, ai cũng đã biết — không cần phải nêu ra. Nhấn mạnh tính HIỂN NHIÊN PHỔ QUÁT. ⚠ Khác 나위가 없다 (tuyệt đỉnh): 말할 것도 없다 = 'không cần nói vì ai cũng biết'; 나위가 없다 = 'không cần nói vì đã quá hoàn hảo'. Khác 물론이고: 말할 것도 없다 đứng độc lập (cuối câu hoặc đầu mệnh đề); 물론이고 nối 2 vế."
  },
  {
    id: 172, grammar: "면 바로",
    senses: [{ meaning: "hễ... thì ngay lập tức", groupId: "immediate" }],
    synonymPatterns: ["자마자", "기가 무섭게", "는 대로"],
    ownExamples: [{ sentence: "신호가 바뀌<b>면 바로</b> 출발하세요.", translation: "Hễ đèn chuyển thì xuất phát ngay lập tức." }],
    notes: "nhấn mạnh tốc độ tức thì của phản ứng; ít trang trọng hơn 자마자; phổ biến trong văn nói"
  },
  {
    id: 173, grammar: "(으)면서",
    senses: [{ meaning: "vừa... vừa...", groupId: "concurrent_action" }],
    synonymPatterns: ["(으)며"],
    ownExamples: [{ sentence: "음악을 <b>들으면서</b> 청소를 해요.", translation: "Tôi vừa nghe nhạc vừa dọn dẹp." }],
    notes: "Hai hành động xảy ra ĐỒNG THỜI. Chủ ngữ của 2 vế bắt buộc phải LÀ MỘT. ⚠ Phân biệt với (으)면서(도) (ID 6): (으)면서(도) mang nghĩa tương phản (mặc dù/nhưng)."
  },
  {
    id: 177, grammar: "아서/어서 그런지",
    senses: [{ meaning: "có lẽ vì... nên (phỏng đoán nguyên nhân)", groupId: "reason_guess" }],
    synonymPatterns: ["(으)ㄴ/는 지 (모르다)", "(으)니까", "(으)ㄴ/는지 (모르다)"],
    ownExamples: [{ sentence: "잠을 못 자서 <b>그런지</b> 피곤해요.", translation: "Có lẽ vì không ngủ được nên tôi thấy mệt." }],
    notes: "dùng khi không chắc chắn về nguyên nhân; phỏng đoán nhẹ; thường đi kèm '그런지'"
  },
  {
    id: 178, grammar: "았/었는데",
    senses: [{ meaning: "vốn đã... nhưng (tương phản), nhưng mà (chuyển ý)", groupId: "contrast_general" }],
    synonymPatterns: ["더니", "(으)ㄴ/는데도"],
    ownExamples: [{ sentence: "열심히 공부했<b>는데</b> 시험을 못 봤어요.", translation: "Đã học hết sức nhưng thi không tốt." }],
    notes: "dạng quá khứ của 는데; diễn đạt sự tương phản giữa kỳ vọng và thực tế. ⚠ 더니 chỉ dùng khi người nói trực tiếp quan sát và mang nhiều nghĩa khác nhau, không thay thế hoàn toàn trong mọi ngữ cảnh."
  },
  {
    id: 179, grammar: "어/아 놓은 채로",
    senses: [{ meaning: "trong trạng thái đã làm sẵn rồi mà vẫn cứ vậy", groupId: "state" }],
    synonymPatterns: ["(으)ㄴ 채(로)", "아/어 놓다"],
    ownExamples: [{ sentence: "창문을 열어 <b>놓은 채로</b> 잠이 들었어요.", translation: "Đã mở cửa sổ rồi mà vẫn cứ ngủ như vậy." }],
    notes: "kết합 아/어 놓다 + 채로; nhấn mạnh trạng thái đã chuẩn bị sẵn được duy trì"
  },
  {
    id: 182, grammar: "에 지나지 않다",
    senses: [{ meaning: "chẳng qua chỉ là, không hơn gì là", groupId: "only" }],
    synonymPatterns: ["에 불과하다", "일 뿐이다"],
    ownExamples: [{ sentence: "그건 핑계에 <b>지나지 않아요</b>.", translation: "Cái đó chẳng qua chỉ là cái cớ thôi." }],
    notes: "tương đương 에 불과하다; văn viết; gắn sau danh từ + 에"
  },
  {
    id: 183, grammar: "은/는 말할 것도 없고",
    senses: [{ meaning: "...는 당연하고, 거기다... (bổ sung cùng chiều)", groupId: "addition" }],
    synonymPatterns: ["(으)ㄹ 뿐만 아니라", "(으)ㄴ/는 것은 물론이고"],
    ownExamples: [{ sentence: "영어는 <b>말할 것도 없고</b> 한국어도 잘해요.", translation: "Tiếng Anh đương nhiên rồi, tiếng Hàn cũng giỏi luôn." }],
    notes: "A는 말할 것도 없고 B: A hiển nhiên, B còn bổ sung thêm; dùng cả chiều tích cực lẫn tiêu cực. Khác 커녕 (커녕 chỉ tiêu cực)"
  },
  {
    id: 184, grammar: "(으)며",
    senses: [{ meaning: "vừa... vừa..., và", groupId: "concurrent_action" }],
    synonymPatterns: ["(으)면서", "고", "기도 하고"],
    ownExamples: [{ sentence: "그는 피아노를 <b>치며</b> 노래를 불렀다.", translation: "Anh ấy vừa đánh piano vừa hát." }],
    notes: "Giống (으)면서 (vừa... vừa...) hoặc giống 고 (liệt kê), nhưng mang tính văn viết/trang trọng hơn."
  },
  {
    id: 185, grammar: "(으)ㄹ 줄 알다/모르다",
    senses: [{ meaning: "biết/không biết cách làm (năng lực, kỹ năng)", groupId: "ability" }],
    synonymPatterns: ["(으)ㄹ 수 있다", "(으)ㄹ 능력이 있다"],
    ownExamples: [
      { sentence: "저는 수영할 <b>줄 알아요</b>.", translation: "Tôi biết bơi." },
      { sentence: "요리할 <b>줄 몰라서</b> 항상 외식해요.", translation: "Vì không biết nấu ăn nên tôi luôn ăn ngoài." }
    ],
    notes: "chỉ năng lực/kỹ năng đã học được; khác (으)ㄹ 수 있다 (cả năng lực lẫn khả năng xảy ra): 줄 알다 CHỈ dùng cho kỹ năng có thể học. ⚠ 줄 알다 vs 줄 몰랐다: 줄 알다 = biết cách; 줄 몰랐다 (ID 11) = không ngờ rằng — hai nghĩa khác nhau hoàn toàn"
  },
  {
    id: 188, grammar: "기 때문에",
    senses: [{ meaning: "vì, do (lý do khách quan)", groupId: "reason_general" }],
    synonymPatterns: ["아서/어서", "(으)니까", "아/어서", "(으)므로"],
    ownExamples: [{ sentence: "비가 오<b>기 때문에</b> 행사를 취소했어요.", translation: "Vì trời mưa nên đã hủy sự kiện." }],
    notes: "chỉ nguyên nhân khách quan; KHÔNG dùng mệnh lệnh/rủ rê ở vế sau; khác 니까 (dùng được mệnh lệnh)"
  },
  {
    id: 189, grammar: "아/어서",
    senses: [{ meaning: "vì, nên (nguyên nhân cơ bản)", groupId: "reason_general" }],
    synonymPatterns: ["기 때문에", "(으)니까", "(으)므로"],
    ownExamples: [{ sentence: "배가 고파<b>서</b> 밥을 먹었어요.", translation: "Vì đói nên tôi ăn cơm." }],
    notes: "KHÔNG dùng mệnh lệnh/rủ rê; KHÔNG gắn thì quá khứ trực tiếp (았/었어서 ×); cơ bản nhất trong nhóm nguyên nhân"
  },
  {
    id: 190, grammar: "(으)므로",
    senses: [{ meaning: "vì, do (văn viết trang trọng)", groupId: "reason_general" }],
    synonymPatterns: ["기 때문에", "아/어서"],
    ownExamples: [{ sentence: "시간이 부족하<b>므로</b> 핵심만 말씀드리겠습니다.", translation: "Vì thời gian không đủ nên tôi sẽ chỉ nói những điểm chính." }],
    notes: "văn viết; CÓ THỂ gắn thì quá khứ/tương lai ở trước (았/었으므로, 겠으므로); thường xuất hiện trong đề thi TOPIK văn viết"
  },
  {
    id: 191, grammar: "(으)려니와/거니와",
    senses: [{ meaning: "không những... mà còn (thừa nhận rồi bổ sung)", groupId: "addition" }],
    synonymPatterns: ["(으)ㄹ 뿐만 아니라", "(으)ㄴ/는 데다가", "(으)ㄴ/는 것은 물론이고"],
    ownExamples: [
      { sentence: "그는 기타도 잘 <b>치거니와</b> 노래도 잘한다.", translation: "Anh ấy không những chơi guitar giỏi mà còn hát hay nữa." },
      { sentence: "이 음식은 <b>맛도 있거니와</b> 푸짐해서 좋다.", translation: "Món này không những ngon mà còn đầy đặn nữa nên rất thích." }
    ],
    notes: "văn viết hoặc trang trọng; dùng khi thừa nhận vế trước và bổ sung thêm thông tin vế sau cùng chiều"
  },
  {
    id: 192, grammar: "(으)ㄹ 것까지 없다",
    senses: [{ meaning: "không cần đến mức phải, không cần thiết phải vậy", groupId: "no_need_exemption" }],
    synonymPatterns: ["(으)ㄹ 필요가 없다", "(으)ㄹ 필요까지는 없다", "굳이 (~지 않아도 되다)"],
    ownExamples: [
      { sentence: "그렇게 심하게 울 <b>것까지야 없잖아</b>.", translation: "Không cần phải khóc đến mức như vậy chứ." },
      { sentence: "제가 직접 거기까지 갈 <b>것까지는 없고</b> 전화로 확인하면 돼요.", translation: "Tôi không cần phải đích thân đến tận nơi, gọi điện xác nhận là được rồi." }
    ],
    notes: "Nhấn mạnh hành động là không cần thiết ở mức độ như vậy — hơi cao hơn 필요가 없다 về sắc thái (ngụ ý 'không cần thiết phải làm đến vậy'). Thường gắn 까지 hoặc 까지야 để tăng nhấn mạnh. ⚠ Khác 필요가 없다 (đơn thuần không cần): 것까지 없다 thường hàm ý hành động đang xét là hơi thái quá hoặc không cần thiết trong hoàn cảnh đó. Hay xuất hiện trong đề TOPIK II dạng điền từ."
  },
  {
    id: 193, grammar: "두말할 것도 없이",
    senses: [{ meaning: "không cần phải nói lại lần nữa, đương nhiên tuyệt đối", groupId: "obvious_skip" }],
    synonymPatterns: ["말할 것도 없이", "물론이고", "(으)ㄹ 것도 없이"],
    ownExamples: [
      { sentence: "그가 최고라는 건 <b>두말할 것도 없이</b> 모두가 인정하는 사실이다.", translation: "Việc anh ấy là số một là sự thật ai cũng thừa nhận, không cần phải nói thêm." }
    ],
    notes: "두말 = 'hai lời' → không cần đến lần nói thứ hai. Mạnh và trang trọng hơn 말할 것도 없다 (ID 171). Là adverbial connector — PHẢI có mệnh đề khẳng định sau, không dùng độc lập được. ⚠ Khác 말할 것도 없다 (predicate, cuối câu độc lập): 두말할 것도 없이 là connector buộc phải nối mệnh đề sau."
  },
  {
    id: 194, grammar: "굳이 (~지 않아도 되다)",
    senses: [{ meaning: "không cần phải cố làm, không nhất thiết phải", groupId: "obvious_skip" }],
    synonymPatterns: ["(으)ㄹ 필요가 없다", "(으)ㄹ 것까지 없다"],
    ownExamples: [
      { sentence: "<b>굳이</b> 지금 결정하지 않아도 돼요. 천천히 생각해 보세요.", translation: "Không cần phải cố quyết định ngay bây giờ. Hãy suy nghĩ từ từ nhé." },
      { sentence: "<b>굳이</b> 거기까지 찾아갈 필요가 있을까요?", translation: "Có thực sự cần thiết phải cố đến tận nơi đó không?" }
    ],
    notes: "굳이 = 'cố ý, cố sức làm dù không cần thiết'. Nhấn mạnh sự không cần thiết VỀ MẶT NỖ LỰC. ⚠ Khác 것도 없이 (thừa vì kết quả đã rõ): 굳이 nhấn mạnh sự CỐ SỨC không cần thiết, không nhất thiết vì kết quả hiển nhiên. Pattern thường gặp: 굳이 V지 않아도 되다 / 굳이 V할 필요가 없다 / 굳이 따지자면 (nếu cứ phải phân tích thì...)."
  },
  {
    id: 195, grammar: "(으)ㄹ 것이 틀림없다",
    senses: [{ meaning: "chắc chắn là, không thể sai (kết luận dựa trên căn cứ)", groupId: "obvious" }],
    synonymPatterns: ["(으)ㄹ 게 틀림없다", "(으)ㄹ 것이 분명하다"],
    ownExamples: [
      { sentence: "이렇게 열심히 준비했으니 좋은 결과가 있을 <b>것이 틀림없다</b>.", translation: "Đã chuẩn bị kỹ lưỡng như vậy, chắc chắn sẽ có kết quả tốt." },
      { sentence: "현장에서 발견된 증거로 보아 그가 범인일 <b>것이 틀림없다</b>.", translation: "Dựa vào bằng chứng tìm thấy tại hiện trường, chắc chắn anh ta là hung thủ." }
    ],
    notes: "Dạng đầy đủ/trang trọng của 게 틀림없다 (ID 135) — thường dùng trong văn viết hoặc lập luận có căn cứ. ⚠ Khác 게 틀림없다 (135): 것이 틀림없다 nhấn mạnh KẾT LUẬN DỰA TRÊN CĂN CỨ (bằng chứng, suy luận logic); 게 틀림없다 mang sắc thái tự tin/cảm tính hơn. Khác 것이 분명하다 (133): 분명하다 thiên về khẳng định trực tiếp; 틀림없다 thiên về phủ nhận khả năng sai."
  }
  ,
  {
    id: 200, grammar: "(으)ㄹ 뿐더러",
    senses: [{ meaning: "không những...mà còn", groupId: "addition" }],
    synonymPatterns: ["(으)ㄹ 뿐만 아니라", "(으)ㄴ/는 데다가"],
    examples: [
      { sentence: "그는 성격이 <b>좋을 뿐더러</b> 능력도 뛰어나다.", translation: "Anh ấy không những tính cách tốt mà còn có năng lực xuất sắc." }
    ], notes: "văn viết, trang trọng hơn 뿐만 아니라; cấu trúc: V/A-(으)ㄹ 뿐더러"
  },
  {
    id: 201, grammar: "아/어야 할 뿐이다",
    senses: [{ meaning: "chỉ còn cách phải làm", groupId: "no_choice" }],
    synonymPatterns: ["(으)ㄹ 수밖에 없다", "지 않을 수 없다"],
    examples: [
      { sentence: "상황이 이렇게 됐으니 최선을 다해야 <b>할 뿐이다</b>.", translation: "Tình huống đã thế này rồi thì chỉ còn cách cố hết sức mà thôi." }
    ], notes: "nhấn mạnh đây là lựa chọn duy nhất; tương đương (으)ㄹ 수밖에 없다"
  },
  {
    id: 203, grammar: "려거든",
    senses: [{ meaning: "nếu muốn/định làm... thì", groupId: "condition_intent" }],
    synonymPatterns: ["(으)려면", "고 싶으면", "자면"],
    examples: [
      { sentence: "성공하<b>려거든</b> 지금부터 열심히 노력해라.", translation: "Nếu muốn thành công thì hãy bắt đầu nỗ lực từ bây giờ." }
    ], notes: "văn nói/trang trọng; mang tính điều kiện + khuyên bảo; tương đương (으)려면"
  },
  {
    id: 204, grammar: "자면",
    senses: [{ meaning: "nếu muốn/định... thì (rút gọn)", groupId: "condition_intent" }],
    synonymPatterns: ["(으)려면", "려거든"],
    examples: [
      { sentence: "빨리 도착하<b>자면</b> 지금 출발해야 한다.", translation: "Muốn đến sớm thì phải xuất phát ngay bây giờ." }
    ], notes: "rút gọn của 려면 또는 고자 하면; văn viết, trang trọng"
  },
  {
    id: 205, grammar: "기는 하지만",
    senses: [{ meaning: "tuy có... nhưng (thừa nhận rồi đối lập)", groupId: "contrast_opposite" }],
    synonymPatterns: ["(으)ㄴ/는가 하면", "(으)ㄴ/는 반면에"],
    examples: [
      { sentence: "이 영화가 재미있<b>기는 하지만</b> 좀 길어요.", translation: "Phim này tuy thú vị nhưng hơi dài." }
    ], notes: "thừa nhận vế trước nhưng đưa ra nhận xét/đối lập ở vế sau; tương đương 가 하면 trong một số ngữ cảnh"
  },
];