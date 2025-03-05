from sumy.parsers.plaintext import PlaintextParser
from sumy.nlp.tokenizers import Tokenizer
from sumy.summarizers.lsa import LsaSummarizer 

def summarize_text(text, sentence_count=3):

    parser = PlaintextParser.from_string(text, Tokenizer("english"))
    
    summarizer = LsaSummarizer()
    
    summary_sentences = summarizer(parser.document, sentence_count)
    
    summary = ' '.join(str(sentence) for sentence in summary_sentences)
    
    return summary
