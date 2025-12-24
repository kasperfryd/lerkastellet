import { useState, FormEvent } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const url = import.meta.env.VITE_HEROTOFU_URL || "";
    // In a real application, this would send data to a backend

    const body = new URLSearchParams();
    body.append("name", formData.name);
    body.append("email", formData.email);
    body.append("message", formData.message);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log("Form submitted:", formData);

    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id='contact' className='py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white'>
      <div className='max-w-3xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl text-neutral-900 mb-4'>Kontakt Mig</h2>
          <p className='text-neutral-600 max-w-xl mx-auto'>
            Er du interesseret i et skræddersyet stykke eller har du spørgsmål? Vi vil gerne høre fra dig.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} acceptCharset='UTF-8' className='space-y-6'>
          <div>
            <label htmlFor='name' className='block mb-2 text-neutral-900'>
              Navn
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              className='w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-neutral-400 focus:outline-none transition-colors'
              placeholder='Dit navn'
            />
          </div>

          <div>
            <label htmlFor='email' className='block mb-2 text-neutral-900'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              className='w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-neutral-400 focus:outline-none transition-colors'
              placeholder='din@email.com'
            />
          </div>

          <div>
            <label htmlFor='message' className='block mb-2 text-neutral-900'>
              Besked
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className='w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-neutral-400 focus:outline-none transition-colors resize-none'
              placeholder='Fortæl os om din forespørgsel...'
            />
          </div>

          <button
            type='submit'
            disabled={isSubmitted}
            className='w-full sm:w-auto px-8 py-3 bg-neutral-900 text-white hover:bg-neutral-700 disabled:bg-neutral-400 transition-colors'
          >
            {isSubmitted ? "Beskeden er sendt!" : "Send Besked"}
          </button>
          <div
            style={{ textIndent: "-99999px", whiteSpace: "nowrap", overflow: "hidden", position: "absolute" }}
            aria-hidden='true'
          >
            <input type='text' name='_gotcha' tabIndex={-1} autoComplete='off' />
          </div>
        </form>

        {/* Additional Contact Info */}
        {/*      <div className='mt-12 pt-12 border-t border-neutral-200 grid sm:grid-cols-1 gap-8 text-center sm:text-left'>
          <div>
            <h4 className='mb-2 text-neutral-900'>Besøg Vores Værksted</h4>
            <p className='text-neutral-600'>
              123 Pottery Lane
              <br />
              Arts District
              <br />
              City, State 12345
            </p>
          </div>
          <div>
            <h4 className='mb-2 text-neutral-900'>Kontaktoplysninger</h4>
            <p className='text-neutral-600'>
              Email: keramikmail@gmail.com
              <br />
              Telefon: (555) 123-4567
              <br />
              Man-Lør, 10-18
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
