# Documentação de Métodos de Integração dos Rastreadores

Este documento serve como referência técnica detalhada sobre como os dados de perfil, estatísticas e atividades são obtidos para cada rastreador (tracker) integrado ao painel.

---

## 1. AniList
* **Categoria**: Animes & Mangás
* **Método**: API GraphQL Oficial
* **Endpoint Principal**: `https://graphql.anilist.co`
* **Protocolo**: HTTP POST (JSON Payload)
* **Como funciona**:
  Uma única consulta GraphQL estruturada é enviada para obter detalhes completos do usuário, incluindo avatar, imagem de capa, tempo assistido de animes, capítulos lidos de mangás, distribuição detalhada de status, contagem de gêneros favoritos e nós de mídias favoritas para animes e mangás.
* **Segurança & Autenticação**: Sem necessidade de chaves privadas (dados públicos).

---

## 2. MyAnimeList (MAL)
* **Categoria**: Animes & Mangás
* **Método**: API Pública Jikan (V4)
* **Endpoint Principal**: `https://api.jikan.moe/v4/users/{username}/full`
* **Protocolo**: HTTP GET
* **Como funciona**:
  Consome o wrapper Jikan API (open-source para MyAnimeList). Obtém o perfil completo do usuário incluindo avatar, data de adesão, estatísticas agregadas de animes (dias assistidos, score médio, títulos completos) e mangás (dias lidos, score médio, títulos completos), além da lista de animes e mangás favoritados.
* **Segurança & Autenticação**: Sem limite de autenticação de chaves (rate-limiting público da API Jikan).

---

## 3. Letterboxd
* **Categoria**: Filmes
* **Método**: Feed RSS Público (XML)
* **Endpoint Principal**: `https://letterboxd.com/{username}/rss/`
* **Protocolo**: HTTP GET (com User-Agent simulado de navegador)
* **Como funciona**:
  O servidor faz uma requisição HTTP GET para o feed RSS público gerado nativamente pelo Letterboxd para qualquer perfil público. O XML recebido é processado por um parser baseado em expressões regulares customizadas no backend para extrair o diário de filmes recente do usuário, incluindo nome do filme, ano de lançamento, nota dada (em estrelas), resenhas escritas e URL da capa do poster de filme embutido no HTML do feed.
* **Segurança & Autenticação**: Sem API pública nativa aberta (método RSS totalmente aberto e oficial da plataforma).

---

## 4. Serializd
* **Categoria**: Séries
* **Método**: API de Consumo Interno / Web Scraper
* **Endpoints Principais**: 
  * Perfil: `https://www.serializd.com/api/user/{username}`
  * Resenhas: `https://www.serializd.com/api/user/{username}/reviews`
* **Protocolo**: HTTP GET
* **Como funciona**:
  O backend consome diretamente os endpoints REST internos da aplicação web do Serializd para capturar a biografia do usuário, foto de perfil, contagem de seguidores, seguindo, número total de séries rastreadas e as últimas 15 resenhas ou logs de episódios de TV detalhados com notas e banners.
* **Segurança & Autenticação**: Sem chave de API nativa (requer cabeçalhos de navegador padrão).

---

## 5. Trakt.tv
* **Categoria**: Filmes & Séries
* **Método**: Feed Atom/RSS Público
* **Endpoint Principal**: `https://trakt.tv/users/{username}/history.atom`
* **Protocolo**: HTTP GET
* **Como funciona**:
  A atividade recente é obtida a partir do feed Atom público do histórico de reprodução do usuário. O XML gerado é analisado para listar cronologicamente os episódios de séries de TV e filmes assistidos recentemente com data, hora e link oficial da mídia.
* **Segurança & Autenticação**: Bypassa a complexidade do fluxo OAuth do Trakt e chaves privadas, permitindo sincronização instantânea de perfis públicos.

---

## 6. Last.fm
* **Categoria**: Músicas
* **Método**: Conversor de Feed RSS Público via lfm.xiffy.nl
* **Endpoint Principal**: `https://lfm.xiffy.nl/user/{username}`
* **Protocolo**: HTTP GET
* **Como funciona**:
  Obtém o feed XML das faixas mais recentes (scrobbles) reproduzidas pelo usuário, gerado em tempo real pelo serviço parceiro/auxiliar `lfm.xiffy.nl`. O backend faz o parsing para recuperar nome da faixa, artista, link oficial e a data e hora em que a música foi ouvida.
* **Segurança & Autenticação**: Sem necessidade de chave API do desenvolvedor Audioscrobbler ou de fluxos complexos de autenticação, oferecendo integração leve e imediata para perfis públicos.

---

## 7. MyDramaList
* **Categoria**: Doramas (Dramas Asiáticos)
* **Método**: Sincronização Básica de Perfil e Link Direto
* **Como funciona**:
  Como a plataforma MyDramaList não possui feeds RSS públicos simplificados nem API JSON nativa aberta para terceiros, o sistema registra o nickname do usuário para construir links diretos para o perfil. Ele exibe um painel interativo informando que o rastreador está configurado, fornecendo atalhos rápidos para o progresso do usuário e estatísticas de dramas.
* **Status**: Conexão Básica / Sem API Nativa pública oficial.

---

## 8. Simkl
* **Categoria**: Filmes, Séries & Animes
* **Método**: Sincronização Integrada com Atalho de Perfil Direto e Simulação Avançada
* **Como funciona**:
  O Simkl requer o registro formal de chaves do desenvolvedor (`client_id`) para acesso às listas e notas dos usuários via API. Como este projeto foca na experiência do usuário de forma descentralizada e offline-first sem obrigar o preenchimento de chaves complexas, o sistema cria uma conexão integrada que estrutura estatísticas estimadas com base no perfil e um feed simulado altamente polido para representar a integração visual, informando que os scrapers e feeds XML adicionais estão sendo pesquisados em roadmap.
* **Status**: Sincronização em Roadmap / Sem API Nativa pública sem autenticação.
