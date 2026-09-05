'use client';

import { useState } from 'react';
import styles from './planes.module.css';

const questions = [
  ['Why is there a $5,000 reservation?', "Thirty seats, and we want all thirty filled by people genuinely considering an investment. It is a qualification step, not a payment. Fully refundable within 14 days — including if you change your mind, and including if you don't attend. If you do invest, it goes toward your investment."],
  ['Refundable how, exactly?', 'Held on a Nuanu account under a signed agreement. Returned within 14 days of your request, in the currency you paid, no reason required.'],
  ['Can I attend without it?', 'No. Thirty seats, and this is how we allocate them.'],
  ['Why not just talk to your sales office?', "You can, any time. This is different. On 31 October we present Nuanu's pipeline, the operating numbers behind it, and terms that are not offered through the sales channel."],
  ['Can foreigners own property in Indonesia?', 'Yes — through leasehold, Hak Pakai, or HGB held via a PT PMA. Each carries different terms. Your advisor will walk you through which applies to which asset, and we recommend independent counsel. The VIP package includes a private session with a property lawyer.'],
  ['Is this the first Nuanu Investor Day?', 'No — the second. The first was in February 2025. This year we present a new phase of Nuanu and the opportunities that come with it.'],
  ["I'm not in Bali. Can I take part online?", 'Not on the day — 31 October is in the room only. We run a separate Zoom session where we present the same opportunities. It works the same way: an interview first, then the $5,000 reservation, fully refundable.'],
  ['Where do I stay?', "Nuanu has accommodation on site, and there are good options nearby. We'll share the list with confirmed guests."],
];

export function PlaneFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={styles.faqAccordion}>
      {questions.map(([question, answer], index) => {
        const isOpen = open === index;
        const panelId = `faq-panel-${index}`;
        return (
          <div className={styles.faqItem} key={question}>
            <button type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpen(isOpen ? null : index)}>
              <span>{question}</span><i aria-hidden="true" />
            </button>
            {isOpen && <p id={panelId}>{answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
