import Button from "./general/Button";

export default function CtaSection() {
  return (
    <section className="bg-primary relative py-24 px-6 overflow-hidden">
      {/* Faint Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          opacity: 0.1,
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
        }}
      ></div>

      <div className="container max-w-3xl mx-auto flex flex-col items-center relative z-10">
        <h2 
          className="text-white text-center mb-6 tracking-tight"
          data-aos="fade-up"
        >
          See PRIME® in Action
        </h2>

        <p 
          className="text-white text-center max-w-xl leading-relaxed mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Book a 30-minute walkthrough on using AI for onboarding, assessment, monitoring, and compliance.
        </p>

        <div data-aos="fade-up" data-aos-delay="200">
          <Button className="!bg-white !text-primary hover:!bg-surface">
            Schedule Your Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
