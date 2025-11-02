import FAQAccordion from '../FAQAccordion';

export default function FAQAccordionExample() {
  const faqs = [
    {
      question: 'What services does Afri-Rise BPO offer?',
      answer:
        'We offer comprehensive BPO services including customer support solutions, healthcare recruitment, training & development, ethical staffing solutions, and technology integration.',
    },
    {
      question: 'How can I get involved with Afri-Rise BPO?',
      answer:
        'You can get involved by contacting us through our website, applying for open positions, or partnering with us for your BPO needs.',
    },
  ];

  return (
    <div className="p-8 max-w-2xl">
      <FAQAccordion faqs={faqs} />
    </div>
  );
}
