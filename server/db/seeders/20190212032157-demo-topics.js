'use strict';

module.exports = {
    up: (queryInterface) => {
        let t = new Date();

        let topics = [
            {title: '1 ngày làm mẹ',summary:'Tuổi thơ ai sinh ra và lớn lên cũng từng ít nhất 1 lần ăn trái ô mai trong đời', img:'../../../assets/images/b1.jpg', created_at: t, updated_at: t,content:'<div class="postbody"> <div class="postrow">  <div class="content"> <div id="post_message_36354571"> <blockquote class="postcontent restore"> <b>Tuổi thơ ai sinh ra và lớn lên cũng từng ít nhất 1 lần ăn trái ô mai trong đời, ăn thì ăn vậy thôi chứ ít ai biết được rằng ô mai có vô vàng công dụng chữa bệnh tuyệt vời đặc biệt là bệnh về phụ nữ.<br> <br>\n' +
                    'Mỗi lần ăn trái ô mai là em lại nhớ tới căn bệnh hiểm nghèo của chị em chúng mình các chị ạ. Ngày trước khi mẹ em mới phát căn bệnh tai biến em hay dẫn mẹ đi châm cứu ở gần nhà lắm.</b><div muted="true" autoplay="true" poster="https://vjs.zencdn.net/v/oceans.png" class="video-js vjs-default-skin content_video-dimensions vjs-controls-enabled vjs-has-started vjs-ad-playing vjs-paused vjs-user-inactive" id="content_video" style="margin: 0 auto;"><video style="margin: 0 auto;" id="content_video_html5_api" class="vjs-tech" autoplay="" muted=""> <source src="https://img.webtretho.com/forum/clientscript/inpage_video/js/default.mp4" type="video/mp4"></video><div></div><div class="vjs-poster" tabindex="-1" style="background-image: url(&quot;https://vjs.zencdn.net/v/oceans.png&quot;);"></div><div class="vjs-text-track-display vjs-hidden"></div><div class="vjs-loading-spinner"></div><button class="vjs-big-play-button" tabindex="0" role="button" type="button" aria-live="polite"><span class="vjs-control-text">Play Video</span></button><div class="vjs-control-bar vjs-hidden"><button class="vjs-play-control vjs-control vjs-button vjs-paused" tabindex="0" role="button" type="button" aria-live="polite"><span class="vjs-control-text">Play</span></button><div class="vjs-volume-menu-button vjs-menu-button vjs-menu-button-inline vjs-control vjs-button vjs-volume-menu-button-horizontal vjs-vol-1" tabindex="0" role="button" type="button" aria-live="polite" aria-haspopup="true"><span class="vjs-control-text">Mute</span><div class="vjs-menu"><div class="vjs-menu-content"><div tabindex="0" class="vjs-volume-bar vjs-slider-bar vjs-slider vjs-slider-horizontal" role="slider" aria-valuenow="2.00" aria-valuemin="0" aria-valuemax="100" aria-label="volume level" aria-valuetext="2.00%"><div class="vjs-volume-level" style="width: 2%;"><span class="vjs-control-text"></span></div></div></div></div></div><div class="vjs-current-time vjs-time-control vjs-control"><div class="vjs-current-time-display" aria-live="off"><span class="vjs-control-text">Current Time</span> 0:01</div></div><div class="vjs-time-control vjs-time-divider"><div><span>/</span></div></div><div class="vjs-duration vjs-time-control vjs-control"><div class="vjs-duration-display" aria-live="off"><span class="vjs-control-text">Duration Time</span> 0:04</div></div><div class="vjs-progress-control vjs-control"><div tabindex="0" class="vjs-progress-holder vjs-slider vjs-slider-horizontal" role="slider" aria-valuenow="31.37" aria-valuemin="0" aria-valuemax="100" aria-label="video progress bar" aria-valuetext="0:01"><div class="vjs-load-progress"><span class="vjs-control-text"><span>Loaded</span>: 0%</span></div><div class="vjs-mouse-display" data-current-time="0:00" style="left: 0px;"></div><div class="vjs-play-progress vjs-slider-bar" data-current-time="0:01" style="width: 31.37%;"><span class="vjs-control-text"><span>Progress</span>: 0%</span></div></div></div><div class="vjs-live-control vjs-control vjs-hidden"><div class="vjs-live-display" aria-live="off"><span class="vjs-control-text">Stream Type</span>LIVE</div></div><div class="vjs-remaining-time vjs-time-control vjs-control"><div class="vjs-remaining-time-display" aria-live="off"><span class="vjs-control-text">Remaining Time</span> -0:02</div></div><div class="vjs-custom-control-spacer vjs-spacer ">&nbsp;</div><div class="vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden" tabindex="0" role="button" type="button" aria-live="polite" aria-haspopup="true"><span class="vjs-control-text">Playback Rate</span><div class="vjs-playback-rate-value">1</div><div class="vjs-menu"><ul class="vjs-menu-content"></ul></div></div><div class="vjs-chapters-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden" tabindex="0" role="button" type="button" aria-live="polite" aria-haspopup="true" aria-label="Chapters Menu"><span class="vjs-control-text">Chapters</span><div class="vjs-menu"><ul class="vjs-menu-content"><li class="vjs-menu-title" tabindex="-1">Chapters</li></ul></div></div><div class="vjs-subtitles-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden" tabindex="0" role="button" type="button" aria-live="polite" aria-haspopup="true" aria-label="Subtitles Menu"><span class="vjs-control-text">Subtitles</span><div class="vjs-menu"><ul class="vjs-menu-content"><li class="vjs-menu-item vjs-selected" tabindex="0" role="button" type="button" aria-live="polite" aria-selected="true">subtitles off<span class="vjs-control-text"></span></li></ul></div></div><div class="vjs-captions-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden" tabindex="0" role="button" type="button" aria-live="polite" aria-haspopup="true" aria-label="Captions Menu"><span class="vjs-control-text">Captions</span><div class="vjs-menu"><ul class="vjs-menu-content"><li class="vjs-menu-item vjs-selected" tabindex="0" role="button" type="button" aria-live="polite" aria-selected="true">captions off<span class="vjs-control-text"></span></li></ul></div></div><button class="vjs-fullscreen-control vjs-control vjs-button " tabindex="0" role="button" type="button" aria-live="polite"><span class="vjs-control-text">Fullscreen</span></button></div><div class="vjs-error-display vjs-modal-dialog vjs-hidden " tabindex="-1" aria-describedby="content_video_component_287_description" aria-hidden="true" aria-label="Modal Window" role="dialog"><p class="vjs-modal-dialog-description vjs-offscreen" id="content_video_component_287_description">This is a modal window.</p><div class="vjs-modal-dialog-content" role="document"></div></div><div class="vjs-caption-settings vjs-modal-overlay vjs-hidden"><div class="vjs-tracksettings">\n' +
                    '      <div class="vjs-tracksettings-colors">\n' +
                    '        <div class="vjs-fg-color vjs-tracksetting">\n' +
                    '            <label class="vjs-label">Foreground</label>\n' +
                    '            <select>\n' +
                    '              <option value="">---</option>\n' +
                    '              <option value="#FFF">White</option>\n' +
                    '              <option value="#000">Black</option>\n' +
                    '              <option value="#F00">Red</option>\n' +
                    '              <option value="#0F0">Green</option>\n' +
                    '              <option value="#00F">Blue</option>\n' +
                    '              <option value="#FF0">Yellow</option>\n' +
                    '              <option value="#F0F">Magenta</option>\n' +
                    '              <option value="#0FF">Cyan</option>\n' +
                    '            </select>\n' +
                    '            <span class="vjs-text-opacity vjs-opacity">\n' +
                    '              <select>\n' +
                    '                <option value="">---</option>\n' +
                    '                <option value="1">Opaque</option>\n' +
                    '                <option value="0.5">Semi-Opaque</option>\n' +
                    '              </select>\n' +
                    '            </span>\n' +
                    '        </div> <!-- vjs-fg-color -->\n' +
                    '        <div class="vjs-bg-color vjs-tracksetting">\n' +
                    '            <label class="vjs-label">Background</label>\n' +
                    '            <select>\n' +
                    '              <option value="">---</option>\n' +
                    '              <option value="#FFF">White</option>\n' +
                    '              <option value="#000">Black</option>\n' +
                    '              <option value="#F00">Red</option>\n' +
                    '              <option value="#0F0">Green</option>\n' +
                    '              <option value="#00F">Blue</option>\n' +
                    '              <option value="#FF0">Yellow</option>\n' +
                    '              <option value="#F0F">Magenta</option>\n' +
                    '              <option value="#0FF">Cyan</option>\n' +
                    '            </select>\n' +
                    '            <span class="vjs-bg-opacity vjs-opacity">\n' +
                    '                <select>\n' +
                    '                  <option value="">---</option>\n' +
                    '                  <option value="1">Opaque</option>\n' +
                    '                  <option value="0.5">Semi-Transparent</option>\n' +
                    '                  <option value="0">Transparent</option>\n' +
                    '                </select>\n' +
                    '            </span>\n' +
                    '        </div> <!-- vjs-bg-color -->\n' +
                    '        <div class="window-color vjs-tracksetting">\n' +
                    '            <label class="vjs-label">Window</label>\n' +
                    '            <select>\n' +
                    '              <option value="">---</option>\n' +
                    '              <option value="#FFF">White</option>\n' +
                    '              <option value="#000">Black</option>\n' +
                    '              <option value="#F00">Red</option>\n' +
                    '              <option value="#0F0">Green</option>\n' +
                    '              <option value="#00F">Blue</option>\n' +
                    '              <option value="#FF0">Yellow</option>\n' +
                    '              <option value="#F0F">Magenta</option>\n' +
                    '              <option value="#0FF">Cyan</option>\n' +
                    '            </select>\n' +
                    '            <span class="vjs-window-opacity vjs-opacity">\n' +
                    '                <select>\n' +
                    '                  <option value="">---</option>\n' +
                    '                  <option value="1">Opaque</option>\n' +
                    '                  <option value="0.5">Semi-Transparent</option>\n' +
                    '                  <option value="0">Transparent</option>\n' +
                    '                </select>\n' +
                    '            </span>\n' +
                    '        </div> <!-- vjs-window-color -->\n' +
                    '      </div> <!-- vjs-tracksettings -->\n' +
                    '      <div class="vjs-tracksettings-font">\n' +
                    '        <div class="vjs-font-percent vjs-tracksetting">\n' +
                    '          <label class="vjs-label">Font Size</label>\n' +
                    '          <select>\n' +
                    '            <option value="0.50">50%</option>\n' +
                    '            <option value="0.75">75%</option>\n' +
                    '            <option value="1.00" selected="">100%</option>\n' +
                    '            <option value="1.25">125%</option>\n' +
                    '            <option value="1.50">150%</option>\n' +
                    '            <option value="1.75">175%</option>\n' +
                    '            <option value="2.00">200%</option>\n' +
                    '            <option value="3.00">300%</option>\n' +
                    '            <option value="4.00">400%</option>\n' +
                    '          </select>\n' +
                    '        </div> <!-- vjs-font-percent -->\n' +
                    '        <div class="vjs-edge-style vjs-tracksetting">\n' +
                    '          <label class="vjs-label">Text Edge Style</label>\n' +
                    '          <select>\n' +
                    '            <option value="none">None</option>\n' +
                    '            <option value="raised">Raised</option>\n' +
                    '            <option value="depressed">Depressed</option>\n' +
                    '            <option value="uniform">Uniform</option>\n' +
                    '            <option value="dropshadow">Dropshadow</option>\n' +
                    '          </select>\n' +
                    '        </div> <!-- vjs-edge-style -->\n' +
                    '        <div class="vjs-font-family vjs-tracksetting">\n' +
                    '          <label class="vjs-label">Font Family</label>\n' +
                    '          <select>\n' +
                    '            <option value="">Default</option>\n' +
                    '            <option value="monospaceSerif">Monospace Serif</option>\n' +
                    '            <option value="proportionalSerif">Proportional Serif</option>\n' +
                    '            <option value="monospaceSansSerif">Monospace Sans-Serif</option>\n' +
                    '            <option value="proportionalSansSerif">Proportional Sans-Serif</option>\n' +
                    '            <option value="casual">Casual</option>\n' +
                    '            <option value="script">Script</option>\n' +
                    '            <option value="small-caps">Small Caps</option>\n' +
                    '          </select>\n' +
                    '        </div> <!-- vjs-font-family -->\n' +
                    '      </div>\n' +
                    '    </div>\n' +
                    '    <div class="vjs-tracksettings-controls">\n' +
                    '      <button class="vjs-default-button">Defaults</button>\n' +
                    '      <button class="vjs-done-button">Done</button>\n' +
                    '    </div></div><div id="content_video_ima-ad-container" class="content_video_ima-ad-container ima-ad-container" style="position: absolute; z-index: 1111; display: block;"><div style="position: absolute; width: 580px; height: 326px;"><div style="display: block;"><video title="Advertisement" webkit-playsinline="true" playsinline="true" style="background-color: rgb(0, 0, 0); position: absolute; width: 100%; height: 100%; left: 0px; top: 0px;" src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.24130-6/55940602_129301541465447_8785395337425713694_n.mp4?_nc_cat=102&amp;efg=eyJxZV9ncm91cHMiOlsidW5tdXRlZCJdLCJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&amp;_nc_eui2=AeEX-EvG3zlPlvDlE3YxdA_FqV2q30Tz5uIxmTNID5_fuXEsP62uvsBfBP19V_pCjz9fh5XbYr7JJLWI2K1k15LA5U7IR5iXJStGx-TPq7kIvg&amp;_nc_ht=scontent.fsgn8-1.fna&amp;oh=852b062c33ef0caf06e5ac7981a6123d&amp;oe=5D485639"></video><div style="position: absolute; width: 100%; height: 100%; left: 0px; top: 0px;"></div></div><div style="display: none;"><video title="Advertisement" webkit-playsinline="true" playsinline="true" style="background-color: rgb(0, 0, 0); position: absolute; width: 100%; height: 100%; left: 0px; top: 0px;"></video><div style="position: absolute; width: 100%; height: 100%; left: 0px; top: 0px;"></div></div><iframe src="https://imasdk.googleapis.com/js/core/bridge3.287.0_en.html#goog_1175170044" allowfullscreen="" allow="autoplay" style="border: 0px; opacity: 1; margin: 0px; padding: 0px; position: relative;" width="580" height="326"></iframe></div><div id="content_video_ima-controls-div" class="content_video_ima-controls-div ima-controls-div" style="width: 100%; height: 14px; display: block;"><div id="content_video_ima-countdown-div" class="content_video_ima-countdown-div ima-countdown-div" style="display: block;">Advertisement: 0:23</div><div id="content_video_ima-seek-bar-div" class="content_video_ima-seek-bar-div ima-seek-bar-div" style="width: 100%;"><div id="content_video_ima-progress-div" class="content_video_ima-progress-div ima-progress-div" style="width: 0%;"></div></div><div id="content_video_ima-play-pause-div" class="content_video_ima-play-pause-div ima-play-pause-div ima-playing" style="display: none;"></div><div id="content_video_ima-mute-div" class="content_video_ima-mute-div ima-mute-div ima-non-muted" style="display: none;"></div><div id="content_video_ima-slider-div" class="content_video_ima-slider-div ima-slider-div" style="display: none;"><div id="content_video_ima-slider-level-div" class="content_video_ima-slider-level-div ima-slider-level-div" style="width: 2%;"></div></div><div id="content_video_ima-fullscreen-div" class="content_video_ima-fullscreen-div ima-fullscreen-div ima-non-fullscreen" style="display: none;"></div></div></div></div><br> <br>\n' +
                    'Em nhớ có lần chị kia đến phòng khám đông y mà khóc sướt mướt, khi mọi người hỏi đến thì mới biết chị bị bệnh sa tử cung (hay còn gọi là thoát vị tử cung). Mà chị mới có 25, 26 tuổi gì đó thôi; lại chưa có gia đình nữa. Chị còn nói dấu hiệu ban đầu chị cứ nghĩ là bệnh trĩ thôi, nên công việc nhiều chị cũng ít quan tâm tới. Đến khi đi khám thì mới biết bệnh đã chuyển sang thời kỳ giữa rồi.<br> <br>\n' +
                    'Nếu như em biết vào thời gian cách đây gần 10 năm khi biết đến căn bệnh này thì chỉ mổ mới có thể hết thôi. Mà nghe đâu nếu mổ thì chị sẽ không thể sinh con được.<br> <br>\n' +
                    'Vì căn bệnh này nếu nhẹ tử cung sẽ sa xuống, thập thò ở vùng âm đạo; mức độ trung bình tử cung sẽ lộ ra ngoài âm đạo, thân nằm trong âm đạo; còn nếu như đến mức độ nặng thì toàn bộ tử cung sẽ sa hẳn ra ngoài âm đạo.<br> <br>\n' +
                    'Chắc là chị cũng đã đi khám rồi nên mới biết được rằng nguyên nhân, tình trạng cũng như cách điều trị của bệnh. Cho đến khi chị phát hiện thì hình như bệnh của chị đã chuyển sang giai đoạn 2 mất rồi.<br> <br>\n' +
                    'Lúc này chú bốc thuốc mới kêu chị nín đi, cái này còn chữa khỏi không cần phải mổ đâu mà sợ. Nghe tới đây chắc chị ấy cũng nở hoa trong bụng. Chị và mẹ chị mừng quýnh lên với liều thuốc cứu thân mà không cần phải mổ.<br>\n' +
                    'Mọi người trong phòng khám ai cũng tò mò không biết bài thuốc đó là gì. Một cô khác vọt miệng kêu thôi chú nói luôn đi để bà con ở đây người biết chút.<br> <br>\n' +
                    'Thì chú bốc thuốc mới nói rằng trái ô mai có thể trị được nhiều bệnh lắm như: miễn dịch cho cơ thể, trị bệnh về đường hô hấp, giun chui ống mật, ngoài ra còn trị các bệnh về phụ nữa như là viêm nhiễm nấm âm đạo; điều hòa kinh nguyệt; thoát vị tử cung, đây là những căn bệnh phổ biến nhất của phụ nữ đấy các chị. Đặc biệt loại trái này có khả năng chèn ép các tế bào ung thư, ức chế sử phát triển lên đến 90%.<br> <br>\n' +
                    'Cây cao 3-4m. Lá đơn, hình bầu dục, mọc so le, lá có cuống, ngọn lá nhọn, mép có khía răng nhọn. Hoa trắng 5 cánh. Quả hạch màu vàng xanh có lông tơ.<br> <br>\n' +
                    'Ô mai có dạng hình cầu, hoặc hình tròn dẹt, to nhỏ không đều nhau. Vỏ ngoài màu đen hoặc đen nâu, nhăn, một đầu có rốn tròn lõm xuống. Cùi mềm có thể bóc được, hạt cứng, hình bầu dục, mầu vàng nâu, trong có 1 hạt nhân mầu vàng nhạt, không mùi, nghiền với nước có mùi thơm đặc biệt. Cùi quả hơi có mùi chua đặc biệt, vị rất chua.<br> <br> <b>Bài thuốc trị bệnh sa tử cung rất đơn giản nhe các chị</b><br> <br>\n' +
                    'Các chị chuẩn bị: 50g ô mai, ngũ bội tử 35g, sắc nước, bỏ cái, lấy nước thuốc xông, rửa, ngâm âm hộ, mỗi lần 30 phút, ngày làm 2 lần. Với công thức này các chị chỉ áp dụng từ 15 đến 20 ngày là sẽ thấy tác dụng rõ rệt nhe.<br> <br>\n' +
                    'Với bài thuốc này chị ấy chỉ áp dụng có 1 tháng thôi là đã hết hẳn luôn đấy các chị. Nhưng các chị cũng nên chú ý với những bài thuốc dân gian nhe, vì tính chất của mỗi loại thuốc có thể cơ địa của một số người sẽ không phù hợp với vị tính đó và gây ảnh hưởng đến sức khỏe. <br> <br>\n' +
                    'Xin mời xem thêm:<br> <br> <a href="https://www.webtretho.com/forum/f519/5-bai-thuoc-nam-chua-ung-thu-co-tu-cung-duoc-luu-truyen-trong-dan-gian-2355485/" target="_blank">https://www.webtretho.com/forum/f519/...-gian-2355485/</a><br> <a href="https://www.webtretho.com/forum/f119/ung-thu-co-tu-cung-giai-doan-cuoi-va-bai-thuoc-dieu-tri-k-cuoi-bai-nay-dieu-tri-238-nguoi-co-238-nguoi-het-benh-ma-khong-tai-phat-2505079/" target="_blank">https://www.webtretho.com/forum/f119/...-phat-2505079/</a><br> <a href="https://www.webtretho.com/forum/f26/chua-ung-thu-co-tu-cung-bang-bai-thuoc-tu-la-du-du-2394074/" target="_blank">https://www.webtretho.com/forum/f26/c...du-du-2394074/</a><div style="text-align: center;"><img class="gg-responsive" data-src="https://lh3.googleusercontent.com/iSK2ayUwXz11bggsg9-jFzwFfn1B_Gp7V8zKEkWcOJxHwPfknU2KQZb2NZTPAEaw04_7hIs0TdF77wI0TyT3xYxEtAl5Iw" border="0" alt="iSK2ayUwXz11bggsg9-jFzwFfn1B_Gp7V8zKEkWcOJxHwPfknU2KQZb2NZTPAEaw04_7hIs0TdF77wI0TyT3xYxEtAl5Iw" title="iSK2ayUwXz11bggsg9-jFzwFfn1B_Gp7V8zKEkWcOJxHwPfknU2KQZb2NZTPAEaw04_7hIs0TdF77wI0TyT3xYxEtAl5Iw" src="https://lh3.googleusercontent.com/iSK2ayUwXz11bggsg9-jFzwFfn1B_Gp7V8zKEkWcOJxHwPfknU2KQZb2NZTPAEaw04_7hIs0TdF77wI0TyT3xYxEtAl5Iw=w725"></div>Xem video tại đây: <div style="text-align: center;"><br> <br>\n' +
                    ' Bệnh ung thư cổ tử cung - Nguyên nhân và giải pháp<br> <a rel="nofollow" href="https://www.webtretho.com/video/2016/11/22/benh-ung-thu-co-tu-cung-nguyen-nhan-va-giai-phap/?easyvideoid=UmSnXKyGLV&amp;autoplay=true"><div style="display: table-cell; position: relative;"><img src="https://www.webtretho.com/video/wp-content/uploads/sites/43/2017/04/UmSnXKyGLV-480x270.jpg"><div style="position: absolute; top: 39%; left: 43%;"><img style="width: 68px; height: 50px;" src="https://img.webtretho.com/images/mobile/youitube%20icon%20play.png"></div></div></a></div> </blockquote> </div> </div>  <blockquote class="postcontent lastedited" style="min-height:0;">  </blockquote>  </div> </div>', type_id: 1, author_id: 1, status: 1 },
            {title: 'Sức khỏe cho mẹ trong 3 tháng đầu',summary:'Tuổi thơ ai sinh ra và lớn lên cũng từng ít nhất 1 lần ăn trái ô mai trong đời', img:'../../../assets/images/b1.jpg', created_at: t, updated_at: t,content:'<div class="postbody"> <div class="postrow">  <div class="content"> <div id="post_message_36354571"> <blockquote class="postcontent restore"> <b>Tuổi thơ ai sinh ra và lớn lên cũng từng ít nhất 1 lần ăn trái ô mai trong đời, ăn thì ăn vậy thôi chứ ít ai biết được rằng ô mai có vô vàng công dụng chữa bệnh tuyệt vời đặc biệt là bệnh về phụ nữ.<br> <br>\n' +
                    'Mỗi lần ăn trái ô mai là em lại nhớ tới căn bệnh hiểm nghèo của chị em chúng mình các chị ạ. Ngày trước khi mẹ em mới phát căn bệnh tai biến em hay dẫn mẹ đi châm cứu ở gần nhà lắm.</b><div muted="true" autoplay="true" poster="https://vjs.zencdn.net/v/oceans.png" class="video-js vjs-default-skin content_video-dimensions vjs-controls-enabled vjs-has-started vjs-ad-playing vjs-paused vjs-user-inactive" id="content_video" style="margin: 0 auto;"><video style="margin: 0 auto;" id="content_video_html5_api" class="vjs-tech" autoplay="" muted=""> <source src="https://img.webtretho.com/forum/clientscript/inpage_video/js/default.mp4" type="video/mp4"></video><div></div><div class="vjs-poster" tabindex="-1" style="background-image: url(&quot;https://vjs.zencdn.net/v/oceans.png&quot;);"></div><div class="vjs-text-track-display vjs-hidden"></div><div class="vjs-loading-spinner"></div><button class="vjs-big-play-button" tabindex="0" role="button" type="button" aria-live="polite"><span class="vjs-control-text">Play Video</span></button><div class="vjs-control-bar vjs-hidden"><button class="vjs-play-control vjs-control vjs-button vjs-paused" tabindex="0" role="button" type="button" aria-live="polite"><span class="vjs-control-text">Play</span></button><div class="vjs-volume-menu-button vjs-menu-button vjs-menu-button-inline vjs-control vjs-button vjs-volume-menu-button-horizontal vjs-vol-1" tabindex="0" role="button" type="button" aria-live="polite" aria-haspopup="true"><span class="vjs-control-text">Mute</span><div class="vjs-menu"><div class="vjs-menu-content"><div tabindex="0" class="vjs-volume-bar vjs-slider-bar vjs-slider vjs-slider-horizontal" role="slider" aria-valuenow="2.00" aria-valuemin="0" aria-valuemax="100" aria-label="volume level" aria-valuetext="2.00%"><div class="vjs-volume-level" style="width: 2%;"><span class="vjs-control-text"></span></div></div></div></div></div><div class="vjs-current-time vjs-time-control vjs-control"><div class="vjs-current-time-display" aria-live="off"><span class="vjs-control-text">Current Time</span> 0:01</div></div><div class="vjs-time-control vjs-time-divider"><div><span>/</span></div></div><div class="vjs-duration vjs-time-control vjs-control"><div class="vjs-duration-display" aria-live="off"><span class="vjs-control-text">Duration Time</span> 0:04</div></div><div class="vjs-progress-control vjs-control"><div tabindex="0" class="vjs-progress-holder vjs-slider vjs-slider-horizontal" role="slider" aria-valuenow="31.37" aria-valuemin="0" aria-valuemax="100" aria-label="video progress bar" aria-valuetext="0:01"><div class="vjs-load-progress"><span class="vjs-control-text"><span>Loaded</span>: 0%</span></div><div class="vjs-mouse-display" data-current-time="0:00" style="left: 0px;"></div><div class="vjs-play-progress vjs-slider-bar" data-current-time="0:01" style="width: 31.37%;"><span class="vjs-control-text"><span>Progress</span>: 0%</span></div></div></div><div class="vjs-live-control vjs-control vjs-hidden"><div class="vjs-live-display" aria-live="off"><span class="vjs-control-text">Stream Type</span>LIVE</div></div><div class="vjs-remaining-time vjs-time-control vjs-control"><div class="vjs-remaining-time-display" aria-live="off"><span class="vjs-control-text">Remaining Time</span> -0:02</div></div><div class="vjs-custom-control-spacer vjs-spacer ">&nbsp;</div><div class="vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden" tabindex="0" role="button" type="button" aria-live="polite" aria-haspopup="true"><span class="vjs-control-text">Playback Rate</span><div class="vjs-playback-rate-value">1</div><div class="vjs-menu"><ul class="vjs-menu-content"></ul></div></div><div class="vjs-chapters-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden" tabindex="0" role="button" type="button" aria-live="polite" aria-haspopup="true" aria-label="Chapters Menu"><span class="vjs-control-text">Chapters</span><div class="vjs-menu"><ul class="vjs-menu-content"><li class="vjs-menu-title" tabindex="-1">Chapters</li></ul></div></div><div class="vjs-subtitles-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden" tabindex="0" role="button" type="button" aria-live="polite" aria-haspopup="true" aria-label="Subtitles Menu"><span class="vjs-control-text">Subtitles</span><div class="vjs-menu"><ul class="vjs-menu-content"><li class="vjs-menu-item vjs-selected" tabindex="0" role="button" type="button" aria-live="polite" aria-selected="true">subtitles off<span class="vjs-control-text"></span></li></ul></div></div><div class="vjs-captions-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden" tabindex="0" role="button" type="button" aria-live="polite" aria-haspopup="true" aria-label="Captions Menu"><span class="vjs-control-text">Captions</span><div class="vjs-menu"><ul class="vjs-menu-content"><li class="vjs-menu-item vjs-selected" tabindex="0" role="button" type="button" aria-live="polite" aria-selected="true">captions off<span class="vjs-control-text"></span></li></ul></div></div><button class="vjs-fullscreen-control vjs-control vjs-button " tabindex="0" role="button" type="button" aria-live="polite"><span class="vjs-control-text">Fullscreen</span></button></div><div class="vjs-error-display vjs-modal-dialog vjs-hidden " tabindex="-1" aria-describedby="content_video_component_287_description" aria-hidden="true" aria-label="Modal Window" role="dialog"><p class="vjs-modal-dialog-description vjs-offscreen" id="content_video_component_287_description">This is a modal window.</p><div class="vjs-modal-dialog-content" role="document"></div></div><div class="vjs-caption-settings vjs-modal-overlay vjs-hidden"><div class="vjs-tracksettings">\n' +
                    '      <div class="vjs-tracksettings-colors">\n' +
                    '        <div class="vjs-fg-color vjs-tracksetting">\n' +
                    '            <label class="vjs-label">Foreground</label>\n' +
                    '            <select>\n' +
                    '              <option value="">---</option>\n' +
                    '              <option value="#FFF">White</option>\n' +
                    '              <option value="#000">Black</option>\n' +
                    '              <option value="#F00">Red</option>\n' +
                    '              <option value="#0F0">Green</option>\n' +
                    '              <option value="#00F">Blue</option>\n' +
                    '              <option value="#FF0">Yellow</option>\n' +
                    '              <option value="#F0F">Magenta</option>\n' +
                    '              <option value="#0FF">Cyan</option>\n' +
                    '            </select>\n' +
                    '            <span class="vjs-text-opacity vjs-opacity">\n' +
                    '              <select>\n' +
                    '                <option value="">---</option>\n' +
                    '                <option value="1">Opaque</option>\n' +
                    '                <option value="0.5">Semi-Opaque</option>\n' +
                    '              </select>\n' +
                    '            </span>\n' +
                    '        </div> <!-- vjs-fg-color -->\n' +
                    '        <div class="vjs-bg-color vjs-tracksetting">\n' +
                    '            <label class="vjs-label">Background</label>\n' +
                    '            <select>\n' +
                    '              <option value="">---</option>\n' +
                    '              <option value="#FFF">White</option>\n' +
                    '              <option value="#000">Black</option>\n' +
                    '              <option value="#F00">Red</option>\n' +
                    '              <option value="#0F0">Green</option>\n' +
                    '              <option value="#00F">Blue</option>\n' +
                    '              <option value="#FF0">Yellow</option>\n' +
                    '              <option value="#F0F">Magenta</option>\n' +
                    '              <option value="#0FF">Cyan</option>\n' +
                    '            </select>\n' +
                    '            <span class="vjs-bg-opacity vjs-opacity">\n' +
                    '                <select>\n' +
                    '                  <option value="">---</option>\n' +
                    '                  <option value="1">Opaque</option>\n' +
                    '                  <option value="0.5">Semi-Transparent</option>\n' +
                    '                  <option value="0">Transparent</option>\n' +
                    '                </select>\n' +
                    '            </span>\n' +
                    '        </div> <!-- vjs-bg-color -->\n' +
                    '        <div class="window-color vjs-tracksetting">\n' +
                    '            <label class="vjs-label">Window</label>\n' +
                    '            <select>\n' +
                    '              <option value="">---</option>\n' +
                    '              <option value="#FFF">White</option>\n' +
                    '              <option value="#000">Black</option>\n' +
                    '              <option value="#F00">Red</option>\n' +
                    '              <option value="#0F0">Green</option>\n' +
                    '              <option value="#00F">Blue</option>\n' +
                    '              <option value="#FF0">Yellow</option>\n' +
                    '              <option value="#F0F">Magenta</option>\n' +
                    '              <option value="#0FF">Cyan</option>\n' +
                    '            </select>\n' +
                    '            <span class="vjs-window-opacity vjs-opacity">\n' +
                    '                <select>\n' +
                    '                  <option value="">---</option>\n' +
                    '                  <option value="1">Opaque</option>\n' +
                    '                  <option value="0.5">Semi-Transparent</option>\n' +
                    '                  <option value="0">Transparent</option>\n' +
                    '                </select>\n' +
                    '            </span>\n' +
                    '        </div> <!-- vjs-window-color -->\n' +
                    '      </div> <!-- vjs-tracksettings -->\n' +
                    '      <div class="vjs-tracksettings-font">\n' +
                    '        <div class="vjs-font-percent vjs-tracksetting">\n' +
                    '          <label class="vjs-label">Font Size</label>\n' +
                    '          <select>\n' +
                    '            <option value="0.50">50%</option>\n' +
                    '            <option value="0.75">75%</option>\n' +
                    '            <option value="1.00" selected="">100%</option>\n' +
                    '            <option value="1.25">125%</option>\n' +
                    '            <option value="1.50">150%</option>\n' +
                    '            <option value="1.75">175%</option>\n' +
                    '            <option value="2.00">200%</option>\n' +
                    '            <option value="3.00">300%</option>\n' +
                    '            <option value="4.00">400%</option>\n' +
                    '          </select>\n' +
                    '        </div> <!-- vjs-font-percent -->\n' +
                    '        <div class="vjs-edge-style vjs-tracksetting">\n' +
                    '          <label class="vjs-label">Text Edge Style</label>\n' +
                    '          <select>\n' +
                    '            <option value="none">None</option>\n' +
                    '            <option value="raised">Raised</option>\n' +
                    '            <option value="depressed">Depressed</option>\n' +
                    '            <option value="uniform">Uniform</option>\n' +
                    '            <option value="dropshadow">Dropshadow</option>\n' +
                    '          </select>\n' +
                    '        </div> <!-- vjs-edge-style -->\n' +
                    '        <div class="vjs-font-family vjs-tracksetting">\n' +
                    '          <label class="vjs-label">Font Family</label>\n' +
                    '          <select>\n' +
                    '            <option value="">Default</option>\n' +
                    '            <option value="monospaceSerif">Monospace Serif</option>\n' +
                    '            <option value="proportionalSerif">Proportional Serif</option>\n' +
                    '            <option value="monospaceSansSerif">Monospace Sans-Serif</option>\n' +
                    '            <option value="proportionalSansSerif">Proportional Sans-Serif</option>\n' +
                    '            <option value="casual">Casual</option>\n' +
                    '            <option value="script">Script</option>\n' +
                    '            <option value="small-caps">Small Caps</option>\n' +
                    '          </select>\n' +
                    '        </div> <!-- vjs-font-family -->\n' +
                    '      </div>\n' +
                    '    </div>\n' +
                    '    <div class="vjs-tracksettings-controls">\n' +
                    '      <button class="vjs-default-button">Defaults</button>\n' +
                    '      <button class="vjs-done-button">Done</button>\n' +
                    '    </div></div><div id="content_video_ima-ad-container" class="content_video_ima-ad-container ima-ad-container" style="position: absolute; z-index: 1111; display: block;"><div style="position: absolute; width: 580px; height: 326px;"><div style="display: block;"><video title="Advertisement" webkit-playsinline="true" playsinline="true" style="background-color: rgb(0, 0, 0); position: absolute; width: 100%; height: 100%; left: 0px; top: 0px;" src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.24130-6/55940602_129301541465447_8785395337425713694_n.mp4?_nc_cat=102&amp;efg=eyJxZV9ncm91cHMiOlsidW5tdXRlZCJdLCJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&amp;_nc_eui2=AeEX-EvG3zlPlvDlE3YxdA_FqV2q30Tz5uIxmTNID5_fuXEsP62uvsBfBP19V_pCjz9fh5XbYr7JJLWI2K1k15LA5U7IR5iXJStGx-TPq7kIvg&amp;_nc_ht=scontent.fsgn8-1.fna&amp;oh=852b062c33ef0caf06e5ac7981a6123d&amp;oe=5D485639"></video><div style="position: absolute; width: 100%; height: 100%; left: 0px; top: 0px;"></div></div><div style="display: none;"><video title="Advertisement" webkit-playsinline="true" playsinline="true" style="background-color: rgb(0, 0, 0); position: absolute; width: 100%; height: 100%; left: 0px; top: 0px;"></video><div style="position: absolute; width: 100%; height: 100%; left: 0px; top: 0px;"></div></div><iframe src="https://imasdk.googleapis.com/js/core/bridge3.287.0_en.html#goog_1175170044" allowfullscreen="" allow="autoplay" style="border: 0px; opacity: 1; margin: 0px; padding: 0px; position: relative;" width="580" height="326"></iframe></div><div id="content_video_ima-controls-div" class="content_video_ima-controls-div ima-controls-div" style="width: 100%; height: 14px; display: block;"><div id="content_video_ima-countdown-div" class="content_video_ima-countdown-div ima-countdown-div" style="display: block;">Advertisement: 0:23</div><div id="content_video_ima-seek-bar-div" class="content_video_ima-seek-bar-div ima-seek-bar-div" style="width: 100%;"><div id="content_video_ima-progress-div" class="content_video_ima-progress-div ima-progress-div" style="width: 0%;"></div></div><div id="content_video_ima-play-pause-div" class="content_video_ima-play-pause-div ima-play-pause-div ima-playing" style="display: none;"></div><div id="content_video_ima-mute-div" class="content_video_ima-mute-div ima-mute-div ima-non-muted" style="display: none;"></div><div id="content_video_ima-slider-div" class="content_video_ima-slider-div ima-slider-div" style="display: none;"><div id="content_video_ima-slider-level-div" class="content_video_ima-slider-level-div ima-slider-level-div" style="width: 2%;"></div></div><div id="content_video_ima-fullscreen-div" class="content_video_ima-fullscreen-div ima-fullscreen-div ima-non-fullscreen" style="display: none;"></div></div></div></div><br> <br>\n' +
                    'Em nhớ có lần chị kia đến phòng khám đông y mà khóc sướt mướt, khi mọi người hỏi đến thì mới biết chị bị bệnh sa tử cung (hay còn gọi là thoát vị tử cung). Mà chị mới có 25, 26 tuổi gì đó thôi; lại chưa có gia đình nữa. Chị còn nói dấu hiệu ban đầu chị cứ nghĩ là bệnh trĩ thôi, nên công việc nhiều chị cũng ít quan tâm tới. Đến khi đi khám thì mới biết bệnh đã chuyển sang thời kỳ giữa rồi.<br> <br>\n' +
                    'Nếu như em biết vào thời gian cách đây gần 10 năm khi biết đến căn bệnh này thì chỉ mổ mới có thể hết thôi. Mà nghe đâu nếu mổ thì chị sẽ không thể sinh con được.<br> <br>\n' +
                    'Vì căn bệnh này nếu nhẹ tử cung sẽ sa xuống, thập thò ở vùng âm đạo; mức độ trung bình tử cung sẽ lộ ra ngoài âm đạo, thân nằm trong âm đạo; còn nếu như đến mức độ nặng thì toàn bộ tử cung sẽ sa hẳn ra ngoài âm đạo.<br> <br>\n' +
                    'Chắc là chị cũng đã đi khám rồi nên mới biết được rằng nguyên nhân, tình trạng cũng như cách điều trị của bệnh. Cho đến khi chị phát hiện thì hình như bệnh của chị đã chuyển sang giai đoạn 2 mất rồi.<br> <br>\n' +
                    'Lúc này chú bốc thuốc mới kêu chị nín đi, cái này còn chữa khỏi không cần phải mổ đâu mà sợ. Nghe tới đây chắc chị ấy cũng nở hoa trong bụng. Chị và mẹ chị mừng quýnh lên với liều thuốc cứu thân mà không cần phải mổ.<br>\n' +
                    'Mọi người trong phòng khám ai cũng tò mò không biết bài thuốc đó là gì. Một cô khác vọt miệng kêu thôi chú nói luôn đi để bà con ở đây người biết chút.<br> <br>\n' +
                    'Thì chú bốc thuốc mới nói rằng trái ô mai có thể trị được nhiều bệnh lắm như: miễn dịch cho cơ thể, trị bệnh về đường hô hấp, giun chui ống mật, ngoài ra còn trị các bệnh về phụ nữa như là viêm nhiễm nấm âm đạo; điều hòa kinh nguyệt; thoát vị tử cung, đây là những căn bệnh phổ biến nhất của phụ nữ đấy các chị. Đặc biệt loại trái này có khả năng chèn ép các tế bào ung thư, ức chế sử phát triển lên đến 90%.<br> <br>\n' +
                    'Cây cao 3-4m. Lá đơn, hình bầu dục, mọc so le, lá có cuống, ngọn lá nhọn, mép có khía răng nhọn. Hoa trắng 5 cánh. Quả hạch màu vàng xanh có lông tơ.<br> <br>\n' +
                    'Ô mai có dạng hình cầu, hoặc hình tròn dẹt, to nhỏ không đều nhau. Vỏ ngoài màu đen hoặc đen nâu, nhăn, một đầu có rốn tròn lõm xuống. Cùi mềm có thể bóc được, hạt cứng, hình bầu dục, mầu vàng nâu, trong có 1 hạt nhân mầu vàng nhạt, không mùi, nghiền với nước có mùi thơm đặc biệt. Cùi quả hơi có mùi chua đặc biệt, vị rất chua.<br> <br> <b>Bài thuốc trị bệnh sa tử cung rất đơn giản nhe các chị</b><br> <br>\n' +
                    'Các chị chuẩn bị: 50g ô mai, ngũ bội tử 35g, sắc nước, bỏ cái, lấy nước thuốc xông, rửa, ngâm âm hộ, mỗi lần 30 phút, ngày làm 2 lần. Với công thức này các chị chỉ áp dụng từ 15 đến 20 ngày là sẽ thấy tác dụng rõ rệt nhe.<br> <br>\n' +
                    'Với bài thuốc này chị ấy chỉ áp dụng có 1 tháng thôi là đã hết hẳn luôn đấy các chị. Nhưng các chị cũng nên chú ý với những bài thuốc dân gian nhe, vì tính chất của mỗi loại thuốc có thể cơ địa của một số người sẽ không phù hợp với vị tính đó và gây ảnh hưởng đến sức khỏe. <br> <br>\n' +
                    'Xin mời xem thêm:<br> <br> <a href="https://www.webtretho.com/forum/f519/5-bai-thuoc-nam-chua-ung-thu-co-tu-cung-duoc-luu-truyen-trong-dan-gian-2355485/" target="_blank">https://www.webtretho.com/forum/f519/...-gian-2355485/</a><br> <a href="https://www.webtretho.com/forum/f119/ung-thu-co-tu-cung-giai-doan-cuoi-va-bai-thuoc-dieu-tri-k-cuoi-bai-nay-dieu-tri-238-nguoi-co-238-nguoi-het-benh-ma-khong-tai-phat-2505079/" target="_blank">https://www.webtretho.com/forum/f119/...-phat-2505079/</a><br> <a href="https://www.webtretho.com/forum/f26/chua-ung-thu-co-tu-cung-bang-bai-thuoc-tu-la-du-du-2394074/" target="_blank">https://www.webtretho.com/forum/f26/c...du-du-2394074/</a><div style="text-align: center;"><img class="gg-responsive" data-src="https://lh3.googleusercontent.com/iSK2ayUwXz11bggsg9-jFzwFfn1B_Gp7V8zKEkWcOJxHwPfknU2KQZb2NZTPAEaw04_7hIs0TdF77wI0TyT3xYxEtAl5Iw" border="0" alt="iSK2ayUwXz11bggsg9-jFzwFfn1B_Gp7V8zKEkWcOJxHwPfknU2KQZb2NZTPAEaw04_7hIs0TdF77wI0TyT3xYxEtAl5Iw" title="iSK2ayUwXz11bggsg9-jFzwFfn1B_Gp7V8zKEkWcOJxHwPfknU2KQZb2NZTPAEaw04_7hIs0TdF77wI0TyT3xYxEtAl5Iw" src="https://lh3.googleusercontent.com/iSK2ayUwXz11bggsg9-jFzwFfn1B_Gp7V8zKEkWcOJxHwPfknU2KQZb2NZTPAEaw04_7hIs0TdF77wI0TyT3xYxEtAl5Iw=w725"></div>Xem video tại đây: <div style="text-align: center;"><br> <br>\n' +
                    ' Bệnh ung thư cổ tử cung - Nguyên nhân và giải pháp<br> <a rel="nofollow" href="https://www.webtretho.com/video/2016/11/22/benh-ung-thu-co-tu-cung-nguyen-nhan-va-giai-phap/?easyvideoid=UmSnXKyGLV&amp;autoplay=true"><div style="display: table-cell; position: relative;"><img src="https://www.webtretho.com/video/wp-content/uploads/sites/43/2017/04/UmSnXKyGLV-480x270.jpg"><div style="position: absolute; top: 39%; left: 43%;"><img style="width: 68px; height: 50px;" src="https://img.webtretho.com/images/mobile/youitube%20icon%20play.png"></div></div></a></div> </blockquote> </div> </div>  <blockquote class="postcontent lastedited" style="min-height:0;">  </blockquote>  </div> </div>', type_id: 3, author_id: 1, status: 1 },
            {title: 'Kinh nghiệm chọn thực phẩm tươi sống',summary:'Tuổi thơ ai sinh ra và lớn lên cũng từng ít nhất 1 lần ăn trái ô mai trong đời', img:'../../../assets/images/b1.jpg',
                created_at: t, updated_at: t,content:'<div class="postbody"> <div class="postrow">  <div class="content"> <div id="post_message_36354571"> <blockquote class="postcontent restore"> <b>Tuổi thơ ai sinh ra và lớn lên cũng từng ít nhất 1 lần ăn trái ô mai trong đời, ăn thì ăn vậy thôi chứ ít ai biết được rằng ô mai có vô vàng công dụng chữa bệnh tuyệt vời đặc biệt là bệnh về phụ nữ.<br> <br>\n' +
                    'Mỗi lần ăn trái ô mai là em lại nhớ tới căn bệnh hiểm nghèo của chị em chúng mình các chị ạ. Ngày trước khi mẹ em mới phát căn bệnh tai biến em hay dẫn mẹ đi châm cứu ở gần nhà lắm.</b><div muted="true" autoplay="true" poster="https://vjs.zencdn.net/v/oceans.png" class="video-js vjs-default-skin content_video-dimensions vjs-controls-enabled vjs-has-started vjs-ad-playing vjs-paused vjs-user-inactive" id="content_video" style="margin: 0 auto;"><video style="margin: 0 auto;" id="content_video_html5_api" class="vjs-tech" autoplay="" muted=""> <source src="https://img.webtretho.com/forum/clientscript/inpage_video/js/default.mp4" type="video/mp4"></video><div></div><div class="vjs-poster" tabindex="-1" style="background-image: url(&quot;https://vjs.zencdn.net/v/oceans.png&quot;);"></div><div class="vjs-text-track-display vjs-hidden"></div><div class="vjs-loading-spinner"></div><button class="vjs-big-play-button" tabindex="0" role="button" type="button" aria-live="polite"><span class="vjs-control-text">Play Video</span></button><div class="vjs-control-bar vjs-hidden"><button class="vjs-play-control vjs-control vjs-button vjs-paused" tabindex="0" role="button" type="button" aria-live="polite"><span class="vjs-control-text">Play</span></button><div class="vjs-volume-menu-button vjs-menu-button vjs-menu-button-inline vjs-control vjs-button vjs-volume-menu-button-horizontal vjs-vol-1" tabindex="0" role="button" type="button" aria-live="polite" aria-haspopup="true"><span class="vjs-control-text">Mute</span><div class="vjs-menu"><div class="vjs-menu-content"><div tabindex="0" class="vjs-volume-bar vjs-slider-bar vjs-slider vjs-slider-horizontal" role="slider" aria-valuenow="2.00" aria-valuemin="0" aria-valuemax="100" aria-label="volume level" aria-valuetext="2.00%"><div class="vjs-volume-level" style="width: 2%;"><span class="vjs-control-text"></span></div></div></div></div></div><div class="vjs-current-time vjs-time-control vjs-control"><div class="vjs-current-time-display" aria-live="off"><span class="vjs-control-text">Current Time</span> 0:01</div></div><div class="vjs-time-control vjs-time-divider"><div><span>/</span></div></div><div class="vjs-duration vjs-time-control vjs-control"><div class="vjs-duration-display" aria-live="off"><span class="vjs-control-text">Duration Time</span> 0:04</div></div><div class="vjs-progress-control vjs-control"><div tabindex="0" class="vjs-progress-holder vjs-slider vjs-slider-horizontal" role="slider" aria-valuenow="31.37" aria-valuemin="0" aria-valuemax="100" aria-label="video progress bar" aria-valuetext="0:01"><div class="vjs-load-progress"><span class="vjs-control-text"><span>Loaded</span>: 0%</span></div><div class="vjs-mouse-display" data-current-time="0:00" style="left: 0px;"></div><div class="vjs-play-progress vjs-slider-bar" data-current-time="0:01" style="width: 31.37%;"><span class="vjs-control-text"><span>Progress</span>: 0%</span></div></div></div><div class="vjs-live-control vjs-control vjs-hidden"><div class="vjs-live-display" aria-live="off"><span class="vjs-control-text">Stream Type</span>LIVE</div></div><div class="vjs-remaining-time vjs-time-control vjs-control"><div class="vjs-remaining-time-display" aria-live="off"><span class="vjs-control-text">Remaining Time</span> -0:02</div></div><div class="vjs-custom-control-spacer vjs-spacer ">&nbsp;</div><div class="vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden" tabindex="0" role="button" type="button" aria-live="polite" aria-haspopup="true"><span class="vjs-control-text">Playback Rate</span><div class="vjs-playback-rate-value">1</div><div class="vjs-menu"><ul class="vjs-menu-content"></ul></div></div><div class="vjs-chapters-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden" tabindex="0" role="button" type="button" aria-live="polite" aria-haspopup="true" aria-label="Chapters Menu"><span class="vjs-control-text">Chapters</span><div class="vjs-menu"><ul class="vjs-menu-content"><li class="vjs-menu-title" tabindex="-1">Chapters</li></ul></div></div><div class="vjs-subtitles-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden" tabindex="0" role="button" type="button" aria-live="polite" aria-haspopup="true" aria-label="Subtitles Menu"><span class="vjs-control-text">Subtitles</span><div class="vjs-menu"><ul class="vjs-menu-content"><li class="vjs-menu-item vjs-selected" tabindex="0" role="button" type="button" aria-live="polite" aria-selected="true">subtitles off<span class="vjs-control-text"></span></li></ul></div></div><div class="vjs-captions-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden" tabindex="0" role="button" type="button" aria-live="polite" aria-haspopup="true" aria-label="Captions Menu"><span class="vjs-control-text">Captions</span><div class="vjs-menu"><ul class="vjs-menu-content"><li class="vjs-menu-item vjs-selected" tabindex="0" role="button" type="button" aria-live="polite" aria-selected="true">captions off<span class="vjs-control-text"></span></li></ul></div></div><button class="vjs-fullscreen-control vjs-control vjs-button " tabindex="0" role="button" type="button" aria-live="polite"><span class="vjs-control-text">Fullscreen</span></button></div><div class="vjs-error-display vjs-modal-dialog vjs-hidden " tabindex="-1" aria-describedby="content_video_component_287_description" aria-hidden="true" aria-label="Modal Window" role="dialog"><p class="vjs-modal-dialog-description vjs-offscreen" id="content_video_component_287_description">This is a modal window.</p><div class="vjs-modal-dialog-content" role="document"></div></div><div class="vjs-caption-settings vjs-modal-overlay vjs-hidden"><div class="vjs-tracksettings">\n' +
                    '      <div class="vjs-tracksettings-colors">\n' +
                    '        <div class="vjs-fg-color vjs-tracksetting">\n' +
                    '            <label class="vjs-label">Foreground</label>\n' +
                    '            <select>\n' +
                    '              <option value="">---</option>\n' +
                    '              <option value="#FFF">White</option>\n' +
                    '              <option value="#000">Black</option>\n' +
                    '              <option value="#F00">Red</option>\n' +
                    '              <option value="#0F0">Green</option>\n' +
                    '              <option value="#00F">Blue</option>\n' +
                    '              <option value="#FF0">Yellow</option>\n' +
                    '              <option value="#F0F">Magenta</option>\n' +
                    '              <option value="#0FF">Cyan</option>\n' +
                    '            </select>\n' +
                    '            <span class="vjs-text-opacity vjs-opacity">\n' +
                    '              <select>\n' +
                    '                <option value="">---</option>\n' +
                    '                <option value="1">Opaque</option>\n' +
                    '                <option value="0.5">Semi-Opaque</option>\n' +
                    '              </select>\n' +
                    '            </span>\n' +
                    '        </div> <!-- vjs-fg-color -->\n' +
                    '        <div class="vjs-bg-color vjs-tracksetting">\n' +
                    '            <label class="vjs-label">Background</label>\n' +
                    '            <select>\n' +
                    '              <option value="">---</option>\n' +
                    '              <option value="#FFF">White</option>\n' +
                    '              <option value="#000">Black</option>\n' +
                    '              <option value="#F00">Red</option>\n' +
                    '              <option value="#0F0">Green</option>\n' +
                    '              <option value="#00F">Blue</option>\n' +
                    '              <option value="#FF0">Yellow</option>\n' +
                    '              <option value="#F0F">Magenta</option>\n' +
                    '              <option value="#0FF">Cyan</option>\n' +
                    '            </select>\n' +
                    '            <span class="vjs-bg-opacity vjs-opacity">\n' +
                    '                <select>\n' +
                    '                  <option value="">---</option>\n' +
                    '                  <option value="1">Opaque</option>\n' +
                    '                  <option value="0.5">Semi-Transparent</option>\n' +
                    '                  <option value="0">Transparent</option>\n' +
                    '                </select>\n' +
                    '            </span>\n' +
                    '        </div> <!-- vjs-bg-color -->\n' +
                    '        <div class="window-color vjs-tracksetting">\n' +
                    '            <label class="vjs-label">Window</label>\n' +
                    '            <select>\n' +
                    '              <option value="">---</option>\n' +
                    '              <option value="#FFF">White</option>\n' +
                    '              <option value="#000">Black</option>\n' +
                    '              <option value="#F00">Red</option>\n' +
                    '              <option value="#0F0">Green</option>\n' +
                    '              <option value="#00F">Blue</option>\n' +
                    '              <option value="#FF0">Yellow</option>\n' +
                    '              <option value="#F0F">Magenta</option>\n' +
                    '              <option value="#0FF">Cyan</option>\n' +
                    '            </select>\n' +
                    '            <span class="vjs-window-opacity vjs-opacity">\n' +
                    '                <select>\n' +
                    '                  <option value="">---</option>\n' +
                    '                  <option value="1">Opaque</option>\n' +
                    '                  <option value="0.5">Semi-Transparent</option>\n' +
                    '                  <option value="0">Transparent</option>\n' +
                    '                </select>\n' +
                    '            </span>\n' +
                    '        </div> <!-- vjs-window-color -->\n' +
                    '      </div> <!-- vjs-tracksettings -->\n' +
                    '      <div class="vjs-tracksettings-font">\n' +
                    '        <div class="vjs-font-percent vjs-tracksetting">\n' +
                    '          <label class="vjs-label">Font Size</label>\n' +
                    '          <select>\n' +
                    '            <option value="0.50">50%</option>\n' +
                    '            <option value="0.75">75%</option>\n' +
                    '            <option value="1.00" selected="">100%</option>\n' +
                    '            <option value="1.25">125%</option>\n' +
                    '            <option value="1.50">150%</option>\n' +
                    '            <option value="1.75">175%</option>\n' +
                    '            <option value="2.00">200%</option>\n' +
                    '            <option value="3.00">300%</option>\n' +
                    '            <option value="4.00">400%</option>\n' +
                    '          </select>\n' +
                    '        </div> <!-- vjs-font-percent -->\n' +
                    '        <div class="vjs-edge-style vjs-tracksetting">\n' +
                    '          <label class="vjs-label">Text Edge Style</label>\n' +
                    '          <select>\n' +
                    '            <option value="none">None</option>\n' +
                    '            <option value="raised">Raised</option>\n' +
                    '            <option value="depressed">Depressed</option>\n' +
                    '            <option value="uniform">Uniform</option>\n' +
                    '            <option value="dropshadow">Dropshadow</option>\n' +
                    '          </select>\n' +
                    '        </div> <!-- vjs-edge-style -->\n' +
                    '        <div class="vjs-font-family vjs-tracksetting">\n' +
                    '          <label class="vjs-label">Font Family</label>\n' +
                    '          <select>\n' +
                    '            <option value="">Default</option>\n' +
                    '            <option value="monospaceSerif">Monospace Serif</option>\n' +
                    '            <option value="proportionalSerif">Proportional Serif</option>\n' +
                    '            <option value="monospaceSansSerif">Monospace Sans-Serif</option>\n' +
                    '            <option value="proportionalSansSerif">Proportional Sans-Serif</option>\n' +
                    '            <option value="casual">Casual</option>\n' +
                    '            <option value="script">Script</option>\n' +
                    '            <option value="small-caps">Small Caps</option>\n' +
                    '          </select>\n' +
                    '        </div> <!-- vjs-font-family -->\n' +
                    '      </div>\n' +
                    '    </div>\n' +
                    '    <div class="vjs-tracksettings-controls">\n' +
                    '      <button class="vjs-default-button">Defaults</button>\n' +
                    '      <button class="vjs-done-button">Done</button>\n' +
                    '    </div></div><div id="content_video_ima-ad-container" class="content_video_ima-ad-container ima-ad-container" style="position: absolute; z-index: 1111; display: block;"><div style="position: absolute; width: 580px; height: 326px;"><div style="display: block;"><video title="Advertisement" webkit-playsinline="true" playsinline="true" style="background-color: rgb(0, 0, 0); position: absolute; width: 100%; height: 100%; left: 0px; top: 0px;" src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.24130-6/55940602_129301541465447_8785395337425713694_n.mp4?_nc_cat=102&amp;efg=eyJxZV9ncm91cHMiOlsidW5tdXRlZCJdLCJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&amp;_nc_eui2=AeEX-EvG3zlPlvDlE3YxdA_FqV2q30Tz5uIxmTNID5_fuXEsP62uvsBfBP19V_pCjz9fh5XbYr7JJLWI2K1k15LA5U7IR5iXJStGx-TPq7kIvg&amp;_nc_ht=scontent.fsgn8-1.fna&amp;oh=852b062c33ef0caf06e5ac7981a6123d&amp;oe=5D485639"></video><div style="position: absolute; width: 100%; height: 100%; left: 0px; top: 0px;"></div></div><div style="display: none;"><video title="Advertisement" webkit-playsinline="true" playsinline="true" style="background-color: rgb(0, 0, 0); position: absolute; width: 100%; height: 100%; left: 0px; top: 0px;"></video><div style="position: absolute; width: 100%; height: 100%; left: 0px; top: 0px;"></div></div><iframe src="https://imasdk.googleapis.com/js/core/bridge3.287.0_en.html#goog_1175170044" allowfullscreen="" allow="autoplay" style="border: 0px; opacity: 1; margin: 0px; padding: 0px; position: relative;" width="580" height="326"></iframe></div><div id="content_video_ima-controls-div" class="content_video_ima-controls-div ima-controls-div" style="width: 100%; height: 14px; display: block;"><div id="content_video_ima-countdown-div" class="content_video_ima-countdown-div ima-countdown-div" style="display: block;">Advertisement: 0:23</div><div id="content_video_ima-seek-bar-div" class="content_video_ima-seek-bar-div ima-seek-bar-div" style="width: 100%;"><div id="content_video_ima-progress-div" class="content_video_ima-progress-div ima-progress-div" style="width: 0%;"></div></div><div id="content_video_ima-play-pause-div" class="content_video_ima-play-pause-div ima-play-pause-div ima-playing" style="display: none;"></div><div id="content_video_ima-mute-div" class="content_video_ima-mute-div ima-mute-div ima-non-muted" style="display: none;"></div><div id="content_video_ima-slider-div" class="content_video_ima-slider-div ima-slider-div" style="display: none;"><div id="content_video_ima-slider-level-div" class="content_video_ima-slider-level-div ima-slider-level-div" style="width: 2%;"></div></div><div id="content_video_ima-fullscreen-div" class="content_video_ima-fullscreen-div ima-fullscreen-div ima-non-fullscreen" style="display: none;"></div></div></div></div><br> <br>\n' +
                    'Em nhớ có lần chị kia đến phòng khám đông y mà khóc sướt mướt, khi mọi người hỏi đến thì mới biết chị bị bệnh sa tử cung (hay còn gọi là thoát vị tử cung). Mà chị mới có 25, 26 tuổi gì đó thôi; lại chưa có gia đình nữa. Chị còn nói dấu hiệu ban đầu chị cứ nghĩ là bệnh trĩ thôi, nên công việc nhiều chị cũng ít quan tâm tới. Đến khi đi khám thì mới biết bệnh đã chuyển sang thời kỳ giữa rồi.<br> <br>\n' +
                    'Nếu như em biết vào thời gian cách đây gần 10 năm khi biết đến căn bệnh này thì chỉ mổ mới có thể hết thôi. Mà nghe đâu nếu mổ thì chị sẽ không thể sinh con được.<br> <br>\n' +
                    'Vì căn bệnh này nếu nhẹ tử cung sẽ sa xuống, thập thò ở vùng âm đạo; mức độ trung bình tử cung sẽ lộ ra ngoài âm đạo, thân nằm trong âm đạo; còn nếu như đến mức độ nặng thì toàn bộ tử cung sẽ sa hẳn ra ngoài âm đạo.<br> <br>\n' +
                    'Chắc là chị cũng đã đi khám rồi nên mới biết được rằng nguyên nhân, tình trạng cũng như cách điều trị của bệnh. Cho đến khi chị phát hiện thì hình như bệnh của chị đã chuyển sang giai đoạn 2 mất rồi.<br> <br>\n' +
                    'Lúc này chú bốc thuốc mới kêu chị nín đi, cái này còn chữa khỏi không cần phải mổ đâu mà sợ. Nghe tới đây chắc chị ấy cũng nở hoa trong bụng. Chị và mẹ chị mừng quýnh lên với liều thuốc cứu thân mà không cần phải mổ.<br>\n' +
                    'Mọi người trong phòng khám ai cũng tò mò không biết bài thuốc đó là gì. Một cô khác vọt miệng kêu thôi chú nói luôn đi để bà con ở đây người biết chút.<br> <br>\n' +
                    'Thì chú bốc thuốc mới nói rằng trái ô mai có thể trị được nhiều bệnh lắm như: miễn dịch cho cơ thể, trị bệnh về đường hô hấp, giun chui ống mật, ngoài ra còn trị các bệnh về phụ nữa như là viêm nhiễm nấm âm đạo; điều hòa kinh nguyệt; thoát vị tử cung, đây là những căn bệnh phổ biến nhất của phụ nữ đấy các chị. Đặc biệt loại trái này có khả năng chèn ép các tế bào ung thư, ức chế sử phát triển lên đến 90%.<br> <br>\n' +
                    'Cây cao 3-4m. Lá đơn, hình bầu dục, mọc so le, lá có cuống, ngọn lá nhọn, mép có khía răng nhọn. Hoa trắng 5 cánh. Quả hạch màu vàng xanh có lông tơ.<br> <br>\n' +
                    'Ô mai có dạng hình cầu, hoặc hình tròn dẹt, to nhỏ không đều nhau. Vỏ ngoài màu đen hoặc đen nâu, nhăn, một đầu có rốn tròn lõm xuống. Cùi mềm có thể bóc được, hạt cứng, hình bầu dục, mầu vàng nâu, trong có 1 hạt nhân mầu vàng nhạt, không mùi, nghiền với nước có mùi thơm đặc biệt. Cùi quả hơi có mùi chua đặc biệt, vị rất chua.<br> <br> <b>Bài thuốc trị bệnh sa tử cung rất đơn giản nhe các chị</b><br> <br>\n' +
                    'Các chị chuẩn bị: 50g ô mai, ngũ bội tử 35g, sắc nước, bỏ cái, lấy nước thuốc xông, rửa, ngâm âm hộ, mỗi lần 30 phút, ngày làm 2 lần. Với công thức này các chị chỉ áp dụng từ 15 đến 20 ngày là sẽ thấy tác dụng rõ rệt nhe.<br> <br>\n' +
                    'Với bài thuốc này chị ấy chỉ áp dụng có 1 tháng thôi là đã hết hẳn luôn đấy các chị. Nhưng các chị cũng nên chú ý với những bài thuốc dân gian nhe, vì tính chất của mỗi loại thuốc có thể cơ địa của một số người sẽ không phù hợp với vị tính đó và gây ảnh hưởng đến sức khỏe. <br> <br>\n' +
                    'Xin mời xem thêm:<br> <br> <a href="https://www.webtretho.com/forum/f519/5-bai-thuoc-nam-chua-ung-thu-co-tu-cung-duoc-luu-truyen-trong-dan-gian-2355485/" target="_blank">https://www.webtretho.com/forum/f519/...-gian-2355485/</a><br> <a href="https://www.webtretho.com/forum/f119/ung-thu-co-tu-cung-giai-doan-cuoi-va-bai-thuoc-dieu-tri-k-cuoi-bai-nay-dieu-tri-238-nguoi-co-238-nguoi-het-benh-ma-khong-tai-phat-2505079/" target="_blank">https://www.webtretho.com/forum/f119/...-phat-2505079/</a><br> <a href="https://www.webtretho.com/forum/f26/chua-ung-thu-co-tu-cung-bang-bai-thuoc-tu-la-du-du-2394074/" target="_blank">https://www.webtretho.com/forum/f26/c...du-du-2394074/</a><div style="text-align: center;"><img class="gg-responsive" data-src="https://lh3.googleusercontent.com/iSK2ayUwXz11bggsg9-jFzwFfn1B_Gp7V8zKEkWcOJxHwPfknU2KQZb2NZTPAEaw04_7hIs0TdF77wI0TyT3xYxEtAl5Iw" border="0" alt="iSK2ayUwXz11bggsg9-jFzwFfn1B_Gp7V8zKEkWcOJxHwPfknU2KQZb2NZTPAEaw04_7hIs0TdF77wI0TyT3xYxEtAl5Iw" title="iSK2ayUwXz11bggsg9-jFzwFfn1B_Gp7V8zKEkWcOJxHwPfknU2KQZb2NZTPAEaw04_7hIs0TdF77wI0TyT3xYxEtAl5Iw" src="https://lh3.googleusercontent.com/iSK2ayUwXz11bggsg9-jFzwFfn1B_Gp7V8zKEkWcOJxHwPfknU2KQZb2NZTPAEaw04_7hIs0TdF77wI0TyT3xYxEtAl5Iw=w725"></div>Xem video tại đây: <div style="text-align: center;"><br> <br>\n' +
                    ' Bệnh ung thư cổ tử cung - Nguyên nhân và giải pháp<br> <a rel="nofollow" href="https://www.webtretho.com/video/2016/11/22/benh-ung-thu-co-tu-cung-nguyen-nhan-va-giai-phap/?easyvideoid=UmSnXKyGLV&amp;autoplay=true"><div style="display: table-cell; position: relative;"><img src="https://www.webtretho.com/video/wp-content/uploads/sites/43/2017/04/UmSnXKyGLV-480x270.jpg"><div style="position: absolute; top: 39%; left: 43%;"><img style="width: 68px; height: 50px;" src="https://img.webtretho.com/images/mobile/youitube%20icon%20play.png"></div></div></a></div> </blockquote> </div> </div>  <blockquote class="postcontent lastedited" style="min-height:0;">  </blockquote>  </div> </div>', type_id: 2, author_id: 1, status: 1 },
        ];

        return queryInterface.bulkInsert('topics', topics);
    },

    down: (queryInterface) => {
        return queryInterface.bulkDelete('topics', null);
    }
};
