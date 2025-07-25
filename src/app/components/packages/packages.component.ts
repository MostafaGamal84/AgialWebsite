import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ContactService } from '../../services/contact.service';
Swiper.use([Navigation, Pagination, Autoplay]);
@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.css',
})
export class PackagesComponent implements OnInit, AfterViewInit {

packages = [
  {
    titleAr: '✨ قسم الحفظ المُيسَّر في أجيال القرآن ✨',
    titleEn: '✨ Easy Memorization Section at Ajyal Al-Quran ✨',
    contentAr: `🔸 التعريف:
قسم الحفظ المُيسَّر هو أحد أكثر الأقسام انتشارًا في أجيال القرآن، لكونه الأنسب لأغلب الطلاب، سواءً من أصحاب المستوى المتوسط أو الطلاب المنشغلين، ويُعنى بحفظ القرآن الكريم بطريقة مريحة ومتدرجة، مع العناية بالتجويد وفهم المعاني المجملة وغريب القرآن.
🔹 الفئة المستهدفة:
الطالب العادي متوسط المستوى.
الطالب المنشغل الذي لا يستطيع الالتحاق ببرامج الحفظ المكثفة.
🎯 أهداف قسم الحفظ المُيسَّر:
ترغيب الطلاب في حفظ القرآن الكريم دون مشقة أو ضغط.
بناء علاقة حب وطمأنينة مع كلام الله تعالى.
تأسيس قاعدة متينة في الحفظ المستمر والمتقن.
تحسين النطق والتجويد ومخارج الحروف.
فهم غريب القرآن والمعاني العامة للآيات.
تثبيت المحفوظ عبر مراجعات منتظمة ومدروسة.
🧩 تقسيمة الحلقة في قسم الحفظ المُيسَّر:
⏱ مدة الحلقة:
من 20 إلى 60 دقيقة، بحسب الباقة التعليمية التي التحق بها الطالب.
ماسية   ذهبية    فضية   برونزية
📌 الأوراد داخل الحلقة:
تنقسم الحصة إلى أربعة أوراد رئيسية:
الجديد – الماضي القريب – الماضي البعيد – الماضي الأبعد.
🧪 اختبارات دورية:
تُجرى اختبارات تقويمية دورية للاطمئنان على جودة الحفظ.`,
    
    contentEn: `🔸 Definition:
The Easy Memorization Section is one of the most popular at Ajyal Al-Quran. It suits most students—especially those at intermediate levels or with busy schedules—and focuses on gradual memorization with Tajweed and basic meaning comprehension.
🔹 Target Audience:
Intermediate-level students.
Busy students who cannot commit to intensive programs.
🎯 Objectives:
Encourage memorization without stress.
Build a loving connection with the Quran.
Establish solid, consistent memorization habits.
Improve pronunciation and Tajweed.
Understand uncommon Quranic terms and general meanings.
Ensure retention through scheduled reviews.
🧩 Structure:
⏱ Duration: 20–60 minutes, depending on the chosen package (Diamond – Gold – Silver – Bronze).
📌 Four core components:
New memorization, Recent review, Older review, Long-term retention.
🧪 Regular assessments:
Periodic evaluations to monitor memorization quality.`
  },

  {
    titleAr: '🎙 قسم الترديد 🎙',
    titleEn: '🎙 Repetition Section 🎙',
    contentAr: `🔸 التعريف:
قسم الترديد يعتمد على أسلوب التلقين والتكرار، حيث يُردّد الطالب الآيات خلف المعلم عدة مرات لترسيخ الحفظ عبر الذاكرة السمعية، مع تصحيح مخارج الحروف.
🔹 الفئة المستهدفة:
الأطفال، كبار السن، المبتدئون، من يعانون من صعوبة القراءة.
🎯 الأهداف:
تسهيل الحفظ بالسماع والتكرار.
تصحيح النطق وتحسين الأداء الصوتي.
غرس الثقة في تلاوة القرآن.
🧩 التقسيم:
⏱ المدة: 20–60 دقيقة.
📌 الأنشطة:
تكرار الآيات خلف المعلم، ربط الجديد بالقديم، واجب صوتي منزلي.
🎧 وسائل مساعدة:
تسجيلات صوتية، بطاقات تلوين، سبورة ذكية.`,
    
    contentEn: `🔸 Definition:
The Repetition Section uses auditory memory through listening and repeating verses after the teacher multiple times, with correction of pronunciation.
🔹 Target Audience:
Children, seniors, beginners, and those with reading difficulties.
🎯 Objectives:
Facilitate memorization via repetition.
Correct articulation and pronunciation.
Instill confidence in recitation.
🧩 Structure:
⏱ Duration: 20–60 minutes.
📌 Activities:
Repeat verses, connect new verses to previous ones, home audio task.
🎧 Tools:
Audio recordings, coloring cards, smart board.`
  },

  {
    titleAr: '🧱 قسم التأسيس في أجيال القرآن 🧱',
    titleEn: '🧱 Foundation Section at Ajyal Al-Quran 🧱',
    contentAr: `🔸 التعريف:
قسم تأسيسي يهدف إلى تعليم الحروف ومخارجها وقواعد التهجي، ليتمكن الطالب من القراءة الصحيحة من المصحف.
🔹 الفئة المستهدفة:
الأطفال من 4 سنوات فأكثر، المبتدئون، من لديهم ضعف في القراءة.
🎯 الأهداف:
تمكين الطالب من قراءة القرآن قراءة صحيحة.
تعليم المخارج والصفات.
تهيئة الطالب للحفظ أو التلاوة.
🧩 الهيكل:
⏱ المدة: 30–60 دقيقة.
📌 المحتوى:
الحروف، التهجي، القراءة المتدرجة، تصحيح التلاوة.
🎒 وسائل:
بطاقات، كتب تأسيسية، تطبيقات تفاعلية، فيديوهات مبسطة.`,
    
    contentEn: `🔸 Definition:
A foundational program to teach Arabic letters, pronunciation, Tajweed, and Quranic reading skills.
🔹 Target Audience:
Children 4+, beginners, or those struggling with reading.
🎯 Objectives:
Enable proper Quran reading.
Teach articulation points and letter traits.
Prepare students for memorization or recitation.
🧩 Structure:
⏱ Duration: 30–60 minutes.
📌 Content:
Letters, word decoding, gradual reading, recitation correction.
🎒 Tools:
Cards, starter books (e.g. Noorani Qaida), smart boards, videos.`
  },

  {
    titleAr: '🛡 قسم الحُصون في أجيال القرآن 🛡',
    titleEn: '🛡 Fortresses Section at Ajyal Al-Quran 🛡',
    contentAr: `🔸 التعريف:
قسم مخصص لبناء الحفظ المنظم والمتقن من خلال منهجية "الحصون الخمسة".
🔹 الفئة المستهدفة:
الطلاب الجادّون، المقبلون على اختبار أو ختمة، المعلمون.
🎯 الأهداف:
ترسيخ الحفظ، منع النسيان، خطة مراجعة شاملة.
🧱 الحصون:
حصن الجديد، الماضي القريب، الماضي البعيد، التحضير، القراءة والسماع.
⏱ المدة: 30–100 دقيقة.
📌 المحتوى: تسميع، مراجعة، تحضير، تلاوة.
🎖 أدوات: جدول، اختبار شهري، وسام.`,
    
    contentEn: `🔸 Definition:
A structured memorization section using the "Five Fortresses" method to achieve strong, lasting memorization.
🔹 Target Audience:
Serious students, those approaching exams or khatma, teachers.
🎯 Objectives:
Reinforce memorization, prevent forgetfulness, implement review systems.
🧱 Fortresses:
New memorization, recent review, old review, preparation, reading/listening.
⏱ Duration: 30–100 minutes.
📌 Content: Recitation, review, prep, reading/listening.
🎖 Tools: Schedule, monthly test, recognition badge.`
  },

  {
    titleAr: '🌿 نظام الحفظ والتدبر في أجيال القرآن 🌿',
    titleEn: '🌿 Memorization & Reflection System at Ajyal Al-Quran 🌿',
    contentAr: `🔸 التعريف:
نظام يجمع بين الحفظ والتدبر، من خلال فهم المعاني ومفردات القرآن قبل حفظه.
🔹 الفئة المستهدفة:
من أتم التأسيس ويرغب بالجمع بين الحفظ والعمل.
🎯 الأهداف:
دمج الحفظ بالفهم، غرس القيم القرآنية، سلوك عملي.
🧩 الهيكل:
⏱ المدة: 45–60 دقيقة.
📌 المحتوى:
تهيئة، قراءة وتدبر، حفظ، تسميع، واجب تطبيقي.
🧰 أدوات: دفتر تدبر، خرائط، أنشطة تفاعلية.`,
    
    contentEn: `🔸 Definition:
Combines memorization with reflection through understanding meanings and messages before memorizing.
🔹 Target Audience:
Those who completed the foundation level and want to link memorization with action.
🎯 Objectives:
Merge memorization with understanding.
Instill Quranic values and real-life application.
🧩 Structure:
⏱ Duration: 45–60 minutes.
📌 Content:
Spiritual prep, reading, reflection, memorization, review, homework.
🧰 Tools: Reflection journal, diagrams, interactive activities.`
  },

  {
    titleAr: '📜 قسم الإجازات والقراءات في أجيال القرآن 📜',
    titleEn: '📜 Ijazah & Qira’at Section at Ajyal Al-Quran 📜',
    contentAr: `🔸 التعريف:
قسم متخصص لتأهيل الطلاب لنيل الإجازة بالسند المتصل للنبي ﷺ في حفظ أو تلاوة القرآن.
🔹 الفئة المستهدفة:
الحفاظ، طلاب العلم، المعلّمون.
🎯 الأهداف:
تخريج مجازين متقنين، نشر علم الإقراء، رفع كفاءة المعلمين.
🧩 المراحل:
📝 تقديم – 📚 تحضير – 🎙 العرض الكامل – 📜 الإجازة.
📌 ملاحظات:
الإجازات تمنح وفق ضوابط، وتحفظ إلكترونيًا.`,
    
    contentEn: `🔸 Definition:
A program to prepare students to earn a certified Quranic Ijazah (license) with a connected chain to Prophet Muhammad ﷺ.
🔹 Target Audience:
Hafiz, Quran teachers, knowledge seekers.
🎯 Objectives:
Produce accurate certified reciters, spread Iqra’a methodology, raise teaching standards.
🧩 Stages:
📝 Application – 📚 Preparation – 🎙 Full Recital – 📜 Certification.
📌 Notes:
Ijazahs are granted with proper criteria and digitally archived.`
  }
];


