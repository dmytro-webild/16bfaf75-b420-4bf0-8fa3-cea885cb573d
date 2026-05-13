"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Clock, ShieldCheck, Truck } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="largeSmallSizeMediumTitles"
        background="none"
        cardStyle="layered-gradient"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingOverlay
            navItems={[
              { name: "الرئيسية", id: "hero" },
              { name: "من نحن", id: "about" },
              { name: "منتجاتنا", id: "products" },
              { name: "تواصل معنا", id: "contact" },
            ]}
            brandName="ألبان السيد كامل"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroBillboardCarousel
            background={{ variant: "gradient-bars" }}
            title="ألبان السيد كامل - طعم الطبيعة في منزلك"
            description="نقدم أجود منتجات الألبان الطازجة من حليب الجاموس والبقر الطبيعي في الحلة، مع خدمة توصيل سريعة لكافة مناطق بابل."
            buttons={[{ text: "اطلب الآن", href: "#contact" }]}
            mediaItems={[
              { imageSrc: "http://img.b2bpic.net/free-photo/healthy-breakfast-lunch-with-fresh-salad-pastry-orange-juice_1150-24477.jpg", imageAlt: "قيمر عرب طازج" },
              { imageSrc: "http://img.b2bpic.net/free-photo/cheese-platter-with-yoghurt-herbs-plum_140725-8270.jpg", imageAlt: "أجبان محلية الصنع" },
              { imageSrc: "http://img.b2bpic.net/free-photo/close-up-view-bucket-milking-cows-animal-barn_1150-12779.jpg", imageAlt: "حليب جاموس طبيعي" },
              { imageSrc: "http://img.b2bpic.net/free-photo/cheddar-cheese-slices-white-desk-with-bowls_23-2148166524.jpg", imageAlt: "زبدة بلدية" },
              { imageSrc: "http://img.b2bpic.net/free-photo/homemade-thin-fresh-crepes-with-strawberry-jam_114579-44078.jpg", imageAlt: "لبن رائب طازج" },
              { imageSrc: "http://img.b2bpic.net/free-photo/high-angle-jars-with-copy-space_23-2148563166.jpg", imageAlt: "مربيات منزلية" },
            ]}
          />
        </div>

        <div id="about" data-section="about">
          <TextSplitAbout
            useInvertedBackground={true}
            title="قصتنا مع الألبان الطبيعية"
            description={[
              "نحن في ألبان السيد كامل نؤمن بالجودة والأصالة. يقع محلنا في الحلة، حي نادر، متخصصون في تحضير مشتقات الحليب الجاموس والبقر يومياً.",              "نتميز بقيمر العرب الملفوف الذي يعد رمزاً للضيافة، بالإضافة إلى تشكيلة واسعة من الأجبان، والدهن الحر، والمربيات، كل ذلك ننتجه بحب وعناية لنصل إلى مائدتكم طازجاً."]}
          />
        </div>

        <div id="products" data-section="products">
          <ProductCardTwo
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="four-items-2x2-equal-grid"
            useInvertedBackground={false}
            products={[
              { id: "p1", brand: "السيد كامل", name: "قيمر عرب ملفوف", price: "20,000 د.ع / كغم", rating: 5, reviewCount: "120", imageSrc: "http://img.b2bpic.net/free-photo/view-delicious-dairy-products_23-2148601795.jpg" },
              { id: "p2", brand: "السيد كامل", name: "جبن جاموس مالح", price: "6,000 د.ع / كغم", rating: 5, reviewCount: "85", imageSrc: "http://img.b2bpic.net/free-photo/sliced-fresh-white-cheese-from-cows-milk-isolated-white-background_123827-29333.jpg" },
              { id: "p3", brand: "السيد كامل", name: "دهن حر أصلي", price: "16,000 د.ع / كغم", rating: 5, reviewCount: "92", imageSrc: "http://img.b2bpic.net/free-photo/closeu-up-side-view-delicious-soup-with-chicken-potato-spoon-dark-table-gray_140725-56813.jpg" },
              { id: "p4", brand: "السيد كامل", name: "لبن رائب جاموس", price: "2,000 د.ع", rating: 4, reviewCount: "45", imageSrc: "http://img.b2bpic.net/free-photo/ayran-drink-with-mint-cucumber-glass-blue-wooden-table_123827-22328.jpg" },
              { id: "p5", brand: "السيد كامل", name: "حليب جاموس البطل", price: "3,000 د.ع", rating: 5, reviewCount: "110", imageSrc: "http://img.b2bpic.net/free-photo/plant-garden-still-life_23-2148128728.jpg" },
              { id: "p6", brand: "السيد كامل", name: "مربى التين", price: "1,000 د.ع", rating: 5, reviewCount: "55", imageSrc: "http://img.b2bpic.net/free-photo/high-angle-jars-with-jam_23-2148563165.jpg" },
            ]}
            title="قائمة منتجاتنا"
            description="تشكيلة من أفضل منتجاتنا الطبيعية، جاهزة للتوصيل إلى منزلك."
          />
        </div>

        <div id="features" data-section="features">
          <FeatureCardTwentyFive
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={true}
            features={[
              { title: "طازجة يومياً", description: "منتجاتنا تحضر بشكل يومي لضمان الطعم الطبيعي.", icon: Clock, mediaItems: [{ imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-holding-products_23-2149148463.jpg" }, { imageSrc: "http://img.b2bpic.net/free-photo/senior-holding-mug-with-milk_23-2148673021.jpg" }] },
              { title: "حليب طبيعي", description: "استخدام حليب الجاموس والبقر من مزارع مختارة.", icon: ShieldCheck, mediaItems: [{ imageSrc: "http://img.b2bpic.net/free-photo/close-up-view-bucket-milking-cows-animal-barn_1150-12778.jpg" }, { imageSrc: "http://img.b2bpic.net/free-photo/bison-wild-sunny-day_23-2151689004.jpg" }] },
              { title: "توصيل سريع", description: "توصيل إلى كافة مناطق الحلة ومحافظة بابل.", icon: Truck, mediaItems: [{ imageSrc: "http://img.b2bpic.net/free-photo/courier-delivering-groceries-home_23-2149738020.jpg" }, { imageSrc: "http://img.b2bpic.net/free-photo/smiling-cheerful-woman-unpacking-fast-food-meal-delivery-sitting-sofa-junkfood-homedelivered_482257-8685.jpg" }] }
            ]}
            title="مميزات ألبان السيد كامل"
            description="نحن ملتزمون بتقديم أعلى مستويات الجودة لعملائنا في الحلة."
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardOne
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="three-columns-all-equal-width"
            useInvertedBackground={false}
            testimonials={[
              { id: "t1", name: "أحمد علي", role: "زبون دائم", company: "الحلة", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-handsome-male-smiling_181624-41237.jpg" },
              { id: "t2", name: "سارة محمد", role: "ربة منزل", company: "بابل", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/waist-up-portrait-beautiful-smiling-young-woman-with-positive-expression-wears-casual-black-t-shirt-has-tattooed-arm-models-against-concrete-wall_273609-3574.jpg" },
              { id: "t3", name: "عمر خالد", role: "طالب", company: "الحلة", rating: 4, imageSrc: "http://img.b2bpic.net/free-photo/internationals-people-standing-cafe-with-shopping-bags_1157-32441.jpg" },
              { id: "t4", name: "فاطمة يوسف", role: "موظفة", company: "الحلة", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/happy-man-talking-his-girlfriend-while-relaxing-cafe_637285-8958.jpg" },
              { id: "t5", name: "حسين جاسم", role: "زبون", company: "بابل", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/cute-girl-with-shopping-bag-city_1157-23102.jpg" },
            ]}
            title="ماذا يقول زبائننا"
            description="نفتخر بثقة عوائل الحلة لسنوات."
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitMedia
            textboxLayout="split"
            useInvertedBackground={true}
            faqs={[
              { id: "f1", title: "هل التوصيل متوفر خارج الحلة؟", content: "نعم، التوصيل متوفر لجميع أنحاء محافظة بابل." },
              { id: "f2", title: "هل المنتجات طازجة؟", content: "نعم، كافة الألبان والأجبان يتم تحضيرها بشكل يومي." },
              { id: "f3", title: "كيف يمكن الطلب؟", content: "يمكنكم الاتصال عبر أرقامنا أو عبر الواتساب." },
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/milkshake-bottles-pink-background_23-2148037206.jpg"
            title="الأسئلة الشائعة"
            description="إجابات على أكثر ما يهمكم."
            faqsAnimation="slide-up"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCenter
            tag="تواصل معنا"
            useInvertedBackground={false}
            background={{ variant: "plain" }}
            title="تواصل معنا"
            description="نحن جاهزون لاستقبال طلباتكم يومياً."
            inputPlaceholder="اكتب بريدك أو رقمك"
            buttonText="إرسال"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterSimple
            columns={[
              { title: "معلومات الاتصال", items: [{ label: "07806746136", href: "tel:07806746136" }, { label: "07801338981", href: "tel:07801338981" }] },
              { title: "روابط سريعة", items: [{ label: "المنتجات", href: "#products" }, { label: "تواصل معنا", href: "#contact" }] },
            ]}
            bottomLeftText="© 2024 ألبان السيد كامل. جميع الحقوق محفوظة."
            bottomRightText="تصميم متجر محلي"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
