export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Dental" | "Skin Care";
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  image: string;
  content: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "10-signs-you-need-to-visit-dentist",
    image: "/images/blog/10-signs-you-need-to-visit-dentist.webp",
    title: "10 Signs You Need to Visit a Dentist Today",
    excerpt:
      "Tooth sensitivity, bleeding gums, persistent bad breath — your mouth sends warning signals. Here's how to read them before small issues become expensive problems.",
    category: "Dental",
    author: "Dr. Ch. Pritam Pratik Praharaj",
    date: "June 10, 2024",
    readTime: "5 min read",
    featured: true,
    tags: ["dental health", "prevention", "oral care"],
    content: `
## Why You Shouldn't Ignore Your Teeth

Your teeth and gums are in constant communication with you — most people just don't speak the language. Dental problems rarely appear overnight. They build gradually, with warning signs that are easy to dismiss until the situation becomes painful or expensive.

Here are 10 signs your mouth is telling you it's time to book an appointment.

## 1. Tooth Sensitivity to Hot or Cold

If sipping hot tea or eating ice cream triggers a sharp, lingering pain, enamel erosion or an exposed root may be to blame. This is often an early sign of a cavity or receding gums.

## 2. Bleeding Gums

Occasional bleeding after aggressive brushing is common, but regular bleeding — especially without provocation — is a classic warning sign of gingivitis. Left untreated, this progresses to periodontitis, which can lead to tooth loss.

## 3. Persistent Bad Breath

Chronic bad breath (halitosis) that doesn't respond to brushing and mouthwash can indicate gum disease, a cavity, or an underlying systemic condition. It's not something to mask — it needs to be diagnosed.

## 4. Toothache or Jaw Pain

Any pain that lasts more than a day warrants immediate attention. Dental pain rarely resolves on its own and often signals an infection, abscess, or cracked tooth that requires prompt treatment.

## 5. Visible Cavities or Dark Spots

Dark spots on your teeth are usually the visible stage of tooth decay. At this point, a simple filling can resolve the issue. Wait longer and you may need a root canal or extraction.

## 6. Swollen or Receding Gums

Puffy, swollen, or receding gums are signs of periodontal disease. Recession exposes the tooth root, increasing sensitivity and the risk of decay in areas that are hard to clean.

## 7. Loose or Shifting Teeth

Adult teeth should be firmly anchored. Any movement — even subtle — suggests bone loss, advanced gum disease, or injury. This requires urgent evaluation.

## 8. Mouth Sores That Won't Heal

Canker sores typically heal within two weeks. Any sore, patch, or lump that persists beyond that window should be examined for signs of oral cancer — especially if you smoke or consume alcohol.

## 9. Dry Mouth

Chronic dry mouth reduces saliva, which is your mouth's natural defence against bacteria. It significantly increases cavity risk and can be caused by medication, dehydration, or systemic conditions.

## 10. You Haven't Been in Over a Year

Even if you feel no symptoms, professional cleaning removes tartar that brushing cannot — and X-rays detect problems invisible to the naked eye. Prevention is always cheaper than cure.

---

*If you recognise any of these signs, don't wait. Book an appointment at Choudhury Dental & Skin Care Clinic — same-day slots are available for urgent cases.*
    `,
  },
  {
    id: "2",
    slug: "how-to-choose-braces-for-your-child",
    image: "/images/blog/how-to-choose-braces-for-your-child.webp",
    title: "How to Choose the Right Braces for Your Child",
    excerpt:
      "Metal, ceramic, or clear aligners? The right choice depends on your child's age, lifestyle, and the complexity of their case. A complete parent's guide.",
    category: "Dental",
    author: "Dr. Ch. Pritam Pratik Praharaj",
    date: "May 28, 2024",
    readTime: "7 min read",
    featured: false,
    tags: ["orthodontics", "braces", "children", "alignment"],
    content: `
## Orthodontics for Children: What Parents Need to Know

Choosing orthodontic treatment for your child is one of the most common — and confusing — decisions parents face. With so many options available, the right choice depends on several factors including your child's age, the severity of their case, their lifestyle, and yes, your budget.

## When Should Orthodontic Treatment Begin?

The Indian Orthodontic Society recommends a first orthodontic evaluation by age 7. At this age, the permanent teeth are beginning to come in, and an orthodontist can identify problems with jaw growth and emerging teeth while some baby teeth are still present.

Early intervention (Phase 1) can guide jaw growth, make room for crowded teeth, and reduce the duration and complexity of treatment later.

## Comparing Your Options

### Metal Braces
The most tried-and-tested option. Metal braces are the most effective for complex cases, the most affordable, and require the least discipline from the patient (the wire does the work). The main downside is aesthetics — they are the most visible option.

**Best for:** Complex misalignment, patients who won't comply with removable aligners, budget-conscious families.

### Ceramic Braces
Functionally identical to metal braces but with tooth-coloured brackets that blend with the teeth. Slightly more expensive and require more careful maintenance to prevent staining.

**Best for:** Self-conscious teens who want effective treatment with less visibility.

### Clear Aligners
Nearly invisible removable trays that are changed every 1–2 weeks. They require exceptional discipline — they must be worn 20–22 hours per day and removed for eating and cleaning. Not suitable for very young children.

**Best for:** Teens aged 14+ with mild-to-moderate alignment issues who are mature enough to comply with the wear schedule.

### Lingual Braces
Brackets bonded to the back (tongue side) of teeth, making them completely invisible from the front. They are the most expensive option and can initially affect speech.

**Best for:** Older teens and adults with professional commitments who want truly hidden treatment.

## The Most Important Factor: Compliance

No orthodontic appliance works if it isn't worn. For children under 12, fixed appliances (metal or ceramic) are generally recommended because compliance isn't a variable. For teenagers, we assess maturity before recommending removable aligners.

---

*Book a complimentary orthodontic consultation at our clinic to determine the best path for your child's smile.*
    `,
  },
  {
    id: "3",
    slug: "prp-vs-minoxidil-hair-loss",
    image: "/images/blog/prp-vs-minoxidil-hair-loss.webp",
    title: "PRP vs Minoxidil: Which Works Better for Hair Loss?",
    excerpt:
      "Both are popular hair loss treatments, but they work differently and suit different patients. Our dermatologist compares efficacy, cost, and long-term results.",
    category: "Skin Care",
    author: "Dr. Ch. Pritam Pratik Praharaj Dermatology Team",
    date: "May 15, 2024",
    readTime: "6 min read",
    featured: false,
    tags: ["hair loss", "PRP", "minoxidil", "dermatology"],
    content: `
## The Hair Loss Treatment Dilemma

Two of the most commonly recommended treatments for androgenetic alopecia (pattern hair loss) are PRP therapy and Minoxidil. Patients frequently ask which is better — but the answer isn't straightforward, because they work through different mechanisms and suit different stages of hair loss.

## How Minoxidil Works

Minoxidil is a topical vasodilator applied directly to the scalp. It was originally developed as a blood pressure medication and was found to stimulate hair growth as a side effect. It works by prolonging the growth (anagen) phase of the hair cycle and increasing blood flow to follicles.

It requires consistent daily application and results plateau once you stop using it. This makes it a lifelong maintenance treatment rather than a cure.

## How PRP Works

PRP (Platelet-Rich Plasma) therapy involves drawing a small sample of your blood, centrifuging it to concentrate the growth factors, and injecting this concentrated plasma into the scalp. The growth factors — including PDGF, VEGF, and EGF — stimulate dormant follicles and encourage the anagen phase.

Unlike Minoxidil, PRP is not a daily commitment. A typical protocol is 3–6 monthly sessions, followed by maintenance every 6–12 months.

## Comparing Results

Both treatments show similar rates of hair density improvement in clinical studies. The key differences:

| Factor | Minoxidil | PRP |
|--------|-----------|-----|
| Administration | Daily (self-applied) | Monthly (clinic-based) |
| Results visible | 3–6 months | 3–6 months |
| Maintenance | Daily forever | Every 6–12 months |
| Side effects | Scalp irritation, initial shedding | Mild soreness at injection sites |
| Best for | Early-stage loss | Moderate loss, poor Minoxidil response |

## Our Recommendation

We often recommend combining both approaches for patients with moderate hair loss. Minoxidil maintains existing hair while PRP stimulates new growth. For patients who cannot comply with daily application or have seen plateau results with Minoxidil, PRP alone is an excellent alternative.

---

*Schedule a scalp analysis at our clinic to determine the most effective protocol for your specific hair loss pattern.*
    `,
  },
  {
    id: "4",
    slug: "truth-about-teeth-whitening",
    image: "/images/blog/truth-about-teeth-whitening.webp",
    title: "The Truth About Teeth Whitening: What Actually Works",
    excerpt:
      "Charcoal toothpaste, whitening strips, LED kits, or professional bleaching — we cut through the marketing to tell you what the evidence actually says.",
    category: "Dental",
    author: "Dr. Ch. Pritam Pratik Praharaj",
    date: "April 30, 2024",
    readTime: "5 min read",
    featured: false,
    tags: ["teeth whitening", "cosmetic dentistry", "oral health"],
    content: `
## What Actually Whitens Teeth?

The teeth whitening market is worth billions globally, filled with products making dramatic claims. But from a clinical standpoint, only a small number of approaches have robust evidence behind them.

## The Science

Tooth discolouration falls into two categories:

**Extrinsic staining** — surface stains from coffee, tea, red wine, and tobacco. These respond well to mechanical removal (cleaning and polishing) and topical bleaching agents.

**Intrinsic discolouration** — staining within the tooth structure itself, from tetracycline antibiotics, fluorosis, or ageing. This is harder to treat and may require veneers for dramatic improvement.

## What Doesn't Work

**Charcoal toothpaste:** No clinical evidence for whitening. The abrasive particles can damage enamel over time, making teeth more susceptible to staining — the opposite of the intended effect.

**Coconut oil pulling:** A wellness trend, not a whitening treatment. It has some evidence for reducing bacteria but zero evidence for changing tooth colour.

**Whitening mouthwashes:** Contain hydrogen peroxide at concentrations too low to produce meaningful colour change. The contact time with teeth is also far too short.

## What Works

**Professional in-clinic whitening:** Uses hydrogen peroxide at 25–40% concentration, applied under dental supervision with gum protection. This produces the most dramatic, safest results — typically 6–10 shades lighter in a single session.

**Take-home trays (dentist-prescribed):** Custom trays with professional-grade gel used over 10–14 nights. Produces excellent results with lower risk than over-the-counter alternatives.

**Over-the-counter strips:** Contain lower concentrations (3–10% hydrogen peroxide). Can produce mild improvement but results are uneven, and cheap strips increase sensitivity risk.

## The Sensitivity Question

Temporary sensitivity during or after whitening is the most common side effect. Professional whitening manages this with desensitising protocols. If you experience prolonged sensitivity, stop treatment and consult a dentist.

---

*Book a professional whitening consultation to find out which approach is right for your teeth and goals.*
    `,
  },
  {
    id: "5",
    slug: "5-daily-habits-ruining-your-skin",
    image: "/images/blog/5-daily-habits-ruining-your-skin.webp",
    title: "5 Daily Habits That Are Quietly Ruining Your Skin",
    excerpt:
      "Sunscreen skipping, face-touching, hot showers — everyday behaviours are accelerating skin ageing and causing chronic breakouts. Here's what to change.",
    category: "Skin Care",
    author: "Dr. Ch. Pritam Pratik Praharaj Dermatology Team",
    date: "April 15, 2024",
    readTime: "4 min read",
    featured: false,
    tags: ["skincare", "habits", "skin health", "anti-ageing"],
    content: `
## The Invisible Skin Damage You're Causing Every Day

Expensive serums and regular facials only take you so far if daily habits are continuously working against your skin. These are the five most common behaviours our dermatologists see undoing patients' progress.

## 1. Skipping Sunscreen Indoors

UV rays penetrate glass. If you work near a window or spend time in a car, you are accumulating UV damage even on cloudy days. UVA rays — the primary cause of photoageing — are present year-round and pass through most glass.

The fix: SPF 30+ broad-spectrum sunscreen every morning, indoors or outdoors, rain or shine.

## 2. Touching Your Face

The average person touches their face 20–25 times per hour. Each touch transfers bacteria, oil, and environmental pollutants directly to your skin. For acne-prone individuals, this habit alone can sustain chronic breakouts despite other treatments.

The fix: Become aware of the habit. Keep your phone screen clean — it's one of the most bacteria-laden surfaces touching your face daily.

## 3. Hot Showers

Prolonged exposure to hot water strips the skin's natural lipid barrier, leading to transepidermal water loss. For patients with eczema, psoriasis, or dry skin conditions, hot showers can trigger significant flare-ups.

The fix: Lukewarm water, shorter showers, and apply moisturiser within 3 minutes of stepping out while skin is still slightly damp.

## 4. Sleeping on Cotton Pillowcases

Standard cotton pillowcases create friction, pull at the skin during movement, and absorb the moisturisers you carefully applied before bed. Over years, this contributes to sleep lines that can become permanent creases.

The fix: Switch to a silk or satin pillowcase. It reduces friction, retains your skincare products, and is gentler on hair too.

## 5. Inconsistent Sleep

During deep sleep, the body releases growth hormone which repairs skin cells. Poor or fragmented sleep elevates cortisol, which degrades collagen, increases inflammation, and impairs the skin barrier. Dark circles and a dull complexion are the visible signs.

The fix: 7–9 hours of consistent sleep is genuinely one of the most powerful anti-ageing tools available.

---

*Visit our skin care clinic for a personalised skin assessment and a treatment plan that works with — not against — your daily routine.*
    `,
  },
  {
    id: "6",
    slug: "dental-implants-vs-bridges",
    image: "/images/blog/dental-implants-vs-bridges.webp",
    title: "Dental Implants vs Bridges: Which Is Right for You?",
    excerpt:
      "Both replace missing teeth, but they differ in cost, longevity, maintenance, and impact on surrounding teeth. Here's how to decide with your dentist.",
    category: "Dental",
    author: "Dr. Ch. Pritam Pratik Praharaj",
    date: "March 28, 2024",
    readTime: "6 min read",
    featured: false,
    tags: ["dental implants", "bridges", "tooth replacement", "restorative dentistry"],
    content: `
## Replacing a Missing Tooth: The Two Main Options

When a tooth is lost due to decay, injury, or extraction, two treatments dominate: dental implants and fixed bridges. Both are excellent options — the best choice depends on your bone health, budget, timeline, and the condition of your adjacent teeth.

## Dental Implants

An implant is a titanium screw surgically placed into the jawbone, topped with a ceramic crown. It replicates the entire tooth structure — root and crown — making it the most anatomically similar replacement available.

**Advantages:**
- Preserves jawbone by stimulating it through chewing
- Does not require alteration of adjacent teeth
- Can last a lifetime with proper care
- Looks, feels, and functions like a natural tooth
- Easier to clean than bridges

**Disadvantages:**
- Higher upfront cost
- Requires adequate bone density
- Healing period: 3–6 months before crown placement
- Not suitable for patients with uncontrolled diabetes or certain medical conditions

## Dental Bridges

A bridge uses the two adjacent teeth (abutment teeth) as anchors, grinding them down to support crowns that hold a false tooth (pontic) in between. No surgery is required.

**Advantages:**
- No surgery required
- Completed in 2–3 visits
- Lower cost than implants
- Suitable for patients without sufficient bone for implants

**Disadvantages:**
- Requires permanently altering healthy adjacent teeth
- Does not prevent jawbone loss at the extraction site
- More difficult to clean underneath
- May need replacement after 10–15 years

## The Long-Term Perspective

While implants are more expensive initially, they are often more cost-effective over a lifetime because bridges typically need replacement, whereas a well-maintained implant can last indefinitely. We also consider the value of preserving bone and not compromising healthy teeth.

## Our Recommendation Process

We assess bone volume with a CBCT scan, review your medical history, evaluate the condition of adjacent teeth, and discuss your timeline and budget before recommending a treatment path. There is no single right answer — the best choice is the one made with full information.

---

*Book a consultation to discuss your tooth replacement options with our implant specialist.*
    `,
  },
];

export const getFeaturedPost = () => blogPosts.find((p) => p.featured);
export const getPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);
export const getRelatedPosts = (currentSlug: string, category: string) =>
  blogPosts
    .filter((p) => p.slug !== currentSlug && p.category === category)
    .slice(0, 3);
