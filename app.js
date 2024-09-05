document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Modern Family', price: 100, image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/456031502_818916590456841_7585427125884125360_n.png?stp=dst-png_s480x480&_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGOYZxUye675qxcKp1RdJ8NdbN_b8pANnt1s39vykA2eyhwll-c9CgeJ6wEWWrLLvypjTjz_6HvNbMCfcwfFB2l&_nc_ohc=ZdHI9cOl-dcQ7kNvgHQ9hPg&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHmQ3NDNUA5cRMEJTIb42M-BNuaaw6XKe43BsYaVm8bag&oe=66F227A1', category: 'category1' },
        { id: 2, name: 'Luxury', price: 200, image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/454181507_888618083124523_3471768499150702493_n.png?stp=dst-png_s526x296&_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGyWIKjStEr4xKFMZntxW7wI_EN9mRVSt0j8Q32ZFVK3XbrtJp2MBFZiFYQusRBpVzeP3uonWDxwyLdynsCeUze&_nc_ohc=vC7GJLc--rAQ7kNvgFqZO3H&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QH53y2wWPSWpGO17w1VALNeKLvQxdHUx6nVSNgeTWCjsQ&oe=66F24DBB', category: 'category2' },
        { id: 3, name: 'Cozy', price: 300, image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/456089122_1029113198953665_5520990991104819008_n.png?stp=dst-png_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFlycI60KtynCrtmHG2bdBEMhjNRZV0fdoyGM1FlXR92u6UTkAcMW1WQW0igi5itEeqn3t4f3qYPf7r4uy0mN2z&_nc_ohc=ncqH_1R8zEIQ7kNvgE5Fzlx&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QG6SuANWSC8G8JzstC6d5VGucczKzrkChcO8q3zYhLl-g&oe=66F23E85', category: 'category1' },
        { id: 4, name: 'Elegant', price: 150, image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/456466365_861721139217729_1176065560861269086_n.png?stp=dst-png_p206x206&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeH4icW4CzZgePPpFZhXmCHQ1a92yRkd7EzVr3bJGR3sTJh4JhxJJdEsviLT8zrex1GiWDFPZZwGvWlP5uU3Yv2n&_nc_ohc=JQhCUdJNZRMQ7kNvgEm9YeY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFEdq3BR1sJcjdl9eusngSTlMy-b3JiR12niD5NCG1s6A&oe=66F239D9', category: 'category3' },
        { id: 5, name: 'City View', price: 250, image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/455115830_1230898157934185_7651489705485764506_n.png?stp=dst-png_s417x417&_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHQjIXjIyAtdfaRWdz4sQIgcinxwYMq7OZyKfHBgyrs5iOMVZ9tKZLPlW9M7SoxLZuS21ld1wK9bTv1W7pJalEr&_nc_ohc=4-NSAdYGMVEQ7kNvgFV0Yad&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QF9UXByAt9G5rdq2orFhHRUVjeI6k3ddHkySTP6OJPWzw&oe=66F24EBF', category: 'category2' },
        { id: 6, name: 'Modern', price: 350, image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/456239967_1330938981059845_6070027853494044316_n.png?stp=dst-png_p206x206&_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeEJW3g9b_G1-AMSYon8XrQYrEmZkrgGy9CsSZmSuAbL0HIn91B6H76JkzTzn7iqYu7URe7BElXnSWcs4OjjIcJE&_nc_ohc=J3ADZRim0NAQ7kNvgHK72w2&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFCeg8Ukh-c1ZaRXoFkpVS3E9_g6FAN3o3a7vBA2pv5-g&oe=66F2238A', category: 'category3' },
        { id: 7, name: 'Beautiful', price: 180, image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/456290468_396109030171534_139612190115552376_n.png?stp=dst-png_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeE1vlLdPZWLBBHbpneQBqsLuEcB2XTPkOG4RwHZdM-Q4W9FcUoDF_J8ofeSoAsowSrpv6htiJJofPPwS-huTmhT&_nc_ohc=MaeOmdm1cU0Q7kNvgH8MlP9&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFrdPuxsJgAV2f1ZQ3OmiPFn5H7TTqc9CzPoAdQZcjoUA&oe=66F2536B', category: 'category1' },
        { id: 8, name: 'Spacious', price: 220, image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/454729961_2202187646813877_613447579694025336_n.png?stp=dst-png_s417x417&_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHXPGExWXADD53Xm-Tl_GcYRoDU4bqfCwRGgNThup8LBJORiIa-38EbUhNNGm5vsRtY9t6jeja38L7Jx8mioDj8&_nc_ohc=8p0kWCZxzwEQ7kNvgEO4WMW&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFkfsG0k0qfb0XieHkO17cy9_QBikcNDDY0594OlGbOHA&oe=66F23C5F', category: 'category2' },
        { id: 9, name: 'Luxury Villa', price: 280, image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/455261690_1022160496217373_6425992090496527232_n.png?stp=dst-png_p206x206&_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHiEVdidD5JwPApvtj3k20IMyvuBp4I7pczK-4GngjulxlTb8wFN_DhJqK3Yb1XOJ_p4wbeplkpM6EJO2bOdFI9&_nc_ohc=QzeeiEjV_dIQ7kNvgEUaDRe&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QF-2LGroK0CCXcVmQ3HJo54bdgueOGkMc4PcTmN3oGfSA&oe=66F2415B', category: 'category3' },
        { id: 10, name: 'Grand', price: 400, image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/456078043_793941092639967_8472877553216645344_n.png?stp=dst-png_p206x206&_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFHm_a4W7Hd7m_urqcEpgN2ynmL6eDthWLKeYvp4O2FYkFtEi1NkuLlCt3eGXVG9gW9sQTl57cMrnwrwH-8Cqxw&_nc_ohc=ir_33fEyKdIQ7kNvgELYJ8D&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFWuAXFECoUuG_ovqFk4I1PzC9k-8NnSvdzMI0Q-WsPdw&oe=66F247B6', category: 'category1' },
        { id: 12, name: 'Exclusive', price: 240, image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/454713362_1215456776247950_6383074632934972811_n.png?stp=dst-png_p206x206&_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGrAfL7zQuX8oSJgC7OAbEp9f4FzKdM9jD1_gXMp0z2MAQk9sVk8dLjKWspUBKK5utU3-Rzj5STua8T3aT9prWZ&_nc_ohc=UWM4DfZP3x0Q7kNvgFMf39g&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFIf0iAXNeNqNTP6e8voAkQUWj2Gif_OO0W7eWu2JXNrw&oe=66F23937', category: 'category3' },
        { id: 13, name: 'Charming', price: 180, image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/456471972_1056400352519072_8568117144259939474_n.png?stp=dst-png_s350x350&_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeEQPe3xTdzoictxxK4g4HNsBGeLV05TLx0EZ4tXTlMvHXkBz8O2oE5lB2wSCyccTkYmpOiAUShBh_q0acUCyeVP&_nc_ohc=1DlgyIti9RAQ7kNvgGEfByZ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHHip53Cpxk0hkIoSAgfG0V2cNYCQ6HkNwIOm_g3zIADQ&oe=66F24F67', category: 'category1' },
        { id: 15, name: 'Spacious Home', price: 140, image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/454156073_1572196617012812_5220086260570146866_n.png?stp=dst-png_s480x480&_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeG6cr_FU0UCA8oxj27KNQ5VcGscPY7Xbcxwaxw9jtdtzOQBor4zn4x1iHTpMEVXS9xRWUfxAULiLtzY_sKQMvKl&_nc_ohc=FPGc6AujSacQ7kNvgGH1RqY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGMdFR1LNQg2PmgKhhIHhts1RzswxJp7MZsuzf3J6kAEA&oe=66F2594C', category: 'category3' }
    ];

    const productList = document.querySelector('.product-list');
    const categoryLinks = document.querySelectorAll('#categories a');

    function displayProducts(filterCategory) {
        productList.innerHTML = ''; // ลบสินค้าเก่าออก

        const filteredProducts = filterCategory === 'all' ? products : products.filter(product => product.category === filterCategory);

        filteredProducts.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.setAttribute('data-category', product.category);
            productDiv.innerHTML = `
                <a href="product-detail.html?product_id=${product.id}">
                    <img src="${product.image}" alt="${product.name}" width="150">
                </a>
                <h2>${product.name}</h2>
                <p>กดที่รูปภาพเพื่อดูรายละเอียด    </p>
                <button class="contact-button" data-id="${product.id}">สนใจติดต่อ</button>
            `;
            productList.appendChild(productDiv);
        });

        // เพิ่ม Event Listener ให้ปุ่ม "สนใจติดต่อ"
        document.querySelectorAll('.contact-button').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.target.getAttribute('data-id');
                window.location.href = `contact.html?product_id=${productId}`;
            });
        });
    }

    // แสดงสินค้าทั้งหมดเมื่อโหลดหน้า
    displayProducts('all');

    // เพิ่ม Event Listener ให้กับหมวดหมู่
    categoryLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const category = link.getAttribute('data-category');
            displayProducts(category);
        });
    });
});

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