  swiper: Swiper | null = null;

  constructor(private cdr: ChangeDetectorRef, private http: HttpClient,public contactService :ContactService) {}

  currentLang: string = 'ar';

 
  ngOnInit(): void {
     const savedLang = localStorage.getItem('lang');
    this.currentLang = savedLang === 'en' ? 'en' : 'ar';
  }

  ngAfterViewInit(): void {
    this.initializeSwiper();
  }

  initializeSwiper(): void {
  setTimeout(() => {
    if (this.swiper) {
      this.swiper.destroy(true, true);
    }

    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 20,
       centeredSlides: false,
      loop: false,

      // autoplay: {
      //   delay: 1000, // ← يمر كل ثانية
      //   disableOnInteraction: false, // ← لا يتوقف إذا لمس المستخدم السلايدر
      //   pauseOnMouseEnter: true      // ← يتوقف عند المرور بالماوس (اختياري)
      // },

      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },

      breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });
  }, 100);
}

  formatContent(text: string): string {
    const lines = text.split('\n');

    const htmlLines = lines.map(line => {
      if (line.startsWith('🔸')) return `<h4 class="section-heading">التعريف:</h4>`;
      if (line.startsWith('🔹')) return `<h4 class="section-heading">الفئة المستهدفة:</h4>`;
      if (line.startsWith('🎯')) return `<h4 class="section-heading">الأهداف:</h4>`;
      if (line.startsWith('🧩')) return `<h4 class="section-heading">تقسيمة الحلقة:</h4>`;
      if (line.startsWith('📌')) return `<h4 class="section-heading">المحتوى:</h4>`;
      if (line.startsWith('⏱')) return `<p class="section-sub"><strong>⏱ المدة:</strong> ${line.replace('⏱ ', '')}</p>`;
      if (line.startsWith('🎧')) return `<h4 class="section-heading">الوسائل المساعدة:</h4>`;
      if (line.startsWith('🎒')) return `<h4 class="section-heading">الوسائل التعليمية:</h4>`;
      if (line.startsWith('🧰')) return `<h4 class="section-heading">أدوات مساعدة:</h4>`;
      if (line.startsWith('📓')) return `<h4 class="section-heading">واجب تطبيقي:</h4>`;
      if (line.startsWith('🗣')) return `<h4 class="section-heading">التسميع والمراجعة:</h4>`;
      if (line.startsWith('🔊')) return `<h4 class="section-heading">الحفظ:</h4>`;
      if (line.startsWith('🧠')) return `<h4 class="section-heading">التدبر:</h4>`;
      if (line.startsWith('📖')) return `<h4 class="section-heading">التهيئة:</h4>`;
      if (line.startsWith('🎖')) return `<h4 class="section-heading">أدوات التقييم:</h4>`;
      if (line.startsWith('🧪')) return `<h4 class="section-heading">الاختبارات:</h4>`;
      if (line.startsWith('🧱')) return `<h4 class="section-heading">الحصون:</h4>`;
      if (line.startsWith('ماسية')) return `<p><strong>الباقات:</strong> ${line}</p>`;

      return `<p>${line}</p>`;
    });

    return htmlLines.join('');
  }
}
