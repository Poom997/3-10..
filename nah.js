let current = 1;
const total = 3;

const text = `วันนี้พวกเราก็เดินทางมาถึงวันสุดท้ายของ ม.3 แล้วนะ ขอบคุณทุกคนที่ทำให้ 3 ปีนี้มีทั้งเสียงหัวเราะ ความบ้า ความเครียด และความทรงจำดี ๆ เต็มไปหมด
ถึงบางวันจะทะเลาะกัน งอนกัน หรือปวดหัวใส่กันบ้าง แต่สุดท้ายเราก็คือห้องเดียวกันเสมอ

ขอให้หลังจากนี้แต่ละคนได้ไปในทางที่ตัวเองฝันไว้ สอบติดที่อยากเข้า เจอเพื่อนใหม่ดี ๆ และอย่าลืมกันนะ
ถ้าวันไหนเหนื่อย ๆ ก็อย่าลืมว่าครั้งหนึ่งเราเคยผ่านอะไรยาก ๆ มาด้วยกันได้ 💚`;

function changePage(num) {
    document.querySelectorAll(".page").forEach(p => {
        p.classList.remove("active");
    });

    current = num;
    document.getElementById("page" + num).classList.add("active");

    document.getElementById("progressBar").style.width =
        ((num - 1) / (total - 1)) * 100 + "%";

    if (num === 3) {
        startTyping();
    }
}

function startTyping() {
    const el = document.getElementById("letter");
    el.innerHTML = "";
    let i = 0;

    function type() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 30);
        }
    }

    type();
}