// ใช้ bodyParser เพื่ออ่านข้อมูลจากแบบฟอร์ม
app.use(bodyParser.urlencoded({ extended: false }));

// ตั้งค่าให้ใช้ไฟล์สาธารณะ (เช่น HTML, CSS)
app.use(express.static('public'));

// ตั้งค่าเส้นทางสำหรับการส่งอีเมล
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // ตั้งค่า nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',  // คุณสามารถใช้ผู้ให้บริการอีเมลอื่นได้
        auth: {
            user: 'your-email@gmail.com',   // ใส่อีเมลของคุณ
            pass: 'your-email-password'     // ใส่รหัสผ่านของคุณ
        }
    });

    const mailOptions = {
        from: email,
        to: 'your-email@gmail.com', // ใส่อีเมลที่คุณต้องการให้ส่งถึง
        subject: 'ข้อความจากเว็บไซต์',
        text: `ชื่อ: ${name}\nอีเมล: ${email}\nข้อความ: ${message}`
    };

    // ส่งอีเมล
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('เกิดข้อผิดพลาดในการส่งอีเมล');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('ข้อความของคุณถูกส่งเรียบร้อยแล้ว');
        }
    });
});

// ตั้งค่าให้เซิร์ฟเวอร์ฟังที่พอร์ต 3000
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});

