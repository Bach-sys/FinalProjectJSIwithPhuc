export let lichtrinhRender = (informPage,data) => {
  informPage.style.height = "100%";
  informPage.innerHTML = `
    <div class="trekkingContent-details">
      <h1>LỊCH TRÌNH TOUR TREKKING ${data.Title}</h1>
      <div class="trekkingContenttour">
      <div class="trekkingContenttour-column">
              <h2>NGÀY 0: KHỞI HÀNH</h2>
              <p>${data.Ngay0}</p>
            </div>
            <div class="trekkingContenttour-column">
              <h2>NGÀY 1: TREKKING ${data.Title}</h2>
              <p>${data.Ngay1}</p>
            </div>
            <div class="trekkingContenttour-column">
              <h2>NGÀY 2: ĐÓN BÌNH MINH TẠI ${data.Title}</h2>
              <p>${data.Ngay2}</p>
            </div>
          </div>
          </div>`;
};
export let gioithieuRender = (informPage,data) => {
  informPage.style.height = "65%";
  informPage.innerHTML = `
    <div class="trekkingContent-GioiThieu">
            <h1>GIỚI THIỆU TOUR TREKKING ${data.Title}</h1>
            <div class="trekkingContenttour">
            <div class="trekkingContenttour-column-gioithieu">
                    <h2>TỔNG QUAN TOUR ${data.Title}</h2>
                    <p>${data.Tongquan}</p>
                    <div class="trekkingContenttour-inform">
                      <div class="trekkingContenttour-inform-child">
                        <h4>Độ Khó</h4>
                        <p>${data.Level}</p>
                      </div>
                      <div class="trekkingContenttour-inform-child">
                        <h4>Điểm Đến</h4>
                        <p>${data.Destination}</p>
                      </div>
                      <div class="trekkingContenttour-inform-child">
                        <h4>Điểm Khởi Hành</h4>
                        <p>${data.startPlace}</p>
                      </div>
                      <div class="trekkingContenttour-inform-child">
                        <h4>Thời Gian Xuất Phát</h4>
                        <p>${data.Timego}</p>
                      </div>
                      <div class="trekkingContenttour-inform-child">
                        <h4>Thời Gian Kết Thúc</h4>
                        <p>${data.Fintime}</p>
                      </div>
                      <div class="trekkingContenttour-inform-child">
                        <h4>Thời Lượng Tour</h4>
                        <p>${data.Thoigian}</p>
                      </div>
                      <div class="trekkingContenttour-inform-child">
                        <h4>Số Lượng Khách</h4>
                        <p>${data.amount} khách</p>
                      </div>
                      <div class="trekkingContenttour-inform-child">
                        <h4>Hotline</h4>
                        <p>${data.Hotline}</p>
                      </div>
                      <div class="trekkingContenttour-inform-child">
                        <h4>Giá Tour</h4>
                        <button>${data.Price}</button>
                      </div>
                    </div>
            </div>
                  <div class="trekkingContenttour-column-gioithieu">
                    <h2>GIÁ TOUR TREKKING ${data.Title} BAO GỒM:</h2>
                    <div class="trekkingContenttour-price">
                      <div class="trekkingContenttour-price-detail">
                        <i class="bi bi-check-lg"></i>
                        <p>${data.Benefit}</p>
                      </div>
                    </div>
                    <div class="trekkingContenttour-notprice">
                      <h2>Giá chưa bao gồm :</h2>
                      <div class="trekkingContenttour-price-detail">
                        <i class="bi bi-x"></i>
                        <p>${data.Notmention}</p>
                      </div>
                    </div>
                  </div>
                </div>
          </div>`;
};
export let chuanbiRender = (informPage,data) => {
  informPage.style.height = "35%";
  informPage.innerHTML = `
    <div class="trekkingContent-ChuanBi">
    <h1>CHUẨN BỊ CHO TOUR TREKKING ${data.Title}</h1>
    <div class="trekkingContent-ChuanBi-child">
      <div class="trekkingContenttour-cb-detail">
        <i class="bi bi-check-circle-fill"></i>
        <p>${data.Tools}</p>
      </div>
    </div>
  </div>`;
};
