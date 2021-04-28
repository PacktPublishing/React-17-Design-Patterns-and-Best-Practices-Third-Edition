import styled from 'styled-components'

export const StyledLogin = styled.div`
  .wrapper {
    background-color: #444;
    color: #333;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 200px;
    padding: 20px;
    overflow: hidden;
    position: relative;
    width: 300px;

    .alert {
      border-radius: 0.25rem;
      border: 1px solid transparent;
      margin-bottom: 1rem;
      padding: 0.75rem 1.25rem;
      position: relative;
      font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', Arial, sans-serif;
      font-size: 1rem;
      font-weight: 400;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      color: #721c24;
      background-color: #f8d7da;
      border-color: #f5c6cb;
    }

    .form {
      position: relative;
      margin: 0 auto;
      margin-top: 20px;
      width: 90%;

      input {
        background: white;
        border-radius: 5px;
        border: 1px solid #EEE;
        color: #000;
        font-size: 14px;
        font-weight: 400;
        height: 25px;
        padding: 8px;
        transition: all 0.3s ease 0s;
        width: 93%;
        border-radius: 0;

        &:focus {
          box-shadow: 0 0 5px rgba(81, 203, 238, 1);
          border: 1px solid rgba(81, 203, 238, 1);
          outline: 0;
        }
      }

      .logo {
        margin-bottom: 20px;
      }

      .actions {
        display: flex;
        justify-content: space-between;
        align-items: baseline;

        button {
          outline: 0;
          cursor: pointer;
          padding: 9px 18px;
          font-size: 13px;
          line-height: 1.25rem;
          border-radius: 4px;
          user-select: none;
          border: 1px solid transparent;
          font-weight: 700;
          text-align: center;
          vertical-align: middle;
          transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
          border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        }
      }
    }
  }
`
