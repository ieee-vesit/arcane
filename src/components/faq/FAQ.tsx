import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { faqData, type FAQItem } from "./faqData";
import { Linkedin, Instagram, ArrowRight, Sparkles, Menu, X } from 'lucide-react';


export function FAQ(): JSX.Element {
  return (
    <section id="faq" className="py-10 px-8 lg:px-20 bg-gradient-to-b from-purple-900/20 to-blue-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full mb-6">
            <span className="text-cyan-400 text-sm tracking-wider">
              FAQs
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400">
            Find your answers here
          </p>
        </div>

        <div className="space-y-6">
          <Accordion type="single" collapsible className="w-full space-y-6">
            {faqData.map((item: FAQItem, index: number) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all group"
              >
                <AccordionTrigger className="text-white hover:text-blue-300 text-left py-0">
                  <span className="text-xl font-semibold">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pt-6 pb-0">
                  <div className="space-y-3">
                    {item.answer.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-base leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                    {item.contact && (
                      <div className="mt-4 p-3 bg-blue-600/20 rounded border border-blue-500/30">
                        <p className="text-blue-200 text-sm">
                          <strong>Contact:</strong> {item.contact}
                        </p>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-8 flex flex-col items-center gap-4">
          <p className="text-white">
            Still have questions? Checkout out our <a className="text-pink-400 hover:text-purple-400 uppercase" href="https://www.instagram.com/ieee_vesit/" target="_blank">Instagram</a>.
          </p>
          
        </div>
      </div>
    </section>
  );
}
