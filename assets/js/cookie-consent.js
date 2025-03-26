document.addEventListener('DOMContentLoaded', function () {
    var cookieConsent = initCookieConsent();
  
    cookieConsent.run({
      current_lang: 'de',
      autoclear_cookies: true, // default: false
      page_scripts: true, // default: false
  
      gui_options: {
        consent_modal: {
          layout: 'box', // box/cloud/bar
          position: 'bottom center', // bottom/middle/top + left/right/center
          transition: 'slide', // zoom/slide
        },
        settings_modal: {
          layout: 'box', // box/bar
          position: 'left', // left/right
          transition: 'slide', // zoom/slide
        },
      },
  
      languages: {
        de: {
          consent_modal: {
            title: 'Wir verwenden Cookies!',
            description: 'Hallo, diese Website verwendet essentielle Cookies, um sicherzustellen, dass die Website ordnungsgemäß funktioniert, und Tracking-Cookies, um zu verstehen, wie Sie mit ihr interagieren. Letztere werden nur nach Zustimmung gesetzt. <button type="button" data-cc="c-settings" class="cc-link">Einstellungen</button>',
            primary_btn: {
              text: 'Alle akzeptieren',
              role: 'accept_all', // 'accept_selected' or 'accept_all'
            },
            secondary_btn: {
              text: 'Nur notwendige',
              role: 'accept_necessary', // 'settings' or 'accept_necessary'
            },
          },
          settings_modal: {
            title: 'Cookie-Einstellungen',
            save_settings_btn: 'Einstellungen speichern',
            accept_all_btn: 'Alle akzeptieren',
            reject_all_btn: 'Alle ablehnen',
            close_btn_label: 'Schließen',
            blocks: [
              {
                title: 'Cookie-Nutzung',
                description: 'Wir verwenden Cookies, um die Grundfunktionen der Website zu gewährleisten und Ihr Online-Erlebnis zu verbessern. Sie können für jede Kategorie wählen, ob Sie diese zulassen möchten.',
              },
              {
                title: 'Essentielle Cookies',
                description: 'Diese Cookies sind notwendig, um die Grundfunktionen der Website zu gewährleisten.',
                toggle: {
                  value: 'necessary',
                  enabled: true,
                  readonly: true, // cookie categories with readonly=true are all treated as "necessary cookies"
                },
              },
              {
                title: 'Performance und Analyse',
                description: 'Diese Cookies ermöglichen es uns, die Nutzung der Website zu analysieren, um die Leistung zu messen und zu verbessern.',
                toggle: {
                  value: 'analytics', // your cookie category
                  enabled: false,
                  readonly: false,
                },
              },
              {
                title: 'Werbung und Targeting',
                description: 'Diese Cookies werden verwendet, um Werbung anzuzeigen, die für Sie relevant ist.',
                toggle: {
                  value: 'targeting',
                  enabled: false,
                  readonly: false,
                },
              },
            ],
          },
        },
      },
    });
  });