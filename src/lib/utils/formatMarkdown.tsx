import React from 'react';
import { Text } from '@mantine/core';

/**
 * Преобразует markdown-текст в React-компоненты
 * Поддерживает:
 * - **текст** -> жирный текст
 * - \n\n -> параграфы
 * - \n -> переносы строк
 */
export function formatMarkdown(content: string): React.ReactNode {
  if (!content) return null;

  // Сначала заменяем литеральные \n на реальные переносы строк (если они приходят как строки)
  // Это нужно для случаев, когда \n приходит как строка, а не как реальный символ
  let processedContent = content;
  
  // Разбиваем на параграфы по двойным переносам строк
  const paragraphs = processedContent.split(/\n\n+/).filter(p => p.trim());

  return (
    <>
      {paragraphs.map((paragraph, index) => {
        // Обрабатываем каждый параграф
        const parts = parseInlineMarkdown(paragraph.trim());
        
        return (
          <div key={index} style={{ marginBottom: index < paragraphs.length - 1 ? '1em' : 0 }}>
            {parts}
          </div>
        );
      })}
    </>
  );
}

/**
 * Парсит inline markdown (жирный текст, переносы строк)
 */
function parseInlineMarkdown(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let currentIndex = 0;
  
  // Регулярное выражение для поиска **текст**
  const boldRegex = /\*\*(.+?)\*\*/g;
  const matches: Array<{ match: string; index: number; text: string }> = [];
  let match;
  
  while ((match = boldRegex.exec(text)) !== null) {
    matches.push({
      match: match[0],
      index: match.index,
      text: match[1],
    });
  }
  
  // Если нет жирного текста, просто обрабатываем переносы строк
  if (matches.length === 0) {
    const lines = text.split('\n');
    return lines.map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i < lines.length - 1 && <br />}
      </React.Fragment>
    ));
  }
  
  // Обрабатываем текст с жирными вставками
  matches.forEach((boldMatch, matchIndex) => {
    // Текст до жирного фрагмента
    if (boldMatch.index > currentIndex) {
      const beforeText = text.substring(currentIndex, boldMatch.index);
      if (beforeText) {
        parts.push(
          <React.Fragment key={`before-${matchIndex}`}>
            {beforeText.split('\n').map((line, i, arr) => (
              <React.Fragment key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
          </React.Fragment>
        );
      }
    }
    
    // Жирный текст
    parts.push(
      <Text key={`bold-${matchIndex}`} component="span" fw={700}>
        {boldMatch.text}
      </Text>
    );
    
    currentIndex = boldMatch.index + boldMatch.match.length;
  });
  
  // Текст после последнего жирного фрагмента
  if (currentIndex < text.length) {
    const afterText = text.substring(currentIndex);
    if (afterText) {
      parts.push(
        <React.Fragment key="after">
          {afterText.split('\n').map((line, i, arr) => (
            <React.Fragment key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </React.Fragment>
          ))}
        </React.Fragment>
      );
    }
  }
  
  return parts;
}

