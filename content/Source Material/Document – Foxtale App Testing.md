2025-04-22 

21:10

Status: #adult 

Tags: #casestudy #interview

1. Critical User On-Boarding Personalization Issue: While the steps needed to create an account are perfectly fine with a phone number-led sign up, there is little to no personalisation in the onboarding process. This is vital for FoxTale that hugely benefits from their customer having a clear idea or goal of what they want for themselves. 
2. Even in the First Fold of the website/app, there is nothing offering users in the way of personalization. That happens later with the 'Skin Horoscope'.
3. A quick usability test reveals too many clicks to actual personalization which although extensive is hidden behind layers. 
4. Point to note: Is the Skin Horoscope received well by our target demo and customer? Has user research been conducted to see how people respond. 
5. What's the click through rate of the landing banner?
6. Delayed animation on flash screen
7. Why only show trending in search? Can we show products matching the string searched even when it is wrong? Why are typos not course-corrected to find nearest matching string?
8. Search functionality needs improvement
9. SKU Details missing on product cards and while adding to cart
10. No Favourite Product Section

---

** Proposed Functional Requirements**

1. **Personalized Onboarding Flow**
    
    - FR1.1: After phone‑number sign‑up, prompt the user to answer a brief quiz (skin type, concerns, goals).
        
    - FR1.2: Dynamically tailor the first‑fold content (banner, call‑to‑action) based on quiz results.
        
    - FR1.3: Integrate “Skin Horoscope” results immediately post‑quiz, with clear explanations of its relevance.
        
    - FR1.4: Provide a “Skip” option at each personalization step, with an in‑flow prompt to revisit later.
        
2. **Streamlined Personalization Access**
    
    - FR2.1: Surface a “Quick Personalize” widget on the home screen linking directly to skin‑type quiz.
        
    - FR2.2: Reduce click depth:
        
        - No more than 2 taps from any screen to access personalization settings.
            
    - FR2.3: Persist user answers across sessions and pre‑populate quiz fields.
        
3. **Search & Product Discovery**
    
    - FR3.1: Implement “fuzzy search” to auto‑correct typos and suggest nearest matching products.
        
    - FR3.2: Extend beyond “trending” to show “best match” results even on non‑exact queries.
        
    - FR3.3: Display SKU, inventory status, and quick‑add button on each product card.
        
4. **Favorites & Collections**
    
    - FR4.1: Allow users to “★ Favorite” products from any listing or detail page.
        
    - FR4.2: Expose a “My Favorites” section in the main navigation and user profile.
        
    - FR4.3: Sync favorites across devices; enable shareable “Favorites List” links.
        
5. **Analytics & Tracking**
    
    - FR5.1: Log click‑through rates on the landing banner and first‑fold CTAs.
        
    - FR5.2: Record drop‑off points in the personalization flow (step, timestamp).
        
    - FR5.3: Capture search query success vs. zero‑results rate.
        
6. **UI/UX Enhancements**
    
    - FR6.1: Reduce splash‑screen animation delay to ≤ 500 ms.
        
    - FR6.2: Ensure all animations block only non‑essential UI, preloading critical assets in parallel.
        
7. **User Research Feedback Loop**
    
    - FR7.1: Integrate an in‑app microsurvey after “Skin Horoscope” delivery to gauge reception.
        
    - FR7.2: Trigger optional feedback prompt if users skip or abandon the horoscope step.
        

---

**Proposed Non‑Functional Requirements**

1. **Performance & Responsiveness**
    
    - NFR1.1: Page loads (First Contentful Paint) under 1 s on 3G.
        
    - NFR1.2: Personalization quiz questions render instantly with ≤ 200 ms API latency.
        
2. **Scalability & Reliability**
    
    - NFR2.1: Support 10× concurrent onboarding users during peak marketing campaigns.
        
    - NFR2.2: 99.9 % uptime for personalization and search services.
        
3. **Usability & Accessibility**
    
    - NFR3.1: WCAG 2.1 AA compliance for all new flows (contrast, labels, keyboard nav).
        
    - NFR3.2: Onboarding abandonment rate ≤ 20 %; A/B test variants weekly.
        
4. **Security & Privacy**
    
    - NFR4.1: Encrypt PII at rest and in transit (AES‑256, TLS 1.2+).
        
    - NFR4.2: GDPR‑ and CCPA‑compliant consent capture for data used in personalization.
        
5. **Maintainability**
    
    - NFR5.1: All personalization logic delivered via a headless feature‑flag service for runtime toggles.
        
    - NFR5.2: Modular search service with clear AP2025-04-22 

22:23

Status:

Tags:

Document – Foxtale App Testing

# ReferencesI contracts, covered by ≥ 80 % unit tests.
        
6. **Analytics & Monitoring**
    
    - NFR6.1: Real‑time dashboards for CTR, search success, onboarding drop‑offs.
        
    - NFR6.2: Alerting on anomalous spikes (e.g., 50 % jump in zero‑results searches).
        

---

**Extended Functionalities**

1. **AI‑Driven Product Recommendations**
    
    - Leverage machine learning to suggest routine products based on skin‑type quiz + purchase history.
        
2. **Augmented Reality (AR) Skin Analysis**
    
    - Offer live camera‑based detection of texture, redness, or hydration, feeding back into personalization.
        
3. **Subscription & Auto‑Replenishment**
    
    - Enable users to subscribe to their curated routine, with dynamic refill reminders based on usage patterns.
        
4. **Community & Social Proof**
    
    - Embed user‑generated reviews, before/after photos, and “skin journey” stories tied to products.
        
5. **In‑App Chatbot & Live Support**
    
    - 24/7 AI chatbot for quick skincare advice; handover to live experts for deeper consultation.
        
6. **Skin Progress Tracker**
    
    - Calendar view with photo uploads, milestone badges, and periodic check‑ins to update goals.
        
7. **Gamification & Rewards**
    
    - Points for completing quizzes, writing reviews, and hitting skincare milestones redeemable for sample kits.
        
8. **Multi‑Language & Regional Adaptation**
    
    - Localize content, product availability, and horoscope interpretations for key markets.
        
9. **Integration with Wearables & Health Apps**
    
    - Import sleep, hydration, and UV‑exposure data to refine personalization algorithms.
        
10. **API for Third‑Party Partnerships**
    
- Expose a secure API for trusted partners (e.g., dermatologists, wellness apps) to contribute personalized insights.

# References