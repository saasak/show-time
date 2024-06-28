# Test Technique - Développeur SvelteKit avec Supabase

## Objectifs

Le but de ce test technique est de développer une application web en utilisant SvelteKit et Supabase comme base de données. Vous allez travailler avec deux tables de données : `clients` et `contacts`. Les données initiales seront déjà présentes dans la base de données.

Vous devrez créer les pages suivantes :

1. **Page de listing des clients** : Cette page doit afficher la liste des clients avec une pagination.
2. **Page détail du client** : Cette page doit afficher les détails d'un client spécifique.
3. **Page de création de client** : Cette page doit contenir un formulaire permettant la création d'un nouveau client et des contacts.

## Pré-requis

- Connaissances en SvelteKit
- Connaissances en Supabase
- Node.js installé sur votre machine
- Docker installé : [Docker Desktop](https://www.docker.com/products/docker-desktop/)

## Structure du Projet

Le projet est déjà initialisé avec SvelteKit et une instance Supabase locale. Vous trouverez les maquettes graphiques ici : [Test Technique - Figma](https://www.figma.com/design/tQVi5LUuPqHsKyRCcacvja/Test-Technique?node-id=0-1&t=P6X9ZMXvIwWntysc-1).

## Installation et Mise en Place

1. **Cloner le repository**

  ```bash
  git clone <url-du-repo>
  cd <nom-du-repo>
  ```

2. **Installer les dépendances**

  ```bash
  npm i
  ```

3. **Installer Tailwind CSS**

  Installer et utiliser Tailwind CSS pour la gestion des styles. La procédure d'installation de Tailwind CSS n'est pas incluse volontairement pour évaluer votre capacité à rechercher et appliquer des solutions par vous-même.

4. **Démarrer le serveur de développement et le Supabase local**

  ```bash
  npm run dev
  ```

  Cela démarre un Supabase en local sur http://localhost:54323 et le serveur sur http://localhost:5173.

## Détails des Pages à Développer

### 1. Page de Listing des Clients

- **Route** : `/clients`
- **Description** : Afficher la liste des clients avec une pagination.
- **Fonctionnalités** :
 - Récupérer les données des clients depuis Supabase.
 - Implémenter une pagination pour naviguer entre les pages de résultats.
 - Afficher les informations de base des clients (par exemple, nom, email).

### 2. Page Détail du Client

- **Route** : `/clients/[id]`
- **Description** : Afficher les détails d'un client spécifique.
- **Fonctionnalités** :
 - Récupérer les données d'un client spécifique en utilisant son ID.
 - Afficher toutes les informations disponibles sur le client.
 - Lier les contacts associés au client et les afficher.

### 3. Page de Création de Client

- **Route** : `/clients/new`
- **Description** : Formulaire permettant de créer un nouveau client.
- **Fonctionnalités** :
 - Formulaire pour saisir les informations du client (nom, adresse) et de un ou plusieurs contacts associés (prénom et nom, email, téléphone).
 - Validation des données saisies.
 - Envoi des données à Supabase pour création d'un nouveau client.
 - Afficher un message de confirmation ou d'erreur après la soumission du formulaire.


## Ressources

- [Documentation SvelteKit](https://kit.svelte.dev/docs)
- [Documentation Supabase](https://supabase.io/docs)
- Maquettes graphiques : [Test Technique - Figma](https://www.figma.com/design/tQVi5LUuPqHsKyRCcacvja/Test-Technique?node-id=0-1&t=P6X9ZMXvIwWntysc-1).

## Critères d'évaluation

- **Fonctionnalité** : Le projet doit répondre aux objectifs décrits ci-dessus.
- **Qualité du Code** : Le code doit être propre, lisible et bien structuré.
- **Conformité aux Maquettes** : Les pages développées doivent correspondre aux maquettes fournies.
- **Utilisation de Supabase** : Bonne utilisation des fonctionnalités de Supabase pour la gestion des données.
- **Gestion des Erreurs** : Gestion appropriée des erreurs et affichage des messages d'erreur ou de confirmation.

Bonne chance ! Si vous avez des questions, n'hésitez pas à nous contacter.
