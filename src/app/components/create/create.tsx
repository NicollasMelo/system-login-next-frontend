export default function Contact() {
  return (
    <div className='min-h-screen bg-gray-900 text-gray-400'>
      <div className='container mx-auto px-4 py-16 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16'>
        {/* Esquerda: Informações de Contato com Gradiente */}
        <div className='bg-gradient-to-br from-[#1c2230] via-[#27304b] to-[#1c2230] p-8 rounded-lg shadow-lg'>
          <h2 className='text-white text-2xl font-bold mb-6'>
            Entre em Contato
          </h2>
          <p className='mb-6'>
            Crie um usuario para acessar as outras partes do site
          </p>
          <ul className='space-y-4'>
            <li className='flex items-center space-x-2'>
              <span className='text-teal-500'>📍</span>
              <span>105 João gomides de bastro</span>
            </li>
            <li className='flex items-center space-x-2'>
              <span className='text-teal-500'>📞</span>
              <span>+55 (34)9 9880-5678</span>
            </li>
            <li className='flex items-center space-x-2'>
              <span className='text-teal-500'>✉️</span>
              <span>nicollasmelo@gmail.com</span>
            </li>
          </ul>
        </div>

        <div className='bg-gray-800 p-8 rounded-lg shadow-lg'>
          <form className='space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <label
                  className='block mb-2 text-sm text-white'
                  htmlFor='first-name'
                >
                  Nome
                </label>
                <input
                  type='text'
                  id='first-name'
                  className='w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C63FF] hover:bg-gray-600'
                  placeholder='Digite seu primeiro nome'
                />
              </div>
              <div>
                <label
                  className='block mb-2 text-sm text-white'
                  htmlFor='last-name'
                >
                  Sobrenome
                </label>
                <input
                  type='text'
                  id='last-name'
                  className='w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C63FF] hover:bg-gray-600'
                  placeholder='Digite seu sobrenome'
                />
              </div>
            </div>
            <div>
              <label className='block mb-2 text-sm text-white' htmlFor='email'>
                E-mail
              </label>
              <input
                type='email'
                id='email'
                className='w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C63FF] hover:bg-gray-600'
                placeholder='Digite seu e-mail'
              />
            </div>
            <div>
              <label className='block mb-2 text-sm text-white' htmlFor='phone'>
                Número de Telefone
              </label>
              <input
                type='text'
                id='phone'
                className='w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C63FF] hover:bg-gray-600'
                placeholder='Digite seu telefone'
              />
            </div>

            <button
              type='submit'
              className='px-6 py-3 bg-[#6C63FF] text-white rounded-md hover:bg-[#7D70FF] focus:outline-none focus:ring-2 focus:ring-[#6C63FF]'
            >
              Criar contato
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
