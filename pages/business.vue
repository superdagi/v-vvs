<template>
  <div class="business-page">
    <!-- Hero Section -->
    <HeroSection
      title="Profesjonelle VVS-løsninger"
      subtitle="Med over 20 års erfaring tilbyr vi pålitelige og effektive VVS-løsninger for både bolig- og næringseiendommer."
      :background-image="`url('${heroImage}')`"
      height="40vh"
    />

    <!-- Features Section -->
    <section class="q-py-xl bg-grey-2">
      <q-container>
        <div class="row justify-center q-gutter-md">
          <div class="col-12 col-md-3">
            <q-card class="full-height text-center q-pa-lg shadow-2 transition-hover">
              <q-card-section>
                <q-icon name="schedule" size="3rem" color="primary" class="q-mb-md" />
                <div class="text-h6 q-mb-sm">24/7 akutt</div>
                <p class="text-body2 text-grey-7">Døgnkontinuerlig beredskap for akutte VVS-problemer</p>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-3">
            <q-card class="full-height text-center q-pa-lg shadow-2 transition-hover">
              <q-card-section>
                <q-icon name="verified" size="3rem" color="primary" class="q-mb-md" />
                <div class="text-h6 q-mb-sm">Sertifiserte eksperter</div>
                <p class="text-body2 text-grey-7">Autoriserte og sertifiserte fagfolk med omfattende erfaring</p>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-3">
            <q-card class="full-height text-center q-pa-lg shadow-2 transition-hover">
              <q-card-section>
                <q-icon name="verified_user" size="3rem" color="primary" class="q-mb-md" />
                <div class="text-h6 q-mb-sm">Kvalitetsgaranti</div>
                <p class="text-body2 text-grey-7">Alt arbeid kommer med omfattende garanti og kvalitetssikring</p>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-container>
    </section>

    <!-- Services Section -->
    <section id="services" class="q-py-xl">
      <q-container>
        <div class="text-center q-mb-xl">
          <h2 class="text-h3 text-weight-medium q-mb-md">Våre tjenester</h2>
          <p class="text-h6 text-grey-7">
            Omfattende VVS-løsninger for alle dine behov
          </p>
        </div>
        
        <div class="row q-gutter-md">
          <div class="col-12 col-sm-6 col-lg-4" v-for="service in services" :key="service.id">
            <q-card class="full-height shadow-3 transition-hover">
              <q-img
                :src="service.image"
                :alt="service.title"
                height="160px"
                class="rounded-borders-top"
              />
              <q-card-section class="q-pa-lg">
                <div class="text-h6 q-mb-sm">{{ service.title }}</div>
                <p class="text-body2 text-grey-7 line-height-md">{{ service.description }}</p>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-container>
    </section>

    <!-- About Section -->
    <section class="q-py-xl bg-grey-2">
      <q-container>
        <div class="row items-center q-gutter-lg">
          <div class="col-12 col-md-6">
            <div class="q-pr-md">
              <h2 class="text-h3 text-weight-medium q-mb-md">Om Vesterålen VVS</h2>
              <p class="text-body1 text-grey-7 line-height-lg q-mb-lg">
                Etablert i 2026, har Vesterålen VVS som mål å betjene lokalsamfunnet med 
                profesjonelle rørleggertjenester. Vårt team 
                av sertifiserte eksperter er forpliktet til å levere løsninger av høy kvalitet 
                som oppfyller de høyeste industristandardene.
              </p>
              <div class="row q-gutter-md">
                <div class="col text-center">
                  <div class="text-h2 text-weight-bold text-primary">500+</div>
                  <div class="text-caption text-grey-7 text-weight-medium">Prosjekter fullført</div>
                </div>
                <div class="col text-center">
                  <div class="text-h2 text-weight-bold text-primary">20+</div>
                  <div class="text-caption text-grey-7 text-weight-medium">Års erfaring</div>
                </div>
                <div class="col text-center">
                  <div class="text-h2 text-weight-bold text-primary">98%</div>
                  <div class="text-caption text-grey-7 text-weight-medium">Kundetilfredshet</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <q-img
              src="https://picsum.photos/500/400?random=7"
              alt="Vårt profesjonelle team"
              class="rounded-borders shadow-3"
            />
          </div>
        </div>
      </q-container>
    </section>

  </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from 'nuxt/app'
import { ref } from 'vue'
import heroImage from '~/assets/1367981681-2048x2048.jpg';

// SEO - useSeoMeta is auto-imported in Nuxt 3.7+
useSeoMeta({
  title: 'Profesjonelle VVS-tjenester | Vesterålen VVS',
  ogTitle: 'Profesjonelle VVS-tjenester | Vesterålen VVS',
  description: 'Ekspert rørlegger-, varme- og ventilasjonssystemer med over 20 års erfaring. 24/7 akuttberedskap tilgjengelig.',
  ogDescription: 'Ekspert rørlegger-, varme- og ventilasjonssystemer med over 20 års erfaring. 24/7 akuttberedskap tilgjengelig.',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image'
})

// Services data
const services = ref([
  {
    id: 1,
    title: 'Rørleggertjenester',
    description: 'Komplette rørleggerløsninger inkludert installasjon, reparasjon og vedlikehold av vannsystemer.',
    image: 'https://picsum.photos/400/300?random=2'
  },
  {
    id: 2,
    title: 'Varmesystemer',
    description: 'Installasjon og vedlikehold av varmesystemer, radiatorer og gulvvarme.',
    image: 'https://picsum.photos/400/300?random=3'
  },
  {
    id: 3,
    title: 'Ventilasjon',
    description: 'Profesjonell ventilasjonssystemdesign, installasjon og luftkvalitetsløsninger.',
    image: 'https://picsum.photos/400/300?random=4'
  },
  {
    id: 4,
    title: 'Baderomsrenovering',
    description: 'Komplette baderomsrenoveringstjenester fra design til endelig installasjon.',
    image: 'https://picsum.photos/400/300?random=5'
  },
  {
    id: 5,
    title: 'Akuttjenester',
    description: '24/7 akutt rørlegger- og varmetjenester for øyeblikkelige problemer.',
    image: 'https://picsum.photos/400/300?random=6'
  },
  {
    id: 6,
    title: 'Vedlikehold',
    description: 'Regelmessige vedlikeholdskontrakter for å holde dine VVS-systemer i effektiv drift.',
    image: 'https://picsum.photos/400/300?random=8'
  }
])
</script>

<style scoped>
/* Minimal custom styles - most styling is handled by Quasar classes */
.business-page {
  min-height: 100vh;
}

.transition-hover {
  transition: all 0.3s ease;
}

.transition-hover:hover {
  transform: translateY(-5px);
}

.line-height-md {
  line-height: 1.6;
}

.line-height-lg {
  line-height: 1.8;
}
</style>