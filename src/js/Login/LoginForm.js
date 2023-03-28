import axios from 'axios';
export default {
    data() {
      return {
        isResponsive: false,
        showPassword: false,
        emailUser: '',
        passwordUser: ''
      };
    },
    computed: {
      passwordFieldType() {
        return this.showPassword ? 'text' : 'password';
      }
    },
    mounted() {
      window.addEventListener("resize", this.checkResponsive);
      this.checkResponsive();
    },
    destroyed() {
      window.removeEventListener("resize", this.checkResponsive);
    },
    methods: {
      checkResponsive() {
        this.isResponsive = window.innerWidth <= 768;
        /* Set the value based on the screen size */
      },
      login() {
        const formData = {
          username: this.username,
          password: this.password
        };
        axios.post('/api/login', formData)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  };
  