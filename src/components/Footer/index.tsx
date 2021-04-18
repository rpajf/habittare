import Image from 'next/image'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-white relative pt-1 mb-2 border-b-2 border-blue-700">
      <div className="container mx-auto px-6">
        <div className="sm:flex sm:mt-8">
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col">
              <Image
                src="/assets/logo.png"
                width={184}
                height={54}
                alt="Habittare Imobiliaria"
              />
              <address className="my-2">
                <span className="text-gray-700 text-sm">
                  Habittare Imobiliaria
                  <br />
                  Av. dos Sambaquis, Calhau
                  <br />
                  São Luís - MA, 65071-390
                </span>
              </address>
              <span className="my-2">
                <a
                  href="#"
                  className="text-blue-700  text-md hover:text-blue-500"
                >
                  link 1
                </a>
              </span>
              <span className="my-2">
                <a
                  href="#"
                  className="text-blue-700  text-md hover:text-blue-500"
                >
                  link 1
                </a>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                Footer header 2
              </span>
              <span className="my-2">
                <a
                  href="#"
                  className="text-blue-700 text-md hover:text-blue-500"
                >
                  link 1
                </a>
              </span>
              <span className="my-2">
                <a
                  href="#"
                  className="text-blue-700  text-md hover:text-blue-500"
                >
                  link 1
                </a>
              </span>
              <span className="my-2">
                <a
                  href="#"
                  className="text-blue-700 text-md hover:text-blue-500"
                >
                  link 1
                </a>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                Footer header 3
              </span>
              <span className="my-2">
                <a
                  href="#"
                  className="text-blue-700  text-md hover:text-blue-500"
                >
                  link 1
                </a>
              </span>
              <span className="my-2">
                <a
                  href="#"
                  className="text-blue-700  text-md hover:text-blue-500"
                >
                  link 1
                </a>
              </span>
              <span className="my-2">
                <a
                  href="#"
                  className="text-blue-700  text-md hover:text-blue-500"
                >
                  link 1
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-blue-700 font-bold mb-2">
              Desenvolvido por Probits
            </p>
          </div>
        </div>
      </div> */}
    </footer>
  )
}

export default Footer