const locations = [
  {
    name: "Đảng ủy Phường Mỹ Phong",
    address: "Đường huyện 86C, khu phố Phong Thuận, Phường Mỹ Phong, tỉnh Đồng Tháp",
    subname: "Cơ quan Đảng",
    lat: 10.3540802,
    lng: 106.3966994,
    image:
       "./images/Dang uy.jpg",
    type: "Đảng ủy",
    url: "https://maps.app.goo.gl/eQv2huzNtctTpCzK6",
    desc: "Điện thoại: 02733.850.145",
  },
  {
    name: "Hội đồng nhân dân - Ủy ban nhân dân Phường Mỹ Phong",
    address: "12 Âu Dương Lân, Phường Mỹ Phong, tỉnh Đồng Tháp",
    subname: "Cơ quan hành chính nhà nước",
    lat: 10.3576538,
    lng: 106.3811057,
    image:
      "./images/ubnn.jpg",
    type: "Cơ quan",
    url: "https://maps.app.goo.gl/WzXosr4N4YmbBBmm9",
    desc: "Điện thoại: 02733.950.047",
  },
  {
    name: "Ủy ban Mặt trận Tổ quốc và Tổ chức Chính trị xã hội",
    address: "Số 88 tỉnh lộ 879B Khu phố Mỹ Lợi, Phường Mỹ Phong, tỉnh Đồng Tháp",
    subname: "Cơ quan hành chính địa phương",
    lat: 10.3685178,
    lng: 106.3875891,
    image:
      "./images/MTTQ.jpg",
    type: "Cơ quan",
    url: "https://maps.app.goo.gl/3gLa6smcYqMSLJtDA",
    desc: "Điện thoại: 02733.889.645",
  },
  {
    name: "Công An Phường Mỹ Phong",
    address: "Số 08, đường Huyện lộ 89, khu phố Hội Gia , Phường Mỹ Phong, tỉnh Đồng Tháp",
    subname: "Cơ quan hành chính địa phương",
    lat: 10.3576538,
    lng: 106.3811057,
    image:
         "./images/CA.jpg",
    type: "Công an",
    url: "https://maps.app.goo.gl/J2LfB6pYrDzTrBHx6",
    desc: "Điện thoại: 02733.889.981",
  },
  {
    name: "Ban Chỉ huy Quân sự Phường Mỹ Phong",
    address: "15B, khu phố Phong Thuận, Phường Mỹ Phong, tỉnh Đồng Tháp",
    subname: "Cơ quan",
    lat: 10.3540802,
    lng: 106.3966994,
    image:
       "./images/Quansu.jpg",
    type: "Quân sự",
    url: "https://maps.app.goo.gl/eQv2huzNtctTpCzK6",
    desc: "Điện thoại:02776.561.018",
  },
  {
    name: "Phòng Kinh tế - Hạ tầng - Đô thị Phường Mỹ Phong",
    address: "12 Âu Dương Lân, Phường Mỹ Phong, Đồng Tháp",
    subname: "Phòng chuyên môn thuộc Ủy ban nhân dân phường Mỹ Phong",
    lat: 10.3576538,
    lng: 106.3811057,
    image:
      "./images/P.KT.jpg",
  type: "Cơ quan",
    url: "https://maps.app.goo.gl/WzXosr4N4YmbBBmm9",
    desc: "Điện thoại: 02733.948.686",
  },
{
    name: "Phòng Văn hoá - Xã hội Phường Mỹ Phong",
    address: "12 Âu Dương Lân, Phường Mỹ Phong, Đồng Tháp",
    subname: "Phòng chuyên môn thuộc Ủy ban nhân dân phường Mỹ Phong",
    lat: 10.3576538,
    lng: 106.3811057,
    image:
      "./images/P.VHXH.jpg",
    type: "Cơ quan",
    url: "https://maps.app.goo.gl/WzXosr4N4YmbBBmm9",
    desc: "Điện thoại: 02733.844.568",
  },
  {
    name: "Trung tâm Phục vụ Hành chính công Phường Mỹ Phong",
    address: "12 Âu Dương Lân, Phường Mỹ Phong, Đồng Tháp",
    subname: "Phòng chuyên môn thuộc Ủy ban nhân dân phường Mỹ Phong",
    lat: 10.3576538,
    lng: 106.3811057,
    image:
     "./images/HCC.jpg",
    type: "Cơ quan",
    url: "https://maps.app.goo.gl/WzXosr4N4YmbBBmm9",
    desc: "Điện thoại: 0277.826.686",
  },
  {
    name: "Trung tâm Cung ứng Dịch vục công Phường Mỹ Phong",
    address: "12 Âu Dương Lân, Phường Mỹ Phong, Đồng Tháp",
    subname: "Đơn vị sự nghiệp",
    lat: 10.3576538,
    lng: 106.3811057,
    image:
      "./images/CƯDVC.jpg",
    type: "Cơ quan",
    url: "https://maps.app.goo.gl/WzXosr4N4YmbBBmm9",
    desc: "",
  },
   {
    name: "Trường Tiểu học Âu Dương Lân",
    address: "552 Đinh Bộ Lĩnh, Phường Mỹ Phong, tỉnh Đồng Tháp",
    subname: "Đơn vị sự nghiệp",
    lat: 10.3515788,
    lng: 106.380758,
    image:
      "./images/ADL.jpg",
    type: "Trường học",
    url: "https://maps.app.goo.gl/yRUJC44FaNV8bxxx8",
    desc: "Điện thoại: 02733.850.133",
  },
  {
    name: "Trường Tiểu học Tân Tỉnh",
    address: "Số 986 khu phố Tân Tỉnh A, Phường Mỹ Phong, tỉnh Đồng Tháp",
    subname: "Đơn vị sự nghiệp",
    lat: 10.349653,
    lng: 106.4062867,
    image:
      "./images/TanTinh.jpg",
    type: "Trường học",
    url: "https://maps.app.goo.gl/qhLnPWEP8TGaUeRR6",
    desc: "Điện thoại: 02733.850.135",
  },
  {
    name: "Trường Tiểu học - Trung học cơ sở Lê Văn Nghề",
    address: "Khu phố Mỹ Hòa, Phường Mỹ Phong, tỉnh Đồng Tháp",
    subname: "Đơn vị sự nghiệp",
    lat: 10.3820952,
    lng: 106.3921435,
    image:
      "./images/LeVanNghe.jpg",
    type: "Trường học",
    url: "https://maps.app.goo.gl/dfWeu6ppH4VsThUj9",
    desc: "Điện thoại:02733.989.291",
  },
  {
    name: "Trường Trung học cơ sở Tân Mỹ Chánh",
    address: "Khu phố Phong Thuận, Phường Mỹ Phong, tỉnh Đồng Tháp",
    subname: "Đơn vị sự nghiệp",
    lat: 10.352116,
    lng: 106.3985917,
    image:
      "./images/TanMyChanh.jpg",
    type: "Trường học",
    url: "https://maps.app.goo.gl/QAAWWn87SmjdvkeH9",
    desc: "Điện thoại:02733.850.134",
  },
  {
    name: "Trường Mầm non Rạng Đông",
    address: "Đường Trần Thị Thơm khu phố 3, Phường Mỹ Phong, tỉnh Đồng Tháp",
    subname: "Đơn vị sự nghiệp",
    lat: 10.361584,
    lng: 106.383333,
    image:
      "./images/RangDong.jpg",
    type: "Trường học",
    url: "https://maps.app.goo.gl/YC1jr8iNie6Uf2Cg9",
    desc: "Điện thoại:02733.950.259",
  },
  {
    name: "Trường Mầm non Mạ Xanh cơ sở 2",
    address: "Ấp Bình Phong, Phường Mỹ Phong, tỉnh Đồng Tháp",
    subname: "Đơn vị sự nghiệp",
    lat: 10.3705762,
    lng: 106.3638998,
    image:
      "./images/Maxanh.jpg",
    type: "Trường học",
    url: "https://maps.app.goo.gl/VJjWdbE49t6DJ7aL9",
    desc: "Điện thoại: 02733. Đơn vị này cũng là đầu mối tiếp nhận, xử lý các thủ tục hành chính của người dân và doanh nghiệp trên địa bàn phường.",
  },
  {
    name: "Trường Mầm non Mạ Xanh cơ sở 1",
    address: "102 QL50, Phường Mỹ Phong, tỉnh Đồng Tháp",
    subname: "Đơn vị sự nghiệp",
    lat: 10.3705762,
    lng: 106.3638998,
    image:
      "./images/Maxanh1.jpg",
    type: "Trường học",
    url: "https://maps.app.goo.gl/V6nnhQp6ys7xPoQp9",
    desc: "Điện thoại:Cơ sở 1:02733.850.957;       Cơ sở 2: 02733.958.585",
  },
  {
    name: "Trường Tiểu học Mỹ Phong",
    address: "Khu phố Mỹ Lợi, Phường Mỹ Phong, tỉnh Đồng Tháp",
    subname: "Đơn vị sự nghiệp",
    lat: 10.3685287,
    lng: 106.3840338,
    image:
      "./images/MyPhong.jpg",
    type: "Trường học",
    url: "https://maps.app.goo.gl/Qy6GdZ21n8a4ti1n9",
    desc: "Điện thoại:02733.989.026",
  },
  {
    name: "Trường Tiểu học Thạnh Trị",
    address: "Số 204 Lê Văn Nghề, Phường Mỹ Phong, tỉnh Đồng Tháp",
    subname: "Đơn vị sự nghiệp",
    lat: 10.3701409,
    lng: 106.3640408,
    image:
      "./images/ThanhTri.jpg",
    type: "Trường học",
    url: "https://maps.app.goo.gl/utizN6AoTENuMsLR6",
    desc: "Điện thoại:02733.989.345",
  },
  {
    name: "Trường Mầm non Tịnh Nghiêm",
    address: "Khu phố Mỹ An, Phường Mỹ Phong, tỉnh Đồng Tháp",
    subname: "Đơn vị sự nghiệp",
    lat: 10.3637818,
    lng: 106.372321,
    image:
      "./images/TinhNghiem.jpg",
    type: "Trường học",
    url: "https://maps.app.goo.gl/WqQS88AARLwxnGER8",
    desc: "Điện thoại:02733.884.833",
  },
  {
    name: "Trường Mầm non Hoa Mai",
    address: "Khu phố Mỹ Lợi, Phường Mỹ Phong, tỉnh Đồng Tháp",
    subname: "Đơn vị sự nghiệp",
    lat: 10.369129,
    lng: 106.3814591,
    image:
      "./images/HoaMai.jpg",
    type: "Trường học",
    url: "https://maps.app.goo.gl/gWEuZMEW4tGCBwiD9",
    desc: "Điện thoại: 02733.889.090",
  },{
    name: "Chùa Vĩnh Tràng",
    address: "Khu phố Mỹ An, Phường Mỹ Phong, tỉnh Đồng Tháp",
    subname: "Du lịch tâm linh",
    lat: 10.3625503,
    lng: 106.3739389,
    image:
      "./images/vinh trang.jpg",
    type: "Du lịch",
    url: "https://maps.app.goo.gl/ck3ptWyao6CwStbR9",
    desc: "Điện thoại:02733.873.427",
  },

];

