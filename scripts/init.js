addEventListener('load', function () {/*
var firebaseConfig = {
	apiKey: "AIzaSyATsprQmBaksAg7ZPoGGejFTLWclLP576Y",
	authDomain: "glass-gasket-254006.firebaseapp.com",
	databaseURL: "https://glass-gasket-254006.firebaseio.com",
	projectId: "glass-gasket-254006",
	storageBucket: "glass-gasket-254006.appspot.com",
	messagingSenderId: "883400548883",
	appId: "1:883400548883:web:61d2e40bfa097c9ba4d5e6",
	measurementId: "G-GZ498J99QG"
  }
  firebase.initializeApp(firebaseConfig);

var database = firebase.database()
*/
new Vue({
    el: "#posts",
    data: {
        posts: [{
title: "Lịch nghỉ Tết Nguyên đán 2020 của học sinh Hà Nội",
image: "images/lich-nghi-hoc.jpg",
html: "Lịch nghỉ Tết Nguyên đán Canh Tý 2020 của học sinh Hà Nội sẽ kéo dài 8 ngày, từ 22/1 đến hết 29/1/2020.",
author: "Admin",
linkrel: "posts/lich-nghi-tet-2020.html",
time: 1578821174995},
{
title: "Lịch nghỉ Tết Nguyên đán 2020 của học sinh Hà Nội",
image: "images/lich-nghi-hoc.jpg",
html: "Lịch nghỉ Tết Nguyên đán Canh Tý 2020 của học sinh Hà Nội sẽ kéo dài 8 ngày, từ 22/1 đến hết 29/1/2020.",
author: "Admin",
linkrel: "posts/lich-nghi-tet-2020.html",
time: 1578821174995},
{
title: "Lịch nghỉ Tết Nguyên đán 2020 của học sinh Hà Nội",
image: "images/lich-nghi-hoc.jpg",
html: "Lịch nghỉ Tết Nguyên đán Canh Tý 2020 của học sinh Hà Nội sẽ kéo dài 8 ngày, từ 22/1 đến hết 29/1/2020.",
author: "Admin",
linkrel: "posts/lich-nghi-tet-2020.html",
time: 1578821174995},
{
title: "Lịch nghỉ Tết Nguyên đán 2020 của học sinh Hà Nội",
image: "images/lich-nghi-hoc.jpg",
html: "Lịch nghỉ Tết Nguyên đán Canh Tý 2020 của học sinh Hà Nội sẽ kéo dài 8 ngày, từ 22/1 đến hết 29/1/2020.",
author: "Admin",
linkrel: "posts/lich-nghi-tet-2020.html",
time: 1578821174995},
{
title: "Lịch nghỉ Tết Nguyên đán 2020 của học sinh Hà Nội",
image: "images/lich-nghi-hoc.jpg",
html: "Lịch nghỉ Tết Nguyên đán Canh Tý 2020 của học sinh Hà Nội sẽ kéo dài 8 ngày, từ 22/1 đến hết 29/1/2020.",
author: "Admin",
linkrel: "posts/lich-nghi-tet-2020.html",
time: 1578821174995},
{
title: "Lịch nghỉ Tết Nguyên đán 2020 của học sinh Hà Nội",
image: "images/lich-nghi-hoc.jpg",
html: "Lịch nghỉ Tết Nguyên đán Canh Tý 2020 của học sinh Hà Nội sẽ kéo dài 8 ngày, từ 22/1 đến hết 29/1/2020.",
author: "Admin",
linkrel: "posts/lich-nghi-tet-2020.html",
time: 1578821174995}
]
    },
    methods: {
        to2: function (e) {
            return e < 10 ? '0' + e : e
        },
        getDate: function (e) {
            var n = new Date(e)
            
            return [
            this.to2(n.getDate()),
            this.to2(n.getMonth() + 1),
            this.to2(n.getFullYear())
            ].join('.')
        },
        getTime: function (e) {
            var n = new Date(e)
            var h = this.to2(n.getHours())
			 var m = this.to2(n.getSeconds())

			var d = h < 12 ? ' AM' : ' PM'
			
			if (h > 12) h -= 12
			
			return [
				this.to2(h),
				this.to2(m)
			].join(':') + d
			
        }
    }/*,
    mounted: function () {
        var _ = this
        database.ref('post/')
        .on('value', function (e) {
            var arr = []
            e = e.val()
            for (var i in e)
            	arr.push(e[i])
            _.posts = arr
        })
        
    }*/
})
})