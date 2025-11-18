"use client";

import { useState, useEffect } from "react";
import { Phone, Stethoscope, Apple, CheckCircle, Clock, MapPin, Award, User, Calendar, MessageSquare, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"urologia" | "nutrologia" | "feedbacks">("urologia");
  const [showForm, setShowForm] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    telefone: "",
    cpf: "",
    idade: "",
    cidade: ""
  });

  // Detectar scroll para aplicar transparência
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappNumber = "5518998201313";
  const whatsappMessage = encodeURIComponent("Olá Dr. Alex Saurin, gostaria de agendar uma consulta.");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá Dr. Alex Saurin, gostaria de fazer um pré-agendamento:\\n\\n*Nome:* ${formData.nomeCompleto}\\n*Telefone:* ${formData.telefone}\\n*CPF:* ${formData.cpf}\\n*Idade:* ${formData.idade}\\n*Cidade:* ${formData.cidade}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const urologiaServices = [
    {
      title: "Bioplastia Peniana",
      description: "Procedimento estético minimamente invasivo para aumento peniano utilizando preenchimento com ácido hialurônico, proporcionando resultados naturais e seguros.",
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/d7339ca8-9388-4c87-8916-959957c062c7.jpg"
    },
    {
      title: "Litíase Renal",
      description: "Diagnóstico e tratamento de cálculos renais (pedras nos rins) com técnicas modernas, incluindo litotripsia e procedimentos minimamente invasivos para remoção das pedras.",
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/a35faeff-3906-492d-a402-0a2116f39103.png"
    },
    {
      title: "Infertilidade",
      description: "Investigação e tratamento da infertilidade masculina, incluindo análise seminal, avaliação hormonal e orientação para técnicas de reprodução assistida.",
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/5f69e829-0b9b-4bba-be0c-4862a48e247f.jpg"
    },
    {
      title: "Disfunções Sexuais",
      description: "Tratamento especializado para disfunção erétil e ejaculação precoce, com abordagens personalizadas incluindo medicamentos, terapias e orientações para melhorar a qualidade de vida sexual.",
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/6f2a49c1-be09-443a-b56c-38cacacf948f.png"
    },
    {
      title: "Problemas Urinários",
      description: "Diagnóstico e tratamento de problemas urinários masculinos e femininos, incluindo incontinência, infecções recorrentes, urgência miccional e dificuldade para urinar.",
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/0ce8b342-1588-4158-834f-d0418ec94c03.png"
    },
    {
      title: "Reposição Hormonal",
      description: "Avaliação e reposição hormonal masculina (testosterona) para tratamento de andropausa, fadiga, perda de massa muscular e diminuição da libido.",
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/031bad7e-9d5f-4425-a556-414639379082.jpg"
    }
  ];

  const nutrologiaServices = [
    {
      title: "Emagrecimento",
      description: "Programa personalizado de emagrecimento saudável e sustentável, com avaliação metabólica completa, prescrição de dieta individualizada e acompanhamento contínuo para perda de peso efetiva.",
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/ca3c9bf7-d830-4b0c-a9e5-720cde18f1ba.jpg"
    },
    {
      title: "Hipertrofia (Ganho de Massa Muscular)",
      description: "Protocolo especializado para ganho de massa muscular com planejamento nutricional estratégico, suplementação adequada e orientações para maximizar os resultados do treino.",
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/c8d2113a-1e89-4002-9d97-5dd7f0b7c934.jpg"
    },
    {
      title: "Performance no Esporte",
      description: "Otimização da performance esportiva através de nutrição especializada, suplementação direcionada e estratégias nutricionais para melhorar rendimento, recuperação e resistência.",
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/0f7c78da-a3fe-481c-ae2d-b1c548b57684.jpg"
    },
    {
      title: "Reposição de Vitaminas e Minerais",
      description: "Avaliação e correção de deficiências nutricionais através de exames laboratoriais específicos, com prescrição de suplementação personalizada para restaurar níveis ideais de vitaminas e minerais.",
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/2b689a70-4f04-4489-92bc-0f6ae77c03f4.jpg"
    }
  ];

  const feedbackVideos = [
    {
      id: "zcg7N8u56mo",
      title: "Depoimento 1"
    },
    {
      id: "pBNz_T-hPHM",
      title: "Depoimento 2"
    },
    {
      id: "2fVycRXJCAQ",
      title: "Depoimento 3"
    },
    {
      id: "MTagFRkWEJI",
      title: "Depoimento 4"
    },
    {
      id: "6Hr7aJ67KK4",
      title: "Depoimento 5"
    },
    {
      id: "c1074fU0C5c",
      title: "Depoimento 6"
    }
  ];

  return (
    <div className="min-h-screen bg-[#193942]">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/80 backdrop-blur-md shadow-lg" 
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col items-center gap-3">
            {/* Title and Info */}
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                Dr. Alex Saurin
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mt-1">
                Urologista & Nutrólogo
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span>CRM 101.819</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span>RQE 23932</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="flex gap-2 sm:gap-4 border-b border-gray-200 overflow-x-auto">
          <button
            onClick={() => setActiveTab("urologia")}
            className={`flex items-center gap-2 px-4 sm:px-6 py-4 font-semibold text-base sm:text-lg transition-all duration-300 border-b-4 whitespace-nowrap ${
              activeTab === "urologia"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-white hover:text-gray-200"
            }`}
          >
            <Stethoscope className="w-5 h-5" />
            Urologia
          </button>
          <button
            onClick={() => setActiveTab("nutrologia")}
            className={`flex items-center gap-2 px-4 sm:px-6 py-4 font-semibold text-base sm:text-lg transition-all duration-300 border-b-4 whitespace-nowrap ${
              activeTab === "nutrologia"
                ? "border-green-600 text-green-600"
                : "border-transparent text-white hover:text-gray-200"
            }`}
          >
            <Apple className="w-5 h-5" />
            Nutrologia
          </button>
          <button
            onClick={() => setActiveTab("feedbacks")}
            className={`flex items-center gap-2 px-4 sm:px-6 py-4 font-semibold text-base sm:text-lg transition-all duration-300 border-b-4 whitespace-nowrap ${
              activeTab === "feedbacks"
                ? "border-purple-600 text-purple-600"
                : "border-transparent text-white hover:text-gray-200"
            }`}
          >
            <MessageSquare className="w-5 h-5" />
            Feedbacks
          </button>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === "urologia" ? (
          <div className="space-y-8 animate-fadeIn">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 sm:p-12 text-white shadow-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Urologia</h2>
              <p className="text-lg sm:text-xl text-blue-50 leading-relaxed">
                Especialista em saúde urológica masculina e feminina, com foco em diagnóstico, 
                tratamento e prevenção de doenças do trato urinário e sistema reprodutor.
              </p>
            </div>

            {/* About Dr. Alex Section */}
            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/288d1b9f-348f-4ae7-91f9-656805a9170f.jpg"
                      alt="Dr. Alex Saurin"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    Sobre o Dr. Alex Saurin
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Com mais de 20 anos de experiência na área médica, o Dr. Alex Saurin é especialista em Urologia e Nutrologia, dedicando sua carreira ao cuidado integral da saúde de seus pacientes.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Sua vasta experiência permite uma abordagem completa e personalizada, combinando o tratamento de condições urológicas com orientação nutricional especializada para promover qualidade de vida e bem-estar.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Comprometido com a excelência médica e atualização constante, o Dr. Alex utiliza as mais modernas técnicas e tratamentos disponíveis, sempre priorizando o conforto e a segurança de seus pacientes.
                  </p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="grid md:grid-cols-2 gap-6">
              {urologiaServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  {/* Image */}
                  {service.image && (
                    <div className="relative w-full h-48">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed ml-9">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Quando procurar um urologista?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A consulta urológica é indicada para homens de qualquer idade, especialmente em casos de sintomas urinários, dor pélvica, cólica renal, infecções urinárias, doenças sexualmente transmissíveis, disfunções sexuais (como queda de libido, dificuldade de ereção ou ejaculação), além de avaliações preventivas gerais.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Exames preventivos específicos da próstata são recomendados a partir dos 45 a 50 anos, especialmente para quem possui histórico familiar.
              </p>
            </div>
          </div>
        ) : activeTab === "nutrologia" ? (
          <div className="space-y-8 animate-fadeIn">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 sm:p-12 text-white shadow-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nutrologia</h2>
              <p className="text-lg sm:text-xl text-green-50 leading-relaxed">
                Especialista em nutrição médica, metabolismo e composição corporal, 
                com abordagem científica para otimização da saúde através da alimentação e suplementação.
              </p>
            </div>

            {/* About Dr. Alex Section */}
            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/288d1b9f-348f-4ae7-91f9-656805a9170f.jpg"
                      alt="Dr. Alex Saurin"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    Sobre o Dr. Alex Saurin
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Com mais de 20 anos de experiência na área médica, o Dr. Alex Saurin é especialista em Urologia e Nutrologia, dedicando sua carreira ao cuidado integral da saúde de seus pacientes.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Sua vasta experiência permite uma abordagem completa e personalizada, combinando o tratamento de condições urológicas com orientação nutricional especializada para promover qualidade de vida e bem-estar.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Comprometido com a excelência médica e atualização constante, o Dr. Alex utiliza as mais modernas técnicas e tratamentos disponíveis, sempre priorizando o conforto e a segurança de seus pacientes.
                  </p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="grid md:grid-cols-2 gap-6">
              {nutrologiaServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  {/* Image */}
                  <div className="relative w-full h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed ml-9">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Info Box */}
            <div className="bg-green-50 border-l-4 border-green-600 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Diferença entre Nutrólogo e Nutricionista
              </h3>
              <p className="text-gray-700 leading-relaxed">
                O nutrólogo é médico especializado em nutrição, podendo solicitar exames, diagnosticar doenças, 
                prescrever medicamentos e suplementos. Trabalha com abordagem clínica para tratamento de 
                condições relacionadas à nutrição e metabolismo.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-8 animate-fadeIn">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 sm:p-12 text-white shadow-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Feedbacks dos Pacientes</h2>
              <p className="text-lg sm:text-xl text-purple-50 leading-relaxed">
                Veja o que nossos pacientes têm a dizer sobre o atendimento e tratamento com o Dr. Alex Saurin.
              </p>
            </div>

            {/* Videos Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {feedbackVideos.map((video, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900">{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-purple-50 border-l-4 border-purple-600 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Quer compartilhar sua experiência?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sua opinião é muito importante para nós! Entre em contato e conte como foi sua experiência com o Dr. Alex Saurin.
              </p>
              <a
                href="https://wa.me/5518998201313"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5" />
                Enviar Feedback
              </a>
            </div>
          </div>
        )}

        {/* Pre-Scheduling Form */}
        <div className="mt-16 bg-white rounded-2xl p-8 sm:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Pré-Agendamento
            </h2>
            <p className="text-lg text-gray-600">
              Preencha o formulário abaixo para agendar sua consulta
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div>
              <label htmlFor="nomeCompleto" className="block text-sm font-semibold text-gray-700 mb-2">
                Nome Completo *
              </label>
              <input
                type="text"
                id="nomeCompleto"
                name="nomeCompleto"
                required
                value={formData.nomeCompleto}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                placeholder="Digite seu nome completo"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="telefone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  required
                  value={formData.telefone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label htmlFor="cpf" className="block text-sm font-semibold text-gray-700 mb-2">
                  CPF *
                </label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  required
                  value={formData.cpf}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                  placeholder="000.000.000-00"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="idade" className="block text-sm font-semibold text-gray-700 mb-2">
                  Idade *
                </label>
                <input
                  type="number"
                  id="idade"
                  name="idade"
                  required
                  min="1"
                  max="120"
                  value={formData.idade}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                  placeholder="Digite sua idade"
                />
              </div>

              <div>
                <label htmlFor="cidade" className="block text-sm font-semibold text-gray-700 mb-2">
                  Cidade *
                </label>
                <input
                  type="text"
                  id="cidade"
                  name="cidade"
                  required
                  value={formData.cidade}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                  placeholder="Digite sua cidade"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Enviar Pré-Agendamento via WhatsApp
            </button>
          </form>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-12 text-white shadow-2xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ou Entre em Contato Diretamente
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Fale conosco pelo WhatsApp para tirar dúvidas ou agendar sua consulta
            </p>
            
            <a
              href="https://wa.me/5518998201313"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Falar no WhatsApp
            </a>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>Seg - Sex: 8h às 18h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>(18) 99820-1313</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 sm:p-12 shadow-xl">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Localização
            </h2>
            <p className="text-lg text-gray-600">
              Clínica Essence Vita - Adamantina/SP
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <a
              href="https://www.google.com/search?q=clinica+essence+vita+adamantina"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full justify-center"
            >
              <MapPin className="w-6 h-6" />
              Ver Localização no Google
            </a>

            <a
              href="https://g.page/r/CaZryl0uEDtPEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full justify-center"
            >
              <Star className="w-6 h-6" />
              Nos Avalie no Google
            </a>

            <p className="text-center text-gray-600 text-sm mt-2">
              Sua avaliação é muito importante para nós
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            © 2024 Dr. Alex Saurin - Urologista & Nutrólogo. Todos os direitos reservados.
          </p>
          <p className="text-xs mt-2">
            CRM 101.819 | RQE 23932
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
