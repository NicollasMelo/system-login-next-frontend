/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import bg from '../content/bg.png';

export default function Content() {
  return (
    <div className=''>
      <div className='min-h-screen flex flex-col justify-center'>
        <div className='container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
          <div>
            <h1 className='text-4xl lg:text-5xl font-bold  leading-tight'>
              Criar, visualizar, editar e excluir
            </h1>
            <p className='mt-6  text-lg'>
              Crud, feito em next14, utilizando tailwind, para desenvolver um
              projeto que cria, visualiza, edita e exclui itens do banco.
              <br />O chat gpt foi utilizado apenas para corrigir bugs e criar
              telas para maior praticidade.
            </p>
          </div>
          <div className=''>
            <Image
              src={bg}
              alt='End'
              className='rounded-lg shadow-lg col-span-2'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