const filterSelect = document.getElementById("filter")
const searchInput = document.getElementById("search");
const cards = document.getElementById("cards");

function renders() {
  const keyword = searchInput.value.toLowerCase();
  const filter = filterSelect.value;

  cards.innerHTML = "";

  const filteredLocations = locations.filter((loc) => {
    const matchesSearch =
      loc.name.toLowerCase().includes(keyword) ||
      loc.address.toLowerCase().includes(keyword);
    const matchesFilter = filter == "all" || loc.type === filter;
    return matchesSearch && matchesFilter;
  });
  if (filteredLocations.length === 0) {
    cards.innerHTML = `<h1 class="text-white">Không tìm thấy kết quả</h1>`;
    return;
  }

  filteredLocations.forEach((loc) => {
    const col = document.createElement("div");
    col.className = "col";
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img
            src="${loc.image}"
            class="card-img-top"
            alt="${loc.name}"
        />
        <div class="card-body">
            <h5 class="card-title">
                <span>${loc.name}</span>
                <span class="badged">${loc.type}</span>
            </h5>
            <p class="card-text">
                <span class="card-address">
                    <i class="fa-solid fa-location-dot"></i> 
                    Địa chỉ: ${loc.address}
                </span>
                <span class="card-location">
                    <i class="fa-solid fa-location-crosshairs"></i> 
                    Tọa độ: ${loc.lat}, ${loc.lng}
                </span>
                <span class="card-location">${loc.subname}</span>
            </p>
                <a href="${loc.url}" target="_blank" class="btn-grad btn-grad-prima">Mở Google Maps</a>
                <a href="#" class="btn-grad btn-grad-seco" id="test" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    data-title="${loc.name}"
                    data-img="${loc.image}"
                    data-desc="${loc.desc}"
                    data-subtitle="${loc.address}"
                    data-url="${loc.url}"
                >
                    Chi tiết
                </a>
        </div>
    `;

    // $("#exampleModal").on("show.bs.modal", function (event) {
    //   var modal = $(this);
    //   modal.find(".modal-title").text(loc.name);
    //   modal.find(".modal-img").attr("src", loc.image);
    //   modal.find(".modal-desc").text(loc.desc);
    //   modal.find(".modal-subtitle").text(loc.address);
    //   modal.find(".mylink").attr("href", loc.url);
    //   console.log(event);
    // });

    col.appendChild(card);
    cards.appendChild(col);
  });
}

searchInput.addEventListener("input", renders);
filterSelect.addEventListener("change", renders);

renders();

const modal = document.getElementById("exampleModal");

modal.addEventListener("show.bs.modal", function (event) {
  const button = event.relatedTarget; // Nút "Chi tiết" được bấm

  const title = button.getAttribute("data-title");
  const img = button.getAttribute("data-img");
  const desc = button.getAttribute("data-desc");
  const address = button.getAttribute("data-subtitle");
  const url = button.getAttribute("data-url");

  modal.querySelector(".modal-title").textContent = title;
  modal.querySelector(".modal-subtitle").textContent = address;
  modal.querySelector(".modal-img").src = img;
  modal.querySelector(".modal-desc").textContent = desc;
  modal.querySelector(".mylink").href = url;

  //   const modalTitle = modal.querySelector(".modal-title");
  //   const modalImg = modal.querySelector(".modal-img");
  //   const modalDesc = modal.querySelector(".modal-map-desc");
  //   const modalSubtitle = modal.querySelector(".modal-subtitle");
  //   const modalLink = modal.querySelector(".mylink");
});
