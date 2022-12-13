import TranslateEngine, { TranslateOptions } from './engines/base'
import DeepLTranslateEngine from './engines/deepl'
import GoogleTranslateEngine from './engines/google'
import GoogleTranslateCnEngine from './engines/google-cn'
import LibreTranslateEngine from './engines/libretranslate'
import OpenCCTranslateEngine from './engines/opencc'

export class Translator {
  engines: Record<string, TranslateEngine> ={
    'google': new GoogleTranslateEngine(),
    'google-cn': new GoogleTranslateCnEngine(),
    'deepl': new DeepLTranslateEngine(),
    'libretranslate': new LibreTranslateEngine(),
    'opencc': new OpenCCTranslateEngine(),
  }

  async translate(options: TranslateOptions & { engine: string }) {
    const engine = this.engines[options.engine]
    return await engine.translate(options)
  }
}

export * from './engines/base'
export {
  TranslateEngine,
  GoogleTranslateEngine,
  GoogleTranslateCnEngine,
  DeepLTranslateEngine,
  LibreTranslateEngine,
}
