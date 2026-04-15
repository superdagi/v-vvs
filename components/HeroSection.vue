<template>
  <section 
    class="hero-section flex flex-center column " 
    :style="{ 
      backgroundImage: backgroundImage, 
      flex: '1', 
      minHeight: height, 
      color: 'var(--white)', 
      position: 'relative',
      maxWidth: maxWidth,
      margin: '2rem auto',
      width: 'calc(100% - 3rem)'
    }"
  >
    <div class="hero-overlay"></div>
    <div class="full-width q-py-xl "  style="position: relative; z-index: 2;">
      <div class="container">
        <div class="text-center">
          <h1 class="hero-title q-mb-md">
            {{ title }}
          </h1>
          <p class="hero-subtitle q-mb-lg">
            {{ subtitle }}
          </p>
          <div v-if="$slots.actions">
            <slot name="actions" />
          </div>
          <div v-else-if="buttonText">
            <q-btn
              size="lg"
              color="primary"
              :label="buttonText"
              @click="$emit('buttonClick')"
              class="q-px-xl q-py-md"
              style="font-size: 1.1rem; font-weight: 600;"
              unelevated
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title: string
  subtitle: string
  backgroundImage: string
  buttonText?: string
  height?: string
  maxWidth?: string
}

const props = withDefaults(defineProps<Props>(), {
  height: '60vh',
  maxWidth: '1180px'
})
defineEmits<{
  buttonClick: []
}>()
</script>

<style scoped>
/* Hero Section with Background Image */
.hero-section {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 1.5rem;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(26, 32, 44, 0.411) 0%, rgba(45, 55, 72, 0.7) 100%);
  z-index: 1;
}

/* Font styling */
.hero-title {
  font-size: 3.5rem !important;
  font-weight: 700 !important;
  line-height: 1.2 !important;
}

.hero-subtitle {
  font-size: 1.5rem !important;
  font-weight: 300 !important;
  opacity: 0.9 !important;
}

/* Hero Actions and Buttons */
.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.hero-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: var(--border-radius);
  font-weight: 600;
  font-size: 1.1rem;
  transition: var(--transition);
}

.hero-btn.primary {
  background: var(--primary-color);
  color: white;
  border: 2px solid var(--primary-color);
}

.hero-btn.primary:hover {
  background: transparent;
  color: white;
  border-color: white;
}

.hero-btn.secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.hero-btn.secondary:hover {
  background: white;
  color: var(--primary-color);
}

.hero-btn .material-icons {
  font-size: 1.3rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem !important;
  }
  
  .hero-subtitle {
    font-size: 1.2rem !important;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem !important;
  }
  
  .hero-subtitle {
    font-size: 1.1rem !important;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-btn {
    width: 100%;
    max-width: 250px;
    justify-content: center;
  }
}
</style>