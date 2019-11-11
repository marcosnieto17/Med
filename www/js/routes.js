angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('medicinaUNLaR.inicio', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('medicinaUNLaR.planDeEstudios', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planDeEstudios.html',
        controller: 'planDeEstudiosCtrl'
      }
    }
  })

  .state('medicinaUNLaR.perfilDelGraduado', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/perfilDelGraduado.html',
        controller: 'perfilDelGraduadoCtrl'
      }
    }
  })

  .state('medicinaUNLaR.alcanceDelTTulo', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/alcanceDelTTulo.html',
        controller: 'alcanceDelTTuloCtrl'
      }
    }
  })

  .state('medicinaUNLaR.horarios', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarios.html',
        controller: 'horariosCtrl'
      }
    }
  })

  .state('medicinaUNLaR', {
    url: '/side-menu21',
    templateUrl: 'templates/medicinaUNLaR.html',
    controller: 'medicinaUNLaRCtrl'
  })

  .state('medicinaUNLaR.bibliotecaDigital', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bibliotecaDigital.html',
        controller: 'bibliotecaDigitalCtrl'
      }
    }
  })

  .state('medicinaUNLaR.1AO', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/1AO.html',
        controller: '1AOCtrl'
      }
    }
  })

  .state('medicinaUNLaR.programasDeCTedra', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/programasDeCTedra.html',
        controller: 'programasDeCTedraCtrl'
      }
    }
  })

  .state('medicinaUNLaR.2AO', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/2AO.html',
        controller: '2AOCtrl'
      }
    }
  })

  .state('medicinaUNLaR.3AO', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/3AO.html',
        controller: '3AOCtrl'
      }
    }
  })

  .state('medicinaUNLaR.4AO', {
    url: '/page40',
    views: {
      'side-menu21': {
        templateUrl: 'templates/4AO.html',
        controller: '4AOCtrl'
      }
    }
  })

  .state('medicinaUNLaR.5AO', {
    url: '/page41',
    views: {
      'side-menu21': {
        templateUrl: 'templates/5AO.html',
        controller: '5AOCtrl'
      }
    }
  })

  .state('medicinaUNLaR.6AO', {
    url: '/page63',
    views: {
      'side-menu21': {
        templateUrl: 'templates/6AO.html',
        controller: '6AOCtrl'
      }
    }
  })

  .state('medicinaUNLaR.acercaDeLaApp', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acercaDeLaApp.html',
        controller: 'acercaDeLaAppCtrl'
      }
    }
  })

  .state('medicinaUNLaR.calendarioAcadMico', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calendarioAcadMico.html',
        controller: 'calendarioAcadMicoCtrl'
      }
    }
  })

  .state('medicinaUNLaR.examenDeIngreso', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/examenDeIngreso.html',
        controller: 'examenDeIngresoCtrl'
      }
    }
  })

  .state('medicinaUNLaR.anatomANormal', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/anatomANormal.html',
        controller: 'anatomANormalCtrl'
      }
    }
  })

  .state('medicinaUNLaR.quMicaBiolGica', {
    url: '/page42',
    views: {
      'side-menu21': {
        templateUrl: 'templates/quMicaBiolGica.html',
        controller: 'quMicaBiolGicaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.saludPBlicaI', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/saludPBlicaI.html',
        controller: 'saludPBlicaICtrl'
      }
    }
  })

  .state('medicinaUNLaR.expresiNOralYEscrita', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/expresiNOralYEscrita.html',
        controller: 'expresiNOralYEscritaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.fisiologAHumana', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fisiologAHumana.html',
        controller: 'fisiologAHumanaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.histologAEmbriologAYGenTica', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/histologAEmbriologAYGenTica.html',
        controller: 'histologAEmbriologAYGenTicaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.fSicaBiomDica', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fSicaBiomDica.html',
        controller: 'fSicaBiomDicaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.saludPBlicaII', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/saludPBlicaII.html',
        controller: 'saludPBlicaIICtrl'
      }
    }
  })

  .state('medicinaUNLaR.humanismoMDico', {
    url: '/page21',
    views: {
      'side-menu21': {
        templateUrl: 'templates/humanismoMDico.html',
        controller: 'humanismoMDicoCtrl'
      }
    }
  })

  .state('medicinaUNLaR.inglS', {
    url: '/page22',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inglS.html',
        controller: 'inglSCtrl'
      }
    }
  })

  .state('medicinaUNLaR.electivaIaPsicologASocial', {
    url: '/page23',
    views: {
      'side-menu21': {
        templateUrl: 'templates/electivaIaPsicologASocial.html',
        controller: 'electivaIaPsicologASocialCtrl'
      }
    }
  })

  .state('medicinaUNLaR.electivaIbNutriciNBSica', {
    url: '/page24',
    views: {
      'side-menu21': {
        templateUrl: 'templates/electivaIbNutriciNBSica.html',
        controller: 'electivaIbNutriciNBSicaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.electivaIcFundamentosDeInstrumentaciNQuirRgica', {
    url: '/page25',
    views: {
      'side-menu21': {
        templateUrl: 'templates/electivaIcFundamentosDeInstrumentaciNQuirRgica.html',
        controller: 'electivaIcFundamentosDeInstrumentaciNQuirRgicaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.patologA', {
    url: '/page26',
    views: {
      'side-menu21': {
        templateUrl: 'templates/patologA.html',
        controller: 'patologACtrl'
      }
    }
  })

  .state('medicinaUNLaR.parasitologAYMicologAMDica', {
    url: '/page27',
    views: {
      'side-menu21': {
        templateUrl: 'templates/parasitologAYMicologAMDica.html',
        controller: 'parasitologAYMicologAMDicaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.medicinaPsicosocial', {
    url: '/page28',
    views: {
      'side-menu21': {
        templateUrl: 'templates/medicinaPsicosocial.html',
        controller: 'medicinaPsicosocialCtrl'
      }
    }
  })

  .state('medicinaUNLaR.epistemologAEIntroducciNALaInvestigaciNCientFica', {
    url: '/page29',
    views: {
      'side-menu21': {
        templateUrl: 'templates/epistemologAEIntroducciNALaInvestigaciNCientFica.html',
        controller: 'epistemologAEIntroducciNALaInvestigaciNCientFicaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.medicinaAntropolGica', {
    url: '/page30',
    views: {
      'side-menu21': {
        templateUrl: 'templates/medicinaAntropolGica.html',
        controller: 'medicinaAntropolGicaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.bacteriologAYVirologAMDica', {
    url: '/page31',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bacteriologAYVirologAMDica.html',
        controller: 'bacteriologAYVirologAMDicaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.saludPBlicaIII', {
    url: '/page32',
    views: {
      'side-menu21': {
        templateUrl: 'templates/saludPBlicaIII.html',
        controller: 'saludPBlicaIIICtrl'
      }
    }
  })

  .state('medicinaUNLaR.bioinformTica', {
    url: '/page33',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bioinformTica.html',
        controller: 'bioinformTicaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.electivaIIAMedicinaFamiliar', {
    url: '/page34',
    views: {
      'side-menu21': {
        templateUrl: 'templates/electivaIIAMedicinaFamiliar.html',
        controller: 'electivaIIAMedicinaFamiliarCtrl'
      }
    }
  })

  .state('medicinaUNLaR.electivaIIBAdministraciNGestiNDeLaSaludYAuditorAMDica', {
    url: '/page35',
    views: {
      'side-menu21': {
        templateUrl: 'templates/electivaIIBAdministraciNGestiNDeLaSaludYAuditorAMDica.html',
        controller: 'electivaIIBAdministraciNGestiNDeLaSaludYAuditorAMDicaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.ElectivaIICPatologARegional', {
    url: '/page36',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ElectivaIICPatologARegional.html',
        controller: 'ElectivaIICPatologARegionalCtrl'
      }
    }
  })

  .state('medicinaUNLaR.electivaIIDProcedimientosYTCnicasQuirRgicasDeEmergencia', {
    url: '/page43',
    views: {
      'side-menu21': {
        templateUrl: 'templates/electivaIIDProcedimientosYTCnicasQuirRgicasDeEmergencia.html',
        controller: 'electivaIIDProcedimientosYTCnicasQuirRgicasDeEmergenciaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.clNicaMDicaI', {
    url: '/page44',
    views: {
      'side-menu21': {
        templateUrl: 'templates/clNicaMDicaI.html',
        controller: 'clNicaMDicaICtrl'
      }
    }
  })

  .state('medicinaUNLaR.clNicaGinecolGica', {
    url: '/page45',
    views: {
      'side-menu21': {
        templateUrl: 'templates/clNicaGinecolGica.html',
        controller: 'clNicaGinecolGicaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.farmacologABSica', {
    url: '/page46',
    views: {
      'side-menu21': {
        templateUrl: 'templates/farmacologABSica.html',
        controller: 'farmacologABSicaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.clNicaOftalmolGica', {
    url: '/page47',
    views: {
      'side-menu21': {
        templateUrl: 'templates/clNicaOftalmolGica.html',
        controller: 'clNicaOftalmolGicaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.clNicaInfectolGica', {
    url: '/page48',
    views: {
      'side-menu21': {
        templateUrl: 'templates/clNicaInfectolGica.html',
        controller: 'clNicaInfectolGicaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.saludMental', {
    url: '/page49',
    views: {
      'side-menu21': {
        templateUrl: 'templates/saludMental.html',
        controller: 'saludMentalCtrl'
      }
    }
  })

  .state('medicinaUNLaR.radiologAYDiagnSticoPorImGenes', {
    url: '/page50',
    views: {
      'side-menu21': {
        templateUrl: 'templates/radiologAYDiagnSticoPorImGenes.html',
        controller: 'radiologAYDiagnSticoPorImGenesCtrl'
      }
    }
  })

  .state('medicinaUNLaR.bioTica', {
    url: '/page51',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bioTica.html',
        controller: 'bioTicaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.clNicaDermatolGica', {
    url: '/page52',
    views: {
      'side-menu21': {
        templateUrl: 'templates/clNicaDermatolGica.html',
        controller: 'clNicaDermatolGicaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.clNicaNeurolGica', {
    url: '/page53',
    views: {
      'side-menu21': {
        templateUrl: 'templates/clNicaNeurolGica.html',
        controller: 'clNicaNeurolGicaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.saludPBlicaIV', {
    url: '/page54',
    views: {
      'side-menu21': {
        templateUrl: 'templates/saludPBlicaIV.html',
        controller: 'saludPBlicaIVCtrl'
      }
    }
  })

  .state('medicinaUNLaR.clNicaMDicaII', {
    url: '/page55',
    views: {
      'side-menu21': {
        templateUrl: 'templates/clNicaMDicaII.html',
        controller: 'clNicaMDicaIICtrl'
      }
    }
  })

  .state('medicinaUNLaR.clNicaQuirRgicaI', {
    url: '/page56',
    views: {
      'side-menu21': {
        templateUrl: 'templates/clNicaQuirRgicaI.html',
        controller: 'clNicaQuirRgicaICtrl'
      }
    }
  })

  .state('medicinaUNLaR.clNicaObstTricaYPerinatolGica', {
    url: '/page57',
    views: {
      'side-menu21': {
        templateUrl: 'templates/clNicaObstTricaYPerinatolGica.html',
        controller: 'clNicaObstTricaYPerinatolGicaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.clNicaPediTrica', {
    url: '/page58',
    views: {
      'side-menu21': {
        templateUrl: 'templates/clNicaPediTrica.html',
        controller: 'clNicaPediTricaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.clNicaTraumatolGica', {
    url: '/page59',
    views: {
      'side-menu21': {
        templateUrl: 'templates/clNicaTraumatolGica.html',
        controller: 'clNicaTraumatolGicaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.saludPBlicaV', {
    url: '/page60',
    views: {
      'side-menu21': {
        templateUrl: 'templates/saludPBlicaV.html',
        controller: 'saludPBlicaVCtrl'
      }
    }
  })

  .state('prCticaProfSupervisada', {
    url: '/page61',
    templateUrl: 'templates/prCticaProfSupervisada.html',
    controller: 'prCticaProfSupervisadaCtrl'
  })

  .state('medicinaUNLaR.electivaIIIAMedicinaAlternativa', {
    url: '/page62',
    views: {
      'side-menu21': {
        templateUrl: 'templates/electivaIIIAMedicinaAlternativa.html',
        controller: 'electivaIIIAMedicinaAlternativaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.electivaIIIBGerontologA', {
    url: '/page64',
    views: {
      'side-menu21': {
        templateUrl: 'templates/electivaIIIBGerontologA.html',
        controller: 'electivaIIIBGerontologACtrl'
      }
    }
  })

  .state('medicinaUNLaR.electivaIIICGenTica', {
    url: '/page65',
    views: {
      'side-menu21': {
        templateUrl: 'templates/electivaIIICGenTica.html',
        controller: 'electivaIIICGenTicaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.electivaIIIDMedicinaDelDolor', {
    url: '/page66',
    views: {
      'side-menu21': {
        templateUrl: 'templates/electivaIIIDMedicinaDelDolor.html',
        controller: 'electivaIIIDMedicinaDelDolorCtrl'
      }
    }
  })

  .state('medicinaUNLaR.electivaIIIENuevasTecnologAsAplicadasALaMedicina', {
    url: '/page67',
    views: {
      'side-menu21': {
        templateUrl: 'templates/electivaIIIENuevasTecnologAsAplicadasALaMedicina.html',
        controller: 'electivaIIIENuevasTecnologAsAplicadasALaMedicinaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.clNicaUrolGica', {
    url: '/page68',
    views: {
      'side-menu21': {
        templateUrl: 'templates/clNicaUrolGica.html',
        controller: 'clNicaUrolGicaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.farmacologAClNica', {
    url: '/page69',
    views: {
      'side-menu21': {
        templateUrl: 'templates/farmacologAClNica.html',
        controller: 'farmacologAClNicaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.medicinaLegalYToxicolGica', {
    url: '/page70',
    views: {
      'side-menu21': {
        templateUrl: 'templates/medicinaLegalYToxicolGica.html',
        controller: 'medicinaLegalYToxicolGicaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.clNicaOtorrinolaringolGica', {
    url: '/page71',
    views: {
      'side-menu21': {
        templateUrl: 'templates/clNicaOtorrinolaringolGica.html',
        controller: 'clNicaOtorrinolaringolGicaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.electivaIVAReumatologA', {
    url: '/page72',
    views: {
      'side-menu21': {
        templateUrl: 'templates/electivaIVAReumatologA.html',
        controller: 'electivaIVAReumatologACtrl'
      }
    }
  })

  .state('medicinaUNLaR.electivaIVBMedicinaAmbulatoria', {
    url: '/page73',
    views: {
      'side-menu21': {
        templateUrl: 'templates/electivaIVBMedicinaAmbulatoria.html',
        controller: 'electivaIVBMedicinaAmbulatoriaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.electivaIVCToxicologAIntoxicaciones', {
    url: '/page74',
    views: {
      'side-menu21': {
        templateUrl: 'templates/electivaIVCToxicologAIntoxicaciones.html',
        controller: 'electivaIVCToxicologAIntoxicacionesCtrl'
      }
    }
  })

  .state('medicinaUNLaR.electivaIVDEducaciNMDica', {
    url: '/page75',
    views: {
      'side-menu21': {
        templateUrl: 'templates/electivaIVDEducaciNMDica.html',
        controller: 'electivaIVDEducaciNMDicaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.electivaIVEMedicinaPreventivaEnLaMujerYOncologAMDica', {
    url: '/page76',
    views: {
      'side-menu21': {
        templateUrl: 'templates/electivaIVEMedicinaPreventivaEnLaMujerYOncologAMDica.html',
        controller: 'electivaIVEMedicinaPreventivaEnLaMujerYOncologAMDicaCtrl'
      }
    }
  })

  .state('medicinaUNLaR.clNicaQuirRgicaII', {
    url: '/page77',
    views: {
      'side-menu21': {
        templateUrl: 'templates/clNicaQuirRgicaII.html',
        controller: 'clNicaQuirRgicaIICtrl'
      }
    }
  })

  .state('medicinaUNLaR.clNicaMDicaIII', {
    url: '/page78',
    views: {
      'side-menu21': {
        templateUrl: 'templates/clNicaMDicaIII.html',
        controller: 'clNicaMDicaIIICtrl'
      }
    }
  })

  .state('medicinaUNLaR.tocoginecologA', {
    url: '/page79',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tocoginecologA.html',
        controller: 'tocoginecologACtrl'
      }
    }
  })

  .state('medicinaUNLaR.pediatrA', {
    url: '/page80',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pediatrA.html',
        controller: 'pediatrACtrl'
      }
    }
  })

  .state('medicinaUNLaR.examenFinalIntegrador', {
    url: '/page81',
    views: {
      'side-menu21': {
        templateUrl: 'templates/examenFinalIntegrador.html',
        controller: 'examenFinalIntegradorCtrl'
      }
    }
  })

  .state('medicinaUNLaR.horarioIngreso', {
    url: '/page37',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarioIngreso.html',
        controller: 'horarioIngresoCtrl'
      }
    }
  })

  .state('medicinaUNLaR.horario1Cuatrimestre', {
    url: '/page38',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horario1Cuatrimestre.html',
        controller: 'horario1CuatrimestreCtrl'
      }
    }
  })

  .state('medicinaUNLaR.horario2Cuatrimestre', {
    url: '/page39',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horario2Cuatrimestre.html',
        controller: 'horario2CuatrimestreCtrl'
      }
    }
  })

  .state('medicinaUNLaR.gUAUNLaR', {
    url: '/page82',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gUAUNLaR.html',
        controller: 'gUAUNLaRCtrl'
      }
    }
  })

  .state('medicinaUNLaR.exMenesFinales', {
    url: '/page83',
    views: {
      'side-menu21': {
        templateUrl: 'templates/exMenesFinales.html',
        controller: 'exMenesFinalesCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});