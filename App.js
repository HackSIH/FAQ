import React from 'react';
import './App.css'; // Import your CSS for styling

function FAQPage() {
  const faqs = [
    {
      question: 'What tools are available for curriculum design?',
      answer:
        'The portal provides intuitive tools for curriculum design, including the ability to define course objectives, outline modules, specify learning outcomes, and create assessment methods.',
    },
    {
      question: 'How can I organize my curriculum content efficiently?',
      answer:
        'You can efficiently organize and structure your curriculum content using the tools and templates available on the portal. It allows you to create a well-structured curriculum plan.',
    },
    {
      question: 'What resources are available in the Resource Repository?',
      answer:
        'The Resource Repository contains a wide range of educational resources, such as textbooks, articles, videos, and interactive materials. These resources are categorized by subjects and topics, making it easy for users to search, access, and incorporate them into their curriculum designs.',
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="faq-page">
      <h1>FAQs</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question">{faq.question}</div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQPage;
