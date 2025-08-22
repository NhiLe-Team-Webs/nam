import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      {/* HERO SECTION */}
      <header 
        className="min-h-screen flex items-center justify-center text-center p-6 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${heroImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl relative z-10">
          <p className="text-lg md:text-xl text-primary font-semibold mb-2">
            Một dự án từ NhiLe Team
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider mb-4">
            Dự Án NAM
          </h1>
          <h2 className="text-xl md:text-3xl font-bold mb-6">
            Nơi Hội Tụ Của Nam Nhi Chí Lớn
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto mb-8 text-muted-foreground">
            Kết nối những người đàn ông Việt Nam, cùng nhau phát triển trí tuệ, rèn luyện sức khỏe, và gìn giữ tinh thần Việt: <strong className="text-primary">Hòa nhập nhưng không hòa tan.</strong>
          </p>
          <a href="#form-dang-ky">
            <Button variant="hero" size="lg">
              Gia Nhập Cộng Đồng
            </Button>
          </a>
        </div>
      </header>

      <main>
        {/* WHO IS THIS FOR SECTION */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              BẠN CÓ PHẢI LÀ NGƯỜI ĐÀN ÔNG...
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-card-dark p-8 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-3">Tìm kiếm Anh Em</h3>
                <p className="text-muted-foreground">
                  Muốn tìm những người anh em thật sự, không phải những mối quan hệ xã giao hời hợt?
                </p>
              </div>
              <div className="bg-card-dark p-8 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-3">Khát khao Bứt Phá</h3>
                <p className="text-muted-foreground">
                  Muốn bứt phá giới hạn của bản thân nhưng chưa biết bắt đầu từ đâu?
                </p>
              </div>
              <div className="bg-card-dark p-8 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-3">Cần một Môi Trường</h3>
                <p className="text-muted-foreground">
                  Để cùng rèn luyện, học hỏi và hỗ trợ nhau cả về trí tuệ lẫn sức khỏe?
                </p>
              </div>
              <div className="bg-card-dark p-8 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-3">Học hỏi Điều Chân Chính</h3>
                <p className="text-muted-foreground">
                  Mong muốn học hỏi từ kinh nghiệm của những người đàn ông chân chính đã đi trước?
                </p>
              </div>
            </div>
            <p className="mt-12 text-xl md:text-2xl text-muted-foreground">
              Nếu câu trả lời là <strong className="text-foreground">"CÓ"</strong>, thì <strong className="text-primary">"NAM"</strong> chính là nơi bạn thuộc về.
            </p>
          </div>
        </section>

        {/* N.A.M. MANIFESTO SECTION */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tinh Thần Đằng Sau Ba Chữ Cái
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Thương hiệu "NAM" mang đậm những phẩm chất và giá trị của người đàn ông nam tính, kiên cường và có chí lớn.
            </p>
            <div className="grid lg:grid-cols-3 gap-8 md:gap-12 text-left">
              {/* N */}
              <div className="bg-secondary p-8 rounded-lg border-t-4 border-primary">
                <h3 className="text-8xl font-black text-primary brand-letter mb-4">N</h3>
                <div className="space-y-4">
                  <p>
                    <strong className="text-xl text-foreground">Nghị lực</strong> – Kiên cường và mạnh mẽ trong việc vượt qua thử thách.
                  </p>
                  <p>
                    <strong className="text-xl text-foreground">Nhiệt huyết</strong> – Đam mê và tận tâm trong mọi việc.
                  </p>
                  <p>
                    <strong className="text-xl text-foreground">Nguyên tắc</strong> – Sống và làm việc với kỷ luật và chuẩn mực.
                  </p>
                </div>
              </div>
              {/* A */}
              <div className="bg-secondary p-8 rounded-lg border-t-4 border-primary">
                <h3 className="text-8xl font-black text-primary brand-letter mb-4">A</h3>
                <div className="space-y-4">
                  <p>
                    <strong className="text-xl text-foreground">Anh dũng</strong> – Dũng cảm, sẵn sàng đối mặt với khó khăn.
                  </p>
                  <p>
                    <strong className="text-xl text-foreground">Am hiểu</strong> – Kiến thức sâu rộng, hiểu biết tinh tế.
                  </p>
                  <p>
                    <strong className="text-xl text-foreground">Ảnh hưởng</strong> – Tạo tác động tích cực đến những người xung quanh.
                  </p>
                </div>
              </div>
              {/* M */}
              <div className="bg-secondary p-8 rounded-lg border-t-4 border-primary">
                <h3 className="text-8xl font-black text-primary brand-letter mb-4">M</h3>
                <div className="space-y-4">
                  <p>
                    <strong className="text-xl text-foreground">Mạnh mẽ</strong> – Sức mạnh cả về thể chất lẫn tinh thần.
                  </p>
                  <p>
                    <strong className="text-xl text-foreground">Minh bạch</strong> – Trung thực, rõ ràng, và đáng tin cậy.
                  </p>
                  <p>
                    <strong className="text-xl text-foreground">Mẫu mực</strong> – Là hình mẫu lý tưởng, người đàn ông để người khác noi theo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* SLOGAN SECTION */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-primary tracking-wider">
              CHÚNG TÔI PROVIDE - PROTECT
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Chúng tôi <strong className="text-foreground">Cung cấp (Provide)</strong> nền tảng và kiến thức. <br /> 
              Chúng tôi <strong className="text-foreground">Bảo vệ (Protect)</strong> giá trị và tinh thần anh em.
            </p>
          </div>
        </section>

        {/* FORM & ACTION SECTION */}
        <section id="form-dang-ky" className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sẵn Sàng Trở Thành Một Phần Của "NAM"?
              </h2>
              <p className="text-muted-foreground mb-10">
                Hoàn thành các bước dưới đây để gia nhập vào cộng đồng những người đàn ông kiên cường.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Step 1: Form */}
              <div className="bg-secondary p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-primary">
                  Bước 1: Để Lại Thông Tin Kết Nối
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="block mb-2 text-sm font-medium text-muted-foreground">
                      Họ và Tên
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Nguyễn Văn A"
                      className="bg-input border border-border text-foreground"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="block mb-2 text-sm font-medium text-muted-foreground">
                      Email
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="email@example.com"
                      className="bg-input border border-border text-foreground"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="block mb-2 text-sm font-medium text-muted-foreground">
                      Số điện thoại
                    </Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="09xxxxxxxx"
                      className="bg-input border border-border text-foreground"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" variant="default" size="lg">
                    GỬI THÔNG TIN
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Chúng tôi cam kết bảo mật thông tin của bạn.
                  </p>
                </form>
              </div>

              {/* Step 2: Links */}
              <div className="bg-secondary p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-primary">
                  Bước 2: Gia Nhập Ngôi Nhà Chung
                </h3>
                <div className="space-y-4">
                  <Button variant="social" className="w-full bg-blue-600 hover:bg-blue-500 text-white" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Điền Form Đăng Ký Chi Tiết (Google Form)
                    </a>
                  </Button>
                  <Button variant="social" className="w-full bg-sky-500 hover:bg-sky-400 text-white" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Tham Gia Nhóm Telegram
                    </a>
                  </Button>
                  <Button variant="social" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Theo Dõi Facebook Page
                    </a>
                  </Button>
                  <Button variant="social" className="w-full bg-pink-600 hover:bg-pink-500 text-white" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Kết Nối Qua Instagram
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <h3 className="text-xl font-bold text-foreground mb-2">DỰ ÁN NAM</h3>
          <p className="mb-2">
            Một cộng đồng thuộc <strong className="text-primary">NhiLe Team</strong>
          </p>
          <p className="mb-4">"Chúng tôi Provide - Protect"</p>
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-primary transition-colors">Facebook</a>
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">Telegram</a>
          </div>
          <p className="text-sm">&copy; 2024 Dự án NAM by NhiLe Team. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